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
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {
          projectsData.map((data, index) => {
            return <>
              <Link href={data.src} key={index}>
                <div className="project-card">
                  <div className="project-image-container">
                    <img src={data.image} alt="" className="project-image" />
                  </div>
                  <span className="project-name">{data.name}</span>
                  <span className="project-year">{data.year}</span>
                </div>
              </Link>
            </>
          })
        }
      </div>
      <div className="svgCont">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3b82f6" fillOpacity="0.5" d="M0,224L60,234.7C120,245,240,267,360,229.3C480,192,600,96,720,80C840,64,960,128,1080,133.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </div>
  )
}

export default Projects;