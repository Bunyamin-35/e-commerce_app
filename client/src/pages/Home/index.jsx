import React from 'react'
import Navbar from '../../components/Navbar/index.jsx';
import Categories from '../../components/Categories/index.jsx';
import Card from '../../components/Card/index.jsx';


const Home = () => {
    return (
        <div className='homepage'>
            <Navbar /> 
            <Categories/> 
            <Card />
        </div>
    )
}

export default Home;