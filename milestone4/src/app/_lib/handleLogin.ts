"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const handleLogin = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/login`, {
            method: "POST",
            body: JSON.stringify({ username, password })
        })
        const json = await res.json();

        if (json.error) {
            return { error: json.error };
        }
        if (res.ok) {
            console.log(json.message);
            const maxAge = 60 * 60 * 24 * 7
            cookies().set("token", json.token, {
                secure: true,
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + maxAge * 1000),
            });
        }
    } catch (error) {
        console.log(error);
    }
    redirect("/")
}

export default handleLogin;