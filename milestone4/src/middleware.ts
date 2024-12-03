import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("authjs.session-token");
    if (token) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    matcher: [
        "/dashboard",
        "/create-post"
    ]
}