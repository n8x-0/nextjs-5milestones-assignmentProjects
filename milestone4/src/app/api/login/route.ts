import { userMod } from "@/models/models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import * as jose from 'jose';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { username, password } = body;

    try {
        const user = await userMod.findOne({ username });
        try {
            const plainPass = bcrypt.compareSync(password, user.password)

            if (plainPass) {
                const secret = new TextEncoder().encode(process.env.JWT_TOKEN)
                const alg = 'HS256'

                const token = await new jose.SignJWT({})
                    .setProtectedHeader({ alg })
                    .setSubject(user._id.toString())
                    .sign(secret)

                return NextResponse.json({
                    token,
                    message: "Login Success"
                }, { status: 200 })
            }
        } catch (error) {
            return NextResponse.json({
                error: "Wrong Credentials"
            }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({
            error: "Wrong Credentials"
        }, { status: 404 })
    }
}