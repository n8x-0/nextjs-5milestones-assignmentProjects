"use server"
export async function createPost(data: {formData: FormData, category: string, imageUrl: string}){
    const {formData, category, imageUrl} = data;
    const title = formData.get("title")
    const content = formData.get("content")

    const postData = {title, content, category, imageUrl}

    
}