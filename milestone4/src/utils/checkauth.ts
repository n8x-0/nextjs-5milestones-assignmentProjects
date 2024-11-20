"use server"
import { auth } from "@/auth";

export default async function checkAuth() {
    const session = await auth()
    return session
}