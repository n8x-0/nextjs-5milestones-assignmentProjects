"use client"
import Image from "next/image";
import { useRef, useState } from "react"
import { IoAddOutline } from "react-icons/io5"
import { createPost } from "@/utils/createPost";

const CreatePost = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInpRef = useRef<HTMLInputElement>(null);
  const previewImage = useRef<HTMLImageElement>(null)

  const handleDivClick = () => {
    fileInpRef.current?.click();
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
  
    if (files && files.length > 0 && (files[0].type === "image/jpeg" || files[0].type === "image/png")) {
      const reader = new FileReader();
      
      reader.onload = () => {
        const imageUrl = reader.result as string;
        
        if (previewImage.current) {
          previewImage.current.classList.remove("hidden");
          previewImage.current.src = imageUrl;
        }
        setImageUrl(imageUrl);
      };
  
      reader.readAsDataURL(files[0]);
    } else {
      console.error("Invalid file type. Only JPEG and PNG are supported.");
    }
  };

  const submitBlogPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    if(!category){
      setError("Please select category")
    }else if(!imageUrl){
      setError("Please chose an image")
    }else{
      try{
        await createPost({formData, category, imageUrl})
      }catch(error){
        setError(`Error: ${error}`)
      }
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#EFF2F9] flex justify-center">
      <div className="lg:w-1/2 w-full h-full pt-20 p-3">
        <h1 className="sm:text-7xl text-5xl font-semibold tracking-tight italic sm:pt-4">Create blog</h1>
        <form onSubmit={submitBlogPost} className="grid grid-cols-4 grid-rows-4 sm:*:gap-4 gap-2 mt-10">
          <input type="text" placeholder="Title" name="title" className="px-4 py-2 rounded-xl focus:outline-none col-span-2" />
          <select onChange={handleCategory} name="" className="px-4 py-2 rounded-xl focus:outline-none">
            <option value="Other">Other</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
            <option value="Politics">Politics</option>
            <option value="Mens">Mens</option>
            <option value="Travel">Travel</option>
          </select>
          <textarea name="content" placeholder="content" className="px-4 py-2 rounded-xl focus:outline-none resize-none leading-4 col-span-3 row-span-2"></textarea>
          <div className="row-span-4 row-start-1 col-start-4" onClick={handleDivClick}>
            <div className="w-full h-full border-2 border-zinc-400 rounded-3xl flex justify-center items-center relative overflow-hidden">
              {<Image src={""} alt={'preview image'} width={600} height={600} ref={previewImage} className="w-full h-full object-cover absolute top-0 left-0 z-10 hidden" />}
              <div className="flex flex-col items-center">
                <div className="sm:w-20 sm:h-20 w-10 h-10 rounded-full border-2 border-zinc-400">
                  <IoAddOutline className="m-auto sm:text-6xl text-3xl text-zinc-500 h-full scale-[0.7]" />
                </div>
                <span className="font-medium text-zinc-400">Upload image</span>
              </div>
            </div>
          </div>
          <input type="file" className="hidden" ref={fileInpRef} onChange={uploadImage} />
          <input type="submit" value="Post" className="bg-[#333] text-white font-medium text-lg rounded-lg" />
        </form>
      </div>
    </div>
  )
}

export default CreatePost