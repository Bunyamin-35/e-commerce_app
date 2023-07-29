import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

import styles from "./index.module.css"
import { Button, Form, Input, Alert } from 'antd';

import { registerUser } from '../../api';




const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");



  const onFinish = async (values) => {
    try {
      const response = await registerUser(values);
      console.log(response);
      if (response.succeded) {
        setTimeout(() => {
          navigate("/login")
        }, 1000)
      }
    } catch (error) {
      setError(error.response.data.message);
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
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2>Sign Up</h2>
            {error &&
              <Alert
                message={error}
                banner
              />}
            <Form.Item
              className={styles.emailinput}
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              className={styles.emailinput}
              label="Last Name"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
            >
              <Input />
            </Form.Item> */}
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
            <Form.Item
              className={styles.passwordinput}
              label="Confirm Password"
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item className={styles.btnbox}>
              <Button type="primary" htmlType="submit" className={styles.btn} >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register;