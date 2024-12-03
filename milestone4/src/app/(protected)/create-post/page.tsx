"use client"
import Image from "next/image";
import { useRef, useState } from "react"
import { IoAddOutline } from "react-icons/io5"
import { createPost } from "@/utils/createPost";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";


const CreatePost = () => {

  const [category, setCategory] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInpRef = useRef<HTMLInputElement>(null);
  
  const router = useRouter()

  const handleDivClick = () => {
    fileInpRef.current?.click();
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];
    const url = URL.createObjectURL(files as File)
    setImageUrl(url);
  };

  const submitBlogPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    if (!formData.get("title") || !formData.get("content")) {
      setError("All fields are required")
    } else if (!category) {
      setError("please choose a category")
    }
    else if (!imageUrl) {
      setError("Please chose an image")
    } else {
      setError(null)
      try {
        formData.append("category", category);
        setLoading(true);
        await createPost(formData).then(()=> setLoading(false))
        router.push("/dashboard")
      } catch (error) {
        setLoading(false)
        setError(`Error: ${error}`)
      }
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#EFF2F9] flex justify-center relative">
      {loading && <Loader />}
      <div className="lg:w-1/2 w-full h-full p-3 my-auto">
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
            <div className="w-full h-full border-2 border-dashed border-zinc-400 rounded-3xl flex justify-center items-center relative overflow-hidden">
              {imageUrl ?
                <Image src={imageUrl} alt={'preview image'} width={600} height={600} className="w-full h-full object-cover absolute top-0 left-0 z-[1]" /> : ""}
              <div className="flex flex-col items-center">
                <div className="sm:w-20 sm:h-20 w-10 h-10 rounded-full border-2 border-zinc-400">
                  <IoAddOutline className="m-auto sm:text-6xl text-3xl text-zinc-500 h-full scale-[0.7]" />
                </div>
                <span className="font-medium text-zinc-400">Upload image</span>
              </div>
            </div>
          </div>
          <input type="file" name="postimage" className="hidden" ref={fileInpRef} onChange={uploadImage} />
          <input type="submit" value="Post" className="bg-[#333] text-white font-medium text-lg rounded-lg" />
        </form>
        {error && <p className="text-sm text-red-500 p-3">{error}*</p>}
      </div>
    </div>
  )
}

export default CreatePost