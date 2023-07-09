import React from 'react'
import Navbar from '../../components/Navbar/index.jsx';
import Categories from '../../components/Categories/index.jsx';
import Card from '../../components/Card/index.jsx';
import { useQuery } from 'react-query'
import styles from "../../components/Card/card.module.css"
import { fetchProducts } from '../../api.jsx';


const Home = () => {
    const { isLoading, error, data } = useQuery('products',fetchProducts
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;
    console.log(data);

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