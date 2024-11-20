import { auth } from "@/auth"
import Image from "next/image"
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";

const Dashboard = async () => {

  const session = await auth()

  return (
    <div className="w-full min-h-screen bg-[#EFF2F9] pt-20">
      <div className="w-full h-full sm:p-10 p-3">

        <div className="userProfileInfoCont flex items-center justify-between sm:gap-6 gap-3 lg:w-1/2 w-full">
          <div className="sm:gap-6 gap-3 flex items-center">
            <div className="imgCont sm:w-20 sm:h-20 w-12 h-12 rounded-full overflow-hidden bg-black">
              <Image src={session?.user?.image as string} alt={'profileImage'} width={1920} height={1920} className="w-full h-full object-cover" />
            </div>
            <div className="sm:leading-none leading-[0.10rem]">
              <p className="font-medium sm:text-3xl text-xl">{session?.user?.name}</p>
              <span className="sm:text-base text-xs">{session?.user?.email}</span>
            </div>
          </div>
          <div className="flex items-center sm:gap-10 gap-4">
            <div className="text-center sm:text-lg text-sm">
              <p className="font-medium">Posts</p>
              <span className="font-medium">0</span>
            </div>
            <div className="text-center sm:text-lg text-sm">
              <p className="font-medium">Likes</p>
              <span className="font-medium">0</span>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-start my-6'>
          <hr className='lg:w-1/2 w-full border-[2px]' />
        </div>

      <Link href={'/create-post'}>
        <div className="createPostCont">
          <div className="w-96 h-40 border-2 border-zinc-400 rounded-3xl flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-zinc-400">
                <IoAddOutline className="m-auto text-6xl text-zinc-500 h-full scale-[0.7]"/>
              </div>
              <span className="font-medium text-zinc-400">Create a post</span>
            </div>
          </div>
        </div>
      </Link>

      </div>
    </div>
  )
}

export default Dashboard