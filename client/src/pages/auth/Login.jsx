//import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from '../../api.jsx';
import styles from "./index.module.css"
import { Button, Form, Input } from 'antd';


import { useAuth } from '../../contexts/authContext.jsx';

const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await loginUser(values);

            if (response.succeded) {
                login(response)
                setTimeout(() => {
                    navigate("/dashboard")
                }, 1000)
            } else {
                alert("there is an error!!");
                navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                            label="Username"
                            name={"username"}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
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

                            <Link to="/register" >
                                Sign Up
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Login;