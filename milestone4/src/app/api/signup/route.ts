import { NextRequest, NextResponse } from "next/server";
import { userMod } from "@/models/models";
import bcrypt from 'bcrypt';
import * as jose from 'jose';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { username, password } = body;

    const existingUser = await userMod.find({username});
    if(existingUser.length !== 0){
        console.log(existingUser);
        return NextResponse.json({
            error: "Username already taken"
        }, { status: 400 })
    }
    if (password.length > 20 || password.length < 6) {
        return NextResponse.json({
            error: "Password requires at least 8 charecters"
        }, { status: 400 })
    }
    if (username.length > 20 || username.length < 3) {
        return NextResponse.json({
            error: "Username requires at least 3 charecters"
        }, { status: 400 })
    }


    try {
        const hashPass = bcrypt.hashSync(password, 10);

        const user = await userMod.create({
            username,
            password: hashPass,
        });

        const secret = new TextEncoder().encode(process.env.JWT_TOKEN)
        const alg = 'HS256'

        const token = await new jose.SignJWT({})
            .setProtectedHeader({ alg })
            .setSubject(user._id.toString())
            .sign(secret)

        return NextResponse.json({
            token: token,
            message: "signed up"
        }, { status: 200 })

    } catch (error) {

        return NextResponse.json({
            error: `Signup failed: ${error}`
        }, { status: 500 })
    }
}