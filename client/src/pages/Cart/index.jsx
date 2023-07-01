import React from 'react'
import { Modal } from 'antd';
import { Form, Input, Table, Button } from 'antd';

import { useState } from 'react';
import Navbar from '../../components/Navbar/index.jsx';


const Cart = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '3',
            name: 'Mary',
            age: 27,
            address: '10 Cycle Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
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
                {/* <Table  columns={columns} dataSource={data} pagination={false} /> */}
                <Table className="cart_table" dataSource={dataSource} columns={columns} pagination={false} />
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