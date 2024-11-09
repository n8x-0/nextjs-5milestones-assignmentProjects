import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose';
 
export async function middleware(request: NextRequest) {
  const cookie = cookies().get("token");
  console.log(cookie);
  
  if (!cookie || cookie.value === '') {
    console.log('No authentication token found');
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  const secret = new TextEncoder().encode(process.env.JWT_TOKEN)
  const jwt = cookie.value

  try {
    const { payload } = await jose.jwtVerify(jwt, secret, {})
    return NextResponse.next()
  } catch (err) {
    console.log("middleware:", err);
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}
 
export const config = {
  matcher: [
    '/',
    '/((?!auth).*)',  
  ],
};