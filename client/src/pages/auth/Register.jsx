import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react';

import styles from "./index.module.css"
import { Button, Form, Input } from 'antd';




const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
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
            <Form.Item
              className={styles.emailinput}
              label="First Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
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
            </Form.Item>
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