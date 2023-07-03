import React from 'react'
import { Modal } from 'antd';
import { Form, Input, Button } from 'antd';

import { useState } from 'react';
import Navbar from '../../components/Navbar/index.jsx';


const Cart = () => {


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
                        <h2>Shopping Cart</h2>
                        <h3>Price</h3>
                    </div>
                    <div className='cart_item_wrapper'>
                        <div className='cart_item'>
                            <div className='cart_item_details'>
                                <img src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE1enJBNWNtTEwuX0FDX1NMMTUwMF8uanBn.jpg" alt='' />
                                <div className='cart_item_desc'>
                                    <div>DFSDF</div>
                                    <div className='cart_item_actions'>
                                        <div className='itemquantity_btns'>
                                            <button className='minusbtn'>-</button>
                                            <span>0</span>
                                            <button className='plusbtn'>+</button>
                                        </div>
                                        <button className='delete_btn'>Delete</button>
                                    </div>
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
                                    <div>DFSDF</div>
                                    <div className='cart_item_actions'>
                                        <div className='itemquantity_btns'>
                                            <button className='minusbtn'>-</button>
                                            <span>0</span>
                                            <button className='plusbtn'>+</button>
                                        </div>
                                        <button className='delete_btn'>Delete</button>
                                    </div>
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
                                    <div>DFSDF</div>
                                    <div className='cart_item_actions'>
                                        <div className='itemquantity_btns'>
                                            <button className='minusbtn'>-</button>
                                            <span>0</span>
                                            <button className='plusbtn'>+</button>
                                        </div>
                                        <button className='delete_btn'>Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className='cart_item_price'>
                                215 TL
                            </div>
                        </div>
                    </div>
                    <div className='total_price'><span>Total Price:</span>645 TL</div>
                </div>
                <div className='bill'>
                    <h2>Order</h2>
                    <div className='bill_info'>
                        <div>Subtotal<span>3.421 TL</span></div>
                        <div>Cargo<span>203 TL</span></div>
                    </div>
                    <div className='bill_total'>
                        3.624 TL
                    </div>
                    <button className='confirm_btn' onClick={() => setIsModalOpen(true)}>Confirm the Order</button>
                </div>
                <Modal title="Order" footer={false} open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
                    <Form
                        layout='vertical'
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Surname"
                            name="surname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your surname!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <div className='bill'>
                            <div className='bill_info'>
                                <div>Subtotal<span>3.421 TL</span></div>
                                <div>Cargo<span>203 TL</span></div>
                            </div>
                            <div className='bill_total'>
                                3.624 TL
                            </div>
                            <Button className='confirm_btn' htmlType='submit' onClick={() => setIsModalOpen(false)} >Confirm the Order</Button>
                        </div>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default Cart;