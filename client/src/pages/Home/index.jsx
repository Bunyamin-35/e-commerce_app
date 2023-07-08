import React from 'react'
import Navbar from '../../components/Navbar/index.jsx';
import Categories from '../../components/Categories/index.jsx';
import Card from '../../components/Card/index.jsx';
import { useQuery } from 'react-query'


const Home = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:4000/backend/products/all-products').then(res =>
            res.json()
        )
    )
    console.log(data.allProducts[0]);

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='homepage'>
            <Navbar />
            <Categories />
            <Card />
        </div>
    )
}


export default Home;