"use client"

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Deletepostbtn = (id: {id: string}) => {
    
    const router = useRouter();
    const deletePost = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/post?id=${id.id}`, {
                method:"DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(id)
            })
            if(res.ok){
                router.refresh()
                router.back()
            }
        } catch (error) {
            return error
        }
    }

    return (
        <div className="flex gap-3 justify-end relative md:absolute md:top-28 md:right-10">
            <button className="bg-red-500 text-white shadow-md shadow-slate-300 px-4 py-2 rounded-lg mb-2 text-2xl" onClick={deletePost}>
                <MdDelete />
            </button>
            <button className="bg-blue-500 text-white shadow-md shadow-slate-300 px-4 py-2 rounded-lg mb-2 text-2xl" onClick={()=> {}}>
                <FaEdit />
            </button>
        </div>
    )
}

export default Deletepostbtn