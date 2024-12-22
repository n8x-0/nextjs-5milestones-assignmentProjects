import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const json = await res.json();

        if (res.ok) {
            return NextResponse.json({
                json,
            }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${body}`)
        const json = await res.json();

        if (res.ok) {
            return NextResponse.json({
                json,
            }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 500 })
    }
}