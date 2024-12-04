"use client"

import { SignIn } from "@/components/auth/clientSignIn"
import { signUpUsingCredentials } from "@/utils/formActions"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

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
        <div className="w-full min-h-[80vh] bg-[#f5f7fc] pt-20 flex justify-center items-center">
            <div className="flex flex-col md:w-[400px] w-[90%] gap-4 bg-zinc-100 py-10 px-6 rounded-2xl shadow-xl border-[1px] border-[#333]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" name="username" placeholder="username" className="border-[1px] border-zinc-300 px-4 py-2 rounded-lg focus:outline-none" />
                    <input type="email" name="email" placeholder="email@mail.com" className="border-[1px] border-zinc-300 px-4 py-2 rounded-lg focus:outline-none" />
                    <input type="password" name="password" placeholder="*******" className="border-[1px] border-zinc-300 px-4 py-2 rounded-lg focus:outline-none" />
                    <input type="submit" className="px-4 py-2 rounded-lg bg-[#222] text-white font-medium" value="Sign up"/>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </form>
                <hr className="border-[1px] border-zinc-400" />
                <div className="bg-white border-[1px] border-zinc-300 px-4 py-2 rounded-lg font-medium text-center flex items-center justify-center gap-3">
                    <div className="w-6 h-6 overflow-hidden">
                        <Image src={"/googleicon.png"} alt={"icon"} width={600} height={600} className="w-full h-full object-cover" />
                    </div>
                    <SignIn>Sign in with google</SignIn>
                </div>
                <p className="text-sm">Already have an account <Link href="/login"><u className="text-blue-500">login</u></Link></p>
            </div>
        </div>
    )
}
export default SignUp