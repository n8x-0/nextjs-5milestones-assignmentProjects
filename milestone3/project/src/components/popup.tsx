const popup = ({ message }: { message: string | boolean}) => {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-2 tracking-tighter bg-zinc-700 text-white rounded-full z-20 fadeOut">{message}</div>
    )
}

export default popup