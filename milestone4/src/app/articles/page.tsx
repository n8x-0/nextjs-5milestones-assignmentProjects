import Image from 'next/image';
import Link from 'next/link';
import Slider2 from '@/components/slider2';
import { AiFillLike } from 'react-icons/ai';

const Articles = async () => {

  const getBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/allposts`, {
      cache: "no-store"
    });
    return await res.json()
  }
  const myBlogs = await getBlogs()

  return (
    <div className='w-full min-h-screen bg-[#EFF2F9] pt-20'>

      <div className="categories flex justify-center items-center sm:pt-7 py-1">
        <ul className="flex sm:gap-6 gap-3 font-medium sm:text-lg text-sm items-start justify-center italic w-fit py-4 px-10">
          <li className="hover:text-2xl transition-all hover:font-bold cursor-pointer">Food</li>
          <li className="hover:text-2xl transition-all hover:font-bold cursor-pointer">Technology</li>
          <li className="hover:text-2xl transition-all hover:font-bold cursor-pointer">Politics</li>
          <li className="hover:text-2xl transition-all hover:font-bold cursor-pointer">Mens</li>
          <li className="hover:text-2xl transition-all hover:font-bold cursor-pointer">Travel</li>
        </ul>
      </div>

      <div className='w-full flex justify-center'>
        <hr className='w-1/2 border-[2px]' />
      </div>

      <div className="slides w-full py-6 sm:px-0 px-2">
        <Slider2 />
      </div>

      <div className='w-full flex justify-center'>
        <hr className='w-1/2 border-[2px]' />
      </div>

      <div className="cardsCont md:p-12 p-3 pt-10 flex flex-wrap sm:gap-12 gap-8 sm:justify-center min-h-60">
        {myBlogs.map((data:
          { _id: string, image: string, title: string, category: string, content: string, likes: string[], author: { name: string, email: string } }, index: number) => {
          return (
            <Link href={`articles/${data._id}`} key={index}>
              <div className='sm:w-[400px] h-full w-full flex gap-3 scaler'>
                <div className='w-32 h-24  bg-black rounded-3xl overflow-hidden'>
                  <Image src={data.image} alt={data.image} width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <div className='overflow-hidden'>
                  <h1 className='font-medium leading-4 tracking-tighter mb-1 text-lg'>{data.title.slice(0, 30)}...</h1>
                  <h2 className='text-xs font-medium'>&bull; {data.category}</h2>
                  <span className='text-sm text-zinc-500 mt-1 inline-block'>
                    {data.content.slice(0, 30)}...
                  </span>
                  <div className='text-xs text-zinc-600 flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                      <span>author:</span>
                      <span className='underline'>{data.author.name}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <AiFillLike className="w-3 h-3" />
                      <span>{data.likes.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Articles