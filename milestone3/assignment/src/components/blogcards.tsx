import { blogs } from '@/utils/blogdata'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiComment } from 'react-icons/bi'
import { GrLike } from 'react-icons/gr'

const Blogcards = () => {
    return (
        <>
            {
                blogs.map((data, index) => {
                    return (
                        <Link href={`/blog/${data.id}`} key={index}>
                            <div className="card flex gap-3 xl:w-[500px] md:w-[460px] w-full relative scaler" >
                                <div className="sm:w-40 w-32 sm:h-26 h-24 rounded-lg overflow-hidden">
                                    <Image src={data.image} alt="" width={400} height={400} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h1 className="sm:text-xl text-lg font-medium">{data.title}</h1>
                                    <p className="sm:text-base text-sm font-extralight leading-4">{data.blog.substring(0, 60)}...</p>
                                    <span className="text-xs text-zinc-400">{data.author}</span>
                                </div>
                                <div className="sm:text-base text-xs absolute right-0 bottom-0 px-4 flex sm:gap-4 gap-2 w-fit">
                                    <div className="flex items-center gap-1">
                                        <GrLike />
                                        <span>{data.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BiComment />
                                        <span>{data.comments.length}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Blogcards