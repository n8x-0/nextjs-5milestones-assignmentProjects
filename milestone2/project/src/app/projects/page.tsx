import Link from "next/link";

const Projects = () => {
  const projectsData = [
    {
      name: "TS CLI apps",
      image: "https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ts-programming-code-logos-and-brands-pack-icons-9325304.png?f=webp",
      src: "https://github.com/n8x-0/AssignmentProjects",
      year: "2023-2024"
    },
    {
      name: "Chat App",
      image: "https://cdn.dribbble.com/users/267404/screenshots/3713416/talkup.png",
      src: "https://n8x-chat-app.vercel.app/",
      year: "2024"
    },
    {
      name: "Mobile Game",
      image: "https://static.vecteezy.com/system/resources/previews/015/067/831/original/gun-logo-vector.jpg",
      src: "https://shooting-web-app.web.app/",
      year: "2021"
    },
    {
      name: "Resume Builder",
      image: "https://st.depositphotos.com/5943796/59574/v/450/depositphotos_595742610-stock-illustration-initial-letters-overlapping-fold-logo.jpg",
      src: "https://n8x-resume-builder.vercel.app/",
      year: "2024"
    },
    {
      name: "Portfolio",
      image: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png",
      src: "https://n8x-dev-portfolio.web.app",
      year: "2024"
    },
    {
      name: "Todo App",
      image: "https://i.pinimg.com/736x/5e/81/9a/5e819a5ce865476b73087fd1276e7c3e.jpg",
      src: "https://todo-app-2fade.web.app/",
      year: "2021"
    },
    {
      name: "Stop Watch",
      image: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/stopwatch2.png",
      src: "https://stop-watch-4243c.web.app/",
      year: "2021"
    }
  ]
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-center sm:text-5xl text-4xl font-bold tracking-tighter text-blue-950 sm:pt-20 pt-12">Projects</h1>
      <div className="lg:w-[70%] w-full mt-10 p-6 flex flex-wrap md:gap-x-20 gap-x-12 gap-y-10 justify-center items-center">
        {
          projectsData.map((data, index) => {
            return <>
              <Link href={data.src} key={index}>
                <div className="text-center flex flex-col items-center">
                  <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full overflow-hidden shadow-lg">
                    <img src={data.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-blue-500 font-bold mt-2 w-28">{data.name}</span>
                  <span className="text-xs text-zinc-600">{data.year}</span>
                </div>
              </Link>
            </>
          })
        }
      </div>
    </div>
  )
}

export default Projects;