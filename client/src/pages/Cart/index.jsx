import React from 'react'
import { Modal } from 'antd';
import { Form, Input, Button } from 'antd';

import { useState } from 'react';
import Navbar from '../../components/Navbar/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleIncreaseCount, handleDecreaseCount, handleDeleteItem } from '../../redux/slices/Cart/index.jsx';

const Cart = () => {

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const basket = useSelector(state => state.cart.basket);

    var totalPrice = basket.reduce(function (r, a) {
        return r + Number(a.price) * a.count;

    }, 0);
    // const onFinish = (values) => {
    //     console.log('Success:', values);
    // };
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div>
            <Navbar />
            <div className="pt-10">
                <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {basket.map((item, key) =>
                            <div key={key} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={item.img} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                                        <p className="mt-1 text-xs text-gray-700"></p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <input onClick={() => dispatch(handleDecreaseCount(item))} type="button" value={"-"} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 " />
                                            <span className="h-8 w-8 border flex justify-center items-center bg-white text-center text-xs outline-none">{item.count}</span>
                                            <input onClick={() => dispatch(handleIncreaseCount(item))} type="button" value={"+"} className="cursor-pointer rounded-r text-orange-400 bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-400 hover:text-blue-50" />
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm">{item.count * Number(item.price)} ₺</p>
                                            <button onClick={() => dispatch(handleDeleteItem(item))}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">{totalPrice} ₺</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">4.99 ₺</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">{totalPrice + 4.99} ₺</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;