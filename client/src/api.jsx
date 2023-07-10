import axios from "axios"

export const fetchProducts = async () => {
    const {data} = await axios.get("http://localhost:4000/backend/products/all-products");

    return data;
}

export const fetchProduct = async (product_id) => {
    const {data} = await axios.get(`http://localhost:4000/backend/products/${product_id}`);

    return data;
}

export const registerUser = async (input) => {
    const {data} = await axios.post("http://localhost:4000/backend/auth/register",input);

    return data;
}