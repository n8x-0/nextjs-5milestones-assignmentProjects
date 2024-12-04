import Image from "next/image"
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import UploadImageButton from "@/components/dashobard/uploadImageButton";
import getUser from "@/lib/getUser";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth()
  const user = session ? await getUser(session) : redirect("/login")
  const { posts, name, email, image } = user

  return (
    <div className="w-full min-h-screen bg-[#EFF2F9] pt-20">
      <div className="w-full h-full sm:p-10 p-3">

        <div className="userProfileInfoCont flex items-center justify-between sm:gap-6 gap-3 lg:w-1/2 w-full">
          <div className="sm:gap-6 gap-3 flex items-center">
            <div className="imgCont sm:w-20 sm:h-20 w-12 h-12 overflow-hidden relative">
              <Image src={image} alt={'profileImage'} fill className="w-full h-full object-cover rounded-full" />
              <UploadImageButton />
            </div>
            <div className="sm:leading-none leading-[0.10rem]">
              <p className="font-medium sm:text-3xl text-xl">{name}</p>
              <span className="sm:text-base text-xs">{email}</span>
            </div>
          </div>
          <div className="flex items-center sm:gap-10 gap-4">
            <div className="text-center sm:text-lg text-sm">
              <p className="font-medium">Posts</p>
              <span className="font-medium">{posts ? posts.length : 0}</span>
            </div>
            <div className="text-center sm:text-lg text-sm">
              <p className="font-medium">Followers</p>
              <span className="font-medium">1,024</span>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-start my-6'>
          <hr className='lg:w-1/2 w-full border-[2px]' />
        </div>

        <Link href={'/create-post'}>
          <div className="createPostCont">
            <div className="w-96 h-40 border-2 border-dashed border-zinc-400 rounded-3xl flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-zinc-400">
                  <IoAddOutline className="m-auto text-6xl text-zinc-500 h-full scale-[0.7]" />
                </div>
                <span className="font-medium text-zinc-400">Create a post</span>
              </div>
            </div>
          </div>
        </Link>

        <div className='w-full flex justify-start my-6'>
          <hr className='lg:w-1/2 w-full border-[2px]' />
        </div>

        <div className="cardsCont md:p-12 p-3 pt-10 flex flex-wrap sm:gap-12 gap-8 sm:justify-center">
          {posts && posts.length > 0 && posts.map((data: { _id: string, image: string, title: string, content: string, category: string }, index: number) => {
            return (
              <Link href={`articles/${data._id}`} key={index}>
                <div className='sm:w-[400px] h-20 w-full flex gap-3 scaler'>
                  <div className='w-32 h-24  bg-black rounded-3xl overflow-hidden'>
                    <Image src={data.image} alt={data.image} width={800} height={800} className='w-full h-full object-cover' />
                  </div>
                  <div className='overflow-hidden'>
                    <h1 className='font-medium leading-4 tracking-tighter mb-1 text-lg'>{data.title.slice(0, 30)}...</h1>
                    <h2 className='text-xs font-medium'>&bull; {data.category}</h2>
                    <span className='text-sm text-zinc-500 mt-1 inline-block'>
                      {data.content.slice(0, 30)}...
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Dashboard