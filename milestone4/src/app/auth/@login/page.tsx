"use client";

import handleLogin from "@/app/_lib/handleLogin";
import { useState } from "react";

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const res = await handleLogin(formData);

        if (res?.error) {
            setError(res.error);
            setTimeout(() => {
                setError(null)
            }, 3000)
        }
    }

    return(
        <div className={`w-full h-full bg-slate-300 flex justify-center items-center`}>
            <form onSubmit={login} className="flex flex-col sm:w-[70%] w-[90%]">
                <h1 className="text-blue-500 text-6xl mb-6 font-light tracking-tighter">Login.</h1>
                <label htmlFor="username" className="text-zinc-500 font-medium tracking-tighter ml-2 mb-1 text-sm">Username:</label>
                <input type="text" name="username" placeholder="Enter your username" className="w-full rounded-3xl px-5 py-3 text-sm text-black focus:outline-none mb-2" />
                <label htmlFor="password" className="text-zinc-500 font-medium tracking-tighter ml-2 mb-1 text-sm">Password:</label>
                <input type="password" name="password" placeholder='Enter your password' className="w-full rounded-3xl px-5 py-3 text-sm text-black focus:outline-none mb-2" />
                {error ? <p className="text-red-500 text-sm ml-2 errorMsgFadeOut">{error}*</p> : ''}
                <input type="submit" value="Login" className="bg-blue-500 w-fit px-5 py-3 rounded-3xl my-1 text-sm font-medium" />
            </form>
        </div>
    )
}