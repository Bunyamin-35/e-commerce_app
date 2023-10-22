import axios from "axios"

export const fetchProducts = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/all-products`);
    return data;
}
export const fetchUsers = async () => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/get-users`);
    return data;
}

export const fetchProduct = async (product_id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${product_id}`);

    return data;
}

export const registerUser = async (input) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`, input);

    return data;
}

export const loginUser = async (values) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,
        { ...values },
        { withCredentials: true }
    );

    return data;
}
export const token = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/dashboard`);

    return data;
}