import Link from "next/link"

const header = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">n8x</h1>
      <div className="navbar-links">
        <Link href="/"><div>Home</div></Link>
        <Link href="/projects"><div>Projects</div></Link>
        <Link href="/skills"><div>Skills</div></Link>
      </div>
      <div className="hidden-sm"></div>
    </div>
  )
}

export default header