"use client"

import { useRef } from "react";
import { IoAddOutline } from "react-icons/io5";
import { uploadImage } from "@/lib/uploadImage";

const UploadImageButton = () => {
    const changeImage = useRef<HTMLInputElement>(null)
    
    return (
        <>
            <span onClick={() => changeImage.current?.click()} className="absolute w-6 h-6 border-[1px] border-black bg-blue-500 bottom-0 border- right-0 z-10 rounded-full">
                <IoAddOutline className="m-auto h-full text-white fill-white" />
            </span>
            <input type="file" ref={changeImage} accept="image/*" className="hidden" onChange={(e) => uploadImage(e)} />
        </>
    )
}

export default UploadImageButton