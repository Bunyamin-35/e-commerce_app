import React from 'react'
import { Link } from "react-router-dom"

import styles from "./index.module.css"
import { Button, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Login = () => {
    return (
        <div className={styles.loginpage}>
            <div className={styles.loginpagebg}>
            </div>
            <div className={styles.loginpagecontent}>
                <div className={styles.animation}>
                </div>
                <div className={styles.loginform}>
                    <Form
                        className={styles.form}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        layout='vertical'
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <h2>Login</h2>
                        <Form.Item
                            className={styles.emailinput}
                            label="E-mail"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: 'Please input your e-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            className={styles.passwordinput}
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item className={styles.btnbox}>
                            <Button type="primary" htmlType="submit" className={styles.btn} >
                                Log In
                            </Button>
                        </Form.Item>
                        <Form.Item className={styles.isMember}>
                            Not a member?

                            <Link to="/register" className={styles.btn} >
                                Log In
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;