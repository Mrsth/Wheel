import React,{useState} from 'react'
import { Form, Input, Button, Layout } from 'antd';
import axios from 'axios';
import AntNav from './AntNav';
import {Link} from 'react-router-dom';
import AntInfo from './AntInfo';

const { Header} = Layout;


function AntRegister(props){
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 6 },
    };

    const tailLayout = {
        wrapperCol: { offset: 5, span: 10 },
    };

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    const onFinish = (values) => {
        console.log('Success:', values);
                axios.post('http://127.0.0.1:8000/api/register', {
                "username": username,
                "email": email,
                "password": password
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err, "error aayo"))
       
     };

     
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div>
             <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <AntNav/>
                </Header>
            </Layout>
            <h1 style={{marginTop:'10%'}}>This is Register Page</h1>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{marginBottom:'13%'}}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input onChange={e=>setUserName(e.target.value)}/>

                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                <Input onChange={e=>setEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password  onChange={e=>setPassword(e.target.value)}/>
                </Form.Item>

                
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Register
                    </Button>
                </Form.Item>
                <Link to="/login">Already have an account? Go back to login page</Link>
            </Form>
            <AntInfo/>
        </div>
    );
}

export default AntRegister