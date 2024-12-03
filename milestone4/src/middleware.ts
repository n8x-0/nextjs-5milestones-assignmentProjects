import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
    const cookie = cookies().get("authjs.session-token")
    if (cookie?.name === "authjs.session-token") {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    matcher: [
        "/dashboard",
        "/create-post"
    ]
}