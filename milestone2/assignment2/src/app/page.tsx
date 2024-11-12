import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Home() {


  return (
    <div className="bg-[#2C0E5E] w-full min-h-screen pt-20">
      <div className='md:pt-40 md:pl-32 p-4 md:text-left text-center md:mt-0 mt-10'>
        <h1 className={`md:text-8xl text-6xl text-[#C096F1] shd ${bebas.className}`}>Lorem epsum doler <br />emet suka</h1>
        <p className='md:w-[600px] w-full md:text-4xl text-3xl leading-8 text-white font-thin tracking-tighter mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolor soluta minus ullam expedita, cum, beatae laudantium ratione aliquam nulla, recusandae iusto. Porro soluta rerum impedit ut, sint labore quae?
        </p>
        <Link href={"/blog"}>
          <button className='mt-5 px-32 py-5 text-white border-[1px] border-[#C096F1] rounded-md text-lg'>Blog</button>
        </Link>
        <div className='sm:w-1/2 w-[70%] overflow-hidden absolute bottom-0 right-0 opacity-50 scaleAnim'>
          <Image src="/purp.png" alt="" width={1280} height={1280} className='w-full h-full object-cover -z-10' />
          <div className='h-full w-60 bg-gradient-to-r from-[#2C0E5E] absolute top-0 left-0'></div>
        </div>
      </div>
    </div>
  );
}