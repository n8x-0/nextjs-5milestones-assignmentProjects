export async function getCurrUserData(){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/userdat`, {method: "GET"});
        const json = await res.json();

        if(json.error){
            return {error: json.error}
        }
        if(res.ok){
            return json;
        }
    } catch (error) {
        console.log(error);
    }
}