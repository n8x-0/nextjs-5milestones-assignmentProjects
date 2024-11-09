import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Home() {


  return (
    <div className="container">
      <div className='homePage'>
        <h1 className={` shd ${bebas.className}`}>Lorem epsum doler <br />emet suka</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolor soluta minus ullam expedita, cum, beatae laudantium ratione aliquam nulla, recusandae iusto. Porro soluta rerum impedit ut, sint labore quae?
        </p>
        <Link href={"/blog"}>
          <button className='button'>Blog</button>
        </Link>
        <div className='imgCont scaleAnim'>
          <Image src="/purp.png" alt="" width={1280} height={1280} className='img' priority={true}/>
          <div className='shader'></div>
        </div>
      </div>
    </div>
  );
}