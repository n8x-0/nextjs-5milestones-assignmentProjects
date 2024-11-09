import { NextRequest, NextResponse } from "next/server";
import { parse } from 'cookie';
import * as jose from 'jose';
import { userMod } from "@/models/models";

export async function GET(request: NextRequest) {
    const cookieHeader = request.headers.get("cookie") || '';
    const cookie = parse(cookieHeader);

    if (!cookie || cookie.value == '') {
        return NextResponse.json({
            error: "No authentication token found"
        }, { status: 404 })
    }

    const secret = new TextEncoder().encode(process.env.JWT_TOKEN)
    const jwt = cookie.token;
    try {
        const { payload } = await jose.jwtVerify(jwt, secret, {})

        const user = await userMod.findOne({ _id: payload.sub });
        const { _id, username, imageUrl, chats } = user;
        const data = {
            _id,
            username,
            imageUrl,
            chats
        }
        return NextResponse.json({
            data,
            message: "fetched user successfully"
        }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "fetching user failed"
        }, { status: 500 })
    }
}