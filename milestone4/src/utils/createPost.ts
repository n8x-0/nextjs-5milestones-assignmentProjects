"use server"

import { auth } from "@/auth";

export async function createPost(formData: FormData) {
    const session = await auth();
    const id = session?.user?.id
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/post?id=${id}`, {
            method: "POST",
            body: formData,
        })
        
        if (!res.ok) {
            throw new Error("Something went wrong")
        }
        return
    } catch (err) {
        throw new Error(err as string)
    }
}