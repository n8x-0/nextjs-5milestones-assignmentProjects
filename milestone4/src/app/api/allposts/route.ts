import mongoDBconnection from "@/models/dbconnect";
import { PostModel } from "@/models/postmodel";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoDBconnection();
    
    const posts = await PostModel.find({})

    if(!posts){
        return NextResponse.json({message: "no posts yet"}, {status: 404})
    }
    return NextResponse.json(posts, {status: 200})
}