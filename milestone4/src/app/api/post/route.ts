import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import mongoDBconnection from "@/models/dbconnect";
import { PostModel } from "@/models/postmodel";
import { UserModel } from "@/models/usermodel";
import { auth } from "@/auth";

cloudinary.config({
  cloud_name: process.env.CNRY_CLOUD_NAME,
  api_key: process.env.CNRY_API_KEY,
  api_secret: process.env.CNRY_API_SECRET,
});

export async function POST(request: NextRequest) {
  const body = await request.formData()
  const id = await request.nextUrl.searchParams.get("id")

  const title = body.get("title");
  const content = body.get("content");
  const category = body.get("category");
  const postimage = body.get("postimage") as File;

  if (!title || !content || !category || !postimage) {
    return NextResponse.json({ message: "No file provided" }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await postimage.arrayBuffer());
    const stream = Readable.from(buffer);

    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
      stream.pipe(uploadStream);
    });

    // ===============================================================================

    const { secure_url } = uploadResult as { secure_url: string }

    await mongoDBconnection();

    const user = await UserModel.findById(id)
    const post = await PostModel.create({
      title, content, image: secure_url, category, author: { name: user.name, email: user.email, image: user.image, id: user._id }
    })
    user.posts.push(post.id)
    user.save()

    return NextResponse.json({ url: "(uploadResult as any).secure_url " }, { status: 200 });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const id = await request.nextUrl.searchParams.get("id");

  if (!id) {
    throw new Error("no session found, please login!")
  }

  try {
    await mongoDBconnection()
    const post = await PostModel.findById(id);

    if (post) {
      return NextResponse.json(post, { status: 200 })
    }
    return NextResponse.json({ error: "no post found" }, { status: 404 })
  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const id = await request.nextUrl.searchParams.get("id");
  const session = await auth()
  const userID = session?.user?.id;

  try {
    await mongoDBconnection();

    const user = await UserModel.findById(userID);
    const index = user.posts.findIndex((data: string) => data == id);
    user.posts.splice(index, 1);
    user.save();

    await PostModel.findByIdAndDelete(id);

    return NextResponse.json({ message: "Success" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({
      error: {
        message: "failed to delete post",
        info: error
      }
    }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  const body = await request.json()
  const { postId, userId } = body

  await mongoDBconnection();

  const post = await PostModel.findById(postId);
  if (!post) {
    return NextResponse.json({ error: "no post found" }, { status: 404 })
  }

  const likedIndex = post.likes.findIndex((data: string) => data == userId)

  console.log(likedIndex);

  if (likedIndex !== -1) {
    post.likes.splice(likedIndex, 1);
    post.save()
    return NextResponse.json({ likes: post.likes.length }, { status: 200 })
  }
  post.likes.push(userId);
  post.save();

  return NextResponse.json({ likes: post.likes.length }, { status: 200 })
}