"use client"

import { useState } from "react"
import { AiFillLike } from "react-icons/ai"
import { BiSolidDislike } from "react-icons/bi"
import { IoIosSend } from "react-icons/io"

const Interactionwidgets = (post: { id: string, userId: string | undefined, likesNum: number }) => {

    const [likes, setLikes] = useState<number>(post.likesNum)

    const ids = { postId: post.id, userId: post.userId }
    const likeHandler = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/post`, {
                method: "PATCH",
                body: JSON.stringify(ids)
            })
            if (res.ok) {
                const data = await res.json();
                setLikes(data.likes)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const formdata = new FormData(e.currentTarget)
        const comment = formdata.get("comment");
        
        const commentData = {
            postId: post.id,
            userId: post.userId,
            comment
        }

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/post`, {
                method: "PUT",
                body: JSON.stringify(commentData)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex gap-3 my-6 items-center">
            <div className="md:p-4 p-3 bg-white shadow-lg rounded-xl">
                <BiSolidDislike className="w-6 h-6 text-blue-600" />
            </div>
            <div className="md:p-4 p-3 bg-white shadow-lg rounded-xl flex items-center gap-1 text-blue-600 cursor-pointer" onClick={likeHandler}>
                <AiFillLike className="w-6 h-6" />
                <span>{likes}</span>
            </div>
            <form onSubmit={handleCommentSubmit} className="w-full items-center flex gap-2">
                <input type="text" name="comment" className="md:p-4 p-3 px-8 md:w-[30%] w-1/2 rounded-2xl focus:outline-none shadow-lg" placeholder="comment..." />
                <button type="submit" className="bg-blue-600 text-white md:py-4 md:px-5 px-4 py-3 rounded-xl shadow-lg text-2xl">
                    <IoIosSend />
                </button>
            </form>
        </div>
    )
}

export default Interactionwidgets