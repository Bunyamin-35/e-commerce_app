import React from 'react'
import Navbar from '../../components/Navbar/index.jsx';
import Categories from '../../components/Categories/index.jsx';
import Card from '../../components/Card/index.jsx';
import { useQuery } from 'react-query'
import styles from "../../components/Card/card.module.css"
import { fetchProducts } from '../../api.jsx';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";


const Home = () => {

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");

    useEffect(()=>{
        const verifyToken = async () => {
            if(!cookies.accesstoken) {
                navigate("/login")
            }
            const {data} = await axios.post(
                "http://localhost:4000/backend/auth/",
                {},
                {withCredentials:true}
            );
            const {status,user} = data;
            setUsername(user);
            return status ? alert(`Hello ${user}`):(removeCookie("accesstoken"),navigate("/login"))
        };
        verifyToken();
    },[cookies, navigate, removeCookie])

    const { isLoading, error, data } = useQuery('products', fetchProducts
    )
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className='homepage'>
            <Navbar />
            <Categories />
            <div className={styles.card_wrapper}>
                {data.allProducts.map((item, key) => <Card key={key} item={item} />)}
            </div>
        </div>
    )
}


export default Home;