import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Hey there,<br />
          This is <span>Syed Shayan,</span><br />
          A Full stack Web Developer.
        </h1>
        <p className="paragraph">
          Welcome to my portfolio! I am a passionate and skilled web developer with expertise in the MERN stack, Next.js, Python, JavaScript, and TypeScript. With a strong foundation in both front-end and back-end technologies, I excel at creating dynamic, responsive, and user-friendly web applications.
        </p>
        <div className="button-container">
          <Link href={'/skills'}>
            <span className="bg-blue-500 text-blue-50 px-5 py-3 rounded-[4px]">Skills</span>
          </Link>
          <Link href={'/projects'}>
            <span className="bg-blue-500 text-blue-50 px-5 py-3 rounded-[4px]">Projects</span>
          </Link>
        </div>
      </div>
      <div className="svgCont">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3b82f6" fillOpacity="0.5" d="M0,224L60,234.7C120,245,240,267,360,229.3C480,192,600,96,720,80C840,64,960,128,1080,133.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </>
  );
}