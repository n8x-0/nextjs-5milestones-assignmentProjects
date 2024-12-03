"use client"

import { SignIn } from "@/components/auth/clientSignIn"
import { signUpUsingCredentials } from "@/utils/formActions"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SignUp = () => {
    const [error, setError] = useState<null | string>(null)
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
    
        const formData = new FormData(event.target as HTMLFormElement);
        try {
            await signUpUsingCredentials(formData);
            router.push("/dashboard")
        } catch (err) {
            setError(err as string);
        }
    };
    
    return (
        <div className="w-full min-h-screen bg-[#f5f7fc] pt-20 flex justify-center items-center">
            <div className="flex flex-col md:w-[400px] w-[90%] gap-4 bg-zinc-200 py-10 px-6 rounded-2xl shadow-xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" name="username" placeholder="username" className="px-4 py-2 rounded-lg focus:outline-none" />
                    <input type="email" name="email" placeholder="email@mail.com" className="px-4 py-2 rounded-lg focus:outline-none" />
                    <input type="password" name="password" placeholder="*******" className="px-4 py-2 rounded-lg focus:outline-none" />
                    <input type="submit" className="px-4 py-2 rounded-lg bg-[#222] text-white font-medium" value="Sign up"/>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </form>
                <hr className="border-[1px] border-zinc-400" />
                <div className="bg-white px-4 py-2 rounded-lg font-medium text-center">
                    <SignIn>Sign in with google</SignIn>
                </div>
                <p>Already have an account <Link href="/login"><u className="text-blue-500">login</u></Link></p>
            </div>
        </div>
    )
}
export default SignUp