import React from "react"
import Navbar from "../../components/Navbar/index.jsx";
import Details from "../../components/Details/index.jsx";

import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import { fetchProduct } from "../../api.jsx";

const Detail = () => {

    const { product_id } = useParams();

    const { isLoading, error, data } = useQuery(["product", product_id], () => fetchProduct(product_id));

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;
    return (
        <div>
            <Navbar/>
            <Details data={data}/>
        </div>
    )
}

export default Detail;