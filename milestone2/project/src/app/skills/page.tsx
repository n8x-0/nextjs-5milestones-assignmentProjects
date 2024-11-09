const Skills = () => {
    const skillsData = [
        {
            type: "Languages:",
            cells: ["JavsScript", "TypeScript", "Python"]
        },
        {
            type: "Frameworks and libraries:",
            cells: ["ReactJS", "NextJS", "ExpressJS", "Gsap", "Tailwind"]
        },
        {
            type: "DB, deployment and others:",
            cells: ["MongoDB", "Vercel", "Firebase", "Gsap", "ScrollTrigger"]
        }
    ]
    return (
        <div className="w-full sm:p-12 p-5 sm:flex justify-evenly">
            <div>
                <h1 className="sm:text-5xl text-4xl sm:text-left text-center font-bold sm:leading-[3rem] leading-9 text-blue-950 font-[geist] sm:mt-0 mt-6">
                    Crafting with skills,<br />
                    We bring <span className="text-blue-500">your buisness</span><br />
                    to <span className="text-blue-500">life.</span>
                </h1>
                <span className="absolute bottom-[15%] p-2 sm:block hidden">
                    We build big ideas.<br />
                    Software. Apps. Tools.<br />
                    For real people. Real lives.
                </span>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center sm:mt-0 mt-6">
                {
                    skillsData.map((data, index) => {
                        return (
                            <div className="card sm:w-96 w-full bg-blue-100 rounded-md font-medium md:p-8 p-5" key={index}>
                                <h1 className="md:text-2xl text-xl px-2">{data.type}</h1>
                                <div className="flex gap-2 flex-wrap text-white mt-3">
                                    {data.cells.map((data, index) => {
                                        return <>
                                            <span className="bg-blue-500 rounded-full px-5 py-2" key={index}>{data}</span>
                                        </>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;