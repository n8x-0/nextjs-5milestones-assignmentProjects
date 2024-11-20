// import { NextRequest, NextResponse } from "next/server";
// import mongoDBconnection from "@/models/dbconnect";
// import { userMod } from "@/models/models";

// export async function POST(request: NextRequest){
//     const data = await request.json();
//     const {name, email, image} = data;
    
//     await mongoDBconnection()
//     const existingUser = await userMod.findOne({email});
//     if(!existingUser){
//         try {
//             await userMod.create({name, email, image})
            
//             return NextResponse.json({
//                 message: "user created"
//             }, {status: 201})
//         } catch (error) {
//             return NextResponse.json({
//                 error: {
//                     message: "failed to create user",
//                     info: error
//                 }
//             }, {status: 500})
//         }
//     }

//     return NextResponse.json({
//         message: "user logged in"
//     }, {status: 200})
// }