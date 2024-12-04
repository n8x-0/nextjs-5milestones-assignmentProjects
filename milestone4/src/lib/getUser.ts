"use server"
import { Session } from 'next-auth'
export default async function getUser(session: Session) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/user?id=${session?.user?.id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        if(res.ok){
            return data
        }
    } catch (err) {
        console.log(err);
        return err
    }
}