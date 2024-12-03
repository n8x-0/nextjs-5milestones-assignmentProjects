export const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0]

    if (!files) return;

    const formData = new FormData;
    formData.append("file", files)

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/uploadimage/user`, {
            method: "POST",
            body: formData,
        })
        const data = await res.json();

        if (res.ok) {
            console.log(data.url);
            return data.url
        }
    } catch (err) {
        console.log(err);
    }
}