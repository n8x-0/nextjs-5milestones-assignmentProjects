import Blogcards from "@/components/blogcards"

const Blogs = () => {
    return (
        <div className="w-full md:px-12 p-3">
            <h1 className="text-4xl sm:pt-20 pt-16">Blogs</h1>
            <div className="cont flex flex-wrap gap-5 py-8 justify-center">
                <Blogcards/>
            </div>
        </div>
    )
}

export default Blogs