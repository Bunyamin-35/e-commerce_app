import React from 'react'
import { Modal } from 'antd';
import { Form, Input, Button } from 'antd';

import { useState } from 'react';
import Navbar from '../../components/Navbar/index.jsx';
import { useSelector } from 'react-redux';


const Cart = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const basket = useSelector(state => state.cart.basket)
    console.log(basket[0].item.img);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div>
            <Navbar />
            <div class="pt-10">
                <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div class="rounded-lg md:w-2/3">
                        {basket.map((item, key) => 
                            <div key={key} class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={item.item.img} alt="product-image" class="w-full rounded-lg sm:w-40" />
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-lg font-bold text-gray-900">{item.item.title}</h2>
                                        {/* <p class="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
                                    </div>
                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div class="flex items-center border-gray-100">
                                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                            <p class="text-sm">{item.item.price} ₺</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>
                    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Subtotal</p>
                            <p class="text-gray-700">$129.99</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-gray-700">Shipping</p>
                            <p class="text-gray-700">$4.99</p>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                                <p class="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                </div>
            </div>
            {/* <div className='cartpage'>
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
            </div> */}
        </div>
    )
}

export default Cart;