import { NextRequest, NextResponse } from "next/server";

import { UserModel } from "@/models/usermodel";
import mongoDBconnection from "@/models/dbconnect";
import { PostModel } from "@/models/postmodel";

export async function GET(request: NextRequest) {
  const userID = request.nextUrl.searchParams.get('id');

  if (!userID) {
    return NextResponse.json({
      error: {
        message: "no session found, please login."
      }

    }, { status: 402 })
  }

  await mongoDBconnection()
  const user = await UserModel.findById(userID)
  const { _id, name, email, image, posts } = user;

  let resolvedPosts = []
  if (posts.length > 0) {
    resolvedPosts = await Promise.all(
      posts.map(async (postId: string) => {
        const post = await PostModel.findById(postId);
        return post || null;
      })
    )

    const data = {
      _id,
      name,
      email,
      image,
      posts: resolvedPosts,
    }

    return NextResponse.json(data, { status: 200 })
  }

  const data = {
    _id,
    name,
    email,
    image,
    posts: [],
  }
  return NextResponse.json(data, { status: 200 })
}