import Image from "next/image"
import Deletepostbtn from "@/components/articlewithid/deletepostbtn/deletepostbtn";
import Interactionwidgets from "@/components/articlewithid/likecomment/interactionwidgets";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const BlogId = async ({ params }: { params: { id: string } }) => {

  const session = await auth()
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/post?id=${params.id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    next: {revalidate: 5}
  })
  if(!res.ok){
    redirect("/article")
  }

  const currBlog = await res.json();

  if (currBlog)
    return (
      <div className="w-full min-h-screen lg:p-12 sm:px-6 px-3 lg:pt-24 pt-20 bg-[#EFF2F9]">
        { session?.user?.id === currBlog.author.id ? <Deletepostbtn id={params.id}/> : ""}
        <div className="md:w-[50%] w-full h-[450px] bg-black rounded-3xl overflow-hidden shadow-lg">
          <Image src={currBlog.image} alt={currBlog.image} width={1920} height={1080} className="w-full h-full object-cover" />
        </div>
        <div className="m-3">
          <h1 className="md:text-4xl text-2xl tracking-tighter font-medium">{currBlog?.title}</h1>
          <h3 className="md:text-base text-sm font-medium my-2">&bull; {currBlog?.category}</h3>
          <span className="font-[350] md:text-2xl text-lg tracking-tight">
            {currBlog?.content}
          </span>
        </div>
        <Interactionwidgets id={params.id} userId={session?.user?.id} likesNum={currBlog.likes.length}/>
      </div>
    )
}

export default BlogId