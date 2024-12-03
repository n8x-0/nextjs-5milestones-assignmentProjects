"use server"

import mongoDBconnection from "@/models/dbconnect"
import { UserModel } from "@/models/usermodel"
import { redirect } from "next/navigation"
import bcrypt from 'bcrypt';
import { signIn } from "@/auth";
import { validateEmail, validatePassword } from "./helper/validators";

export const signUpUsingCredentials = async (formData: FormData) => {
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!username || !email || !password) {
        throw new Error("All fields are required !")
    }
    validatePassword(password)
    validateEmail(email)

    const hashPass = bcrypt.hashSync(password, 10)

    await mongoDBconnection()

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
        throw new Error("Email already exist, please login!")
    }
    if (!existingUser) {
        await UserModel.create({
            name: username,
            email,
            password: hashPass
        })
    }

    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password
        })
    } catch (error) {
        throw new Error(`Invalid credentials, ${error}`)
    }
    redirect("/dashboard")
}

export const loginHandler = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        throw new Error("All fields are required !")
    }
    validateEmail(email)

    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password
        })
    } catch (error) {
        throw new Error(`Invalid credentials, ${error}`)
    }

    redirect("/dashboard")
}