"use client"
import { blogs } from "@/utils/blogdata"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BiDislike, BiLike, BiSend } from "react-icons/bi"

const BlogWithId = ({ params }: { params: { id: string } }) => {
  const [inpValue, setInpValue] = useState<string>("")
  const [comments, setComments] = useState<{ author: string; comment: string }[]>([])
  const filteredBlog = blogs.find((data) => data.id === parseInt(params.id))


  const handleComment = () => {
    if (inpValue.trim() === "") return
    setComments((prev) => [...prev, { author: "current_user@example.com", comment: inpValue }])
    setInpValue("")
    console.log(comments);
  }
  useEffect(() => {
    const initailizeComments = () => {
      if (!filteredBlog) return
      setComments(filteredBlog.comments)
    }
    initailizeComments()
  }, [filteredBlog])

  if (filteredBlog)

    return (
      <div className="w-full p-3 pt-20 lg:px-12">
        <div className="w-full md:flex items-start">
          <div className="lg:w-[600px] md:w-[450px] p-3 w-full order-first md:order-last rounded overflow-hidden">
            <Image src={filteredBlog.image} alt="" width={600} height={600} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 p-3">
            <h1 className="text-3xl">{filteredBlog.title}</h1>
            <p className="mt-4">{filteredBlog.blog}</p>
          </div>
        </div>
        <hr className="border-zinc-800 my-6" />

        <div className="flex gap-2 items-center text-2xl">
          <span className="flex gap-1 items-center">
            <BiLike />
            <span className="text-sm">{filteredBlog.likes}</span>
          </span>
          <span className="flex gap-1 items-center">
            <BiDislike />
            <span className="text-sm">0</span>
          </span>
          <input type="text" className="rounded-full sm:w-96 text-sm px-4 py-2 bg-transparent border border-zinc-700" placeholder="comment" value={inpValue} onChange={(e) => setInpValue(e.target.value)} />
          <span onClick={handleComment}>
            <BiSend />
          </span>
        </div>

        <h1 className="py-6 font-bold text-xl">Comments</h1>
        <div className="percomment flex flex-wrap pb-6 md:gap-3" >
          {
            comments.map((data, index) => {
              return (
                <div key={index} className="sm:w-80 w-full max-h-96 border-zinc-700 p-3 rounded text-sm md:border border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-zinc-500 rounded-full"></div>
                    <span>{data.author}</span>
                  </div>
                  <p className="text-zinc-300 pt-2">
                    {data.comment}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
}

export default BlogWithId