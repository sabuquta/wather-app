"use client"
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {login} from '../api/authApi';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [loading, setLoading] = useState(false); 
  const router = useRouter();
  const onFinish = async (values) => {
    setLoading(true);
    const { email, password } = values; 
    
    try {
     const response = await login(email,password);
        console.log(response);
       localStorage.setItem('token', response.token);
       localStorage.setItem('user', JSON.stringify(response.user));
       message.success(response.message);
      
      router.push('/weather');
    } catch (error) {
      console.error('Login error:', error);
      message.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
      <h1>Login</h1>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          email: '',
          password: ''
        }}
      >
        {/* Email Field */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
          style={{color:"#fff !important"}}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
          <p>Test Data (Success)<br/>
          Email : salim@gmail.com<br/>
          Password : 12345678</p>
        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;