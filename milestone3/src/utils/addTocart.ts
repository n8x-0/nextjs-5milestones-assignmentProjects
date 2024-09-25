export interface Prod {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number, count: number };
    title: string
}
let newData: Prod[] = [];

export const addToCart = async (cartData: Prod) => {
    let lclStorageCart: any = localStorage.getItem("cartData");
    let storedCart = JSON.parse(lclStorageCart)
    if (storedCart) {
        const existingCart = storedCart.find((data: Prod) => data.id === cartData.id);
        if (existingCart) return {error: "Already in your cart"};
        storedCart.push(cartData);
        newData = storedCart;
        localStorage.setItem("cartData", JSON.stringify(newData));
        return {message: "cart added"};
    }
    newData.push(cartData)
    localStorage.setItem("cartData", JSON.stringify(newData));
    return {message: "cart added"}
}