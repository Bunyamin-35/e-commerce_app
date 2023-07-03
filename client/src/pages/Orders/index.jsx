import React from 'react'
import { Modal } from 'antd';
import { Form, Input, Button } from 'antd';

import { useState } from 'react';
import Navbar from '../../components/Navbar/index.jsx';


const Orders = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div>
            <Navbar />
            <div className='cartpage'>
                <div className="cart_table">
                    <div className='cart_table_title'>
                        <h2>Orders</h2>
                        <h3>Price</h3>
                    </div>
                    <div className='cart_item_wrapper'>
                        <div className='cart_item'>
                            <div className='cart_item_details'>
                                <img src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE1enJBNWNtTEwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
                                <div className='cart_item_desc'>
                                    DFSDF
                                </div>
                            </div>
                            <div className='cart_item_price'>
                                215 TL
                            </div>
                        </div>
                        <div className='cart_item'>
                            <div className='cart_item_details'>
                                <img src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE1enJBNWNtTEwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
                                <div className='cart_item_desc'>
                                    DFSDF
                                </div>
                            </div>
                            <div className='cart_item_price'>
                                215 TL
                            </div>
                        </div>
                        <div className='cart_item'>
                            <div className='cart_item_details'>
                                <img src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE1enJBNWNtTEwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
                                <div className='cart_item_desc'>
                                    DFSDF
                                </div>
                            </div>
                            <div className='cart_item_price'>
                                215 TL
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Orders;