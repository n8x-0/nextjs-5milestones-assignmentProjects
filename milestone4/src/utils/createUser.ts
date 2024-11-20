"use server"
import { auth } from "@/auth";

export async function createUser() {
    const session = await auth();
    console.log("createUser: " , session);

    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/createindb/createuser`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(session?.user)
        })
        const data = await res.json()

        if(res.ok){
            console.log(data);
        }
    }catch(error){
        console.log("utils/createUser error: ", error);
    }
}