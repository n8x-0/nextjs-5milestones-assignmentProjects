import { Readable } from "stream";
import { auth } from "@/auth";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import mongoDBconnection from "@/models/dbconnect";
import { UserModel } from "@/models/usermodel";

cloudinary.config({
    cloud_name: process.env.CNRY_CLOUD_NAME,
    api_key: process.env.CNRY_API_KEY,
    api_secret: process.env.CNRY_API_SECRET,
  });
  
  export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const file = formData.get("file") as File;
  
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
  
    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      const stream = Readable.from(buffer);
  
      const uploadResult = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
          if (error) reject(error);
          resolve(result);
        });
        stream.pipe(uploadStream);
      });
  
      // ===================================================
  
      const { secure_url } = uploadResult as { secure_url: string }
      try {
        const session = await auth()
        try {
          await mongoDBconnection();
          await UserModel.findOneAndUpdate({ _id: session?.user?.id }, { image: secure_url })
        } catch (err) {
          return NextResponse.json({ err, message: "no user find!" }, { status: 404 })
        }
      } catch (err) {
        return NextResponse.json({ err, message: "no session!" }, { status: 404 })
      }
      return NextResponse.json({ url: secure_url }, { status: 200 });
    } catch (error) {
      console.error("Upload Error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }
  }