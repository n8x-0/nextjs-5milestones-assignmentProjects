import Image from "next/image"
import Deletepostbtn from "@/components/articlewithid/deletepostbtn/deletepostbtn";
import Interactionwidgets from "@/components/articlewithid/likecomment/interactionwidgets";
import { BsThreeDotsVertical } from "react-icons/bs";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const BlogId = async ({ params }: { params: { id: string } }) => {

  const session = await auth()

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/post?id=${params.id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    cache: "no-cache"
  })
  if (!res.ok) {
    redirect("/article")
  }
  const currBlog = await res.json();
  if (currBlog)

    return (
      <div className="w-full min-h-screen lg:p-12 sm:px-6 px-3 lg:pt-24 pt-20 bg-[#EFF2F9] pb-4">
        <div className="md:flex justify-between items-start">
          <div className="md:w-[50%] w-full h-[450px] bg-black rounded-3xl overflow-hidden shadow-lg">
            <Image src={currBlog.image} alt={currBlog.image} width={1920} height={1080} className="w-full h-full object-cover" />
          </div>
          <div className="md:p-6 p-3 md:w-2/5 w-full md:mt-0 mt-3 border border-zinc-400 rounded-lg mx-auto">
            <div className="flex gap-3 items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src={currBlog.author.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col leading-3">
                <span className="text-base font-medium">{currBlog.author.name}</span>
                <span className="text-sm">{currBlog.author.email}</span>
              </div>
            </div>
            {session?.user?.id === currBlog.author.id ? <Deletepostbtn id={params.id} /> : ""}
          </div>
        </div>
        <div className="m-3">
          <h1 className="md:text-4xl text-2xl tracking-tighter font-medium">{currBlog?.title}</h1>
          <h3 className="md:text-base text-sm font-medium my-2">&bull; {currBlog?.category}</h3>
          <span className="font-[350] md:text-2xl text-lg tracking-tight">
            {currBlog?.content}
          </span>
        </div>
        <Interactionwidgets id={params.id} userId={session?.user?.id} likesNum={currBlog.likes.length} />
        <div className="commentSection w-full flex flex-wrap gap-4">
          {currBlog.comments && currBlog.comments.length ? 
            currBlog.comments.map((data: {name: string, image: string, comment: string}, index: number) => {
              return (
                <div key={index} className="md:min-w-40 md:max-w-96 w-full h-20 border border-zinc-400 rounded-md p-3 text-zinc-700">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full overflow-hidden ring-1">
                        <Image src={data.image} alt={""} width={60} height={60} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs">{data.name}</span>
                    </div>
                    <BsThreeDotsVertical />
                  </div>
                  <span className="text-base mt-2 inline-block">
                    {data.comment}
                  </span>
                </div>
              )
            }) : ""
          }
        </div>
      </div>
    )
}

export default BlogId