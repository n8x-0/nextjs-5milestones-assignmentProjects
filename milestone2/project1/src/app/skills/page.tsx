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
        <div className="main-container">
            <div>
                <h1 className="heading">
                    Crafting with skills,<br />
                    We bring <span className="text-blue-500">your buisness</span><br />
                    to <span className="text-blue-500">life.</span>
                </h1>
                <span className="tagline">
                    We build big ideas.<br />
                    Software. Apps. Tools.<br />
                    For real people. Real lives.
                </span>
            </div>
            <div className="skills-container">
                {
                    skillsData.map((data, index) => {
                        return (
                            <div className="card" key={index}>
                                <h1>{data.type}</h1>
                                <div className="badges-container">
                                    {data.cells.map((data, index) => {
                                        return <>
                                            <span className="skill-badge" key={index}>{data}</span>
                                        </>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="svgCont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3b82f6" fillOpacity="0.5" d="M0,224L60,234.7C120,245,240,267,360,229.3C480,192,600,96,720,80C840,64,960,128,1080,133.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default Skills;