// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest){
//     const body = await request.json();

//     const isExisitingItem = cart.find((id) => id === body.id);
//     const newItem = isExisitingItem ? "already added" : cart.push(body.id);

//     return NextResponse.json({
//         message: "done",
//         newItem
//     }, {status: 200})
// }

// export async function GET() {
//     return NextResponse.json({
//     }, {status: 200})
// }