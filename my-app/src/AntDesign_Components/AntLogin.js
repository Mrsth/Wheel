import React,{useState} from 'react'
import { Form, Input, Button, Alert, Layout} from 'antd';
import axios from 'axios';
import AntInfo from './AntInfo';
import {Link} from 'react-router-dom';
import AntNav from './AntNav';


const { Header} = Layout;

  function Login(props){

    console.log("Login props = ", props)

    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 6 },
    };

    const tailLayout = {
        wrapperCol: { offset: 5, span: 10 },
    };

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("") 

    const [success, setSuccess] = useState()
    const [alert, setAlert] = useState()
  


    const onFinish = (values) => {
        console.log('Success:', values);
                axios.post('http://127.0.0.1:8000/api/login', {
                "username": username,
                "password": password
            })
            .then(res=>{
                sessionStorage.setItem('user_token', res.data.token)
                sessionStorage.setItem('user_name', username)                
            
                setSuccess(true)
                setTimeout(()=>{setSuccess(false)}, 5000)


            })
            .catch(err=>{
                console.log(err, "error aayo")
                setAlert(true)
                setTimeout(()=>{setAlert(false)}, 5000)
            })
     };

        
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return(
        <div>
            {
                success && 
                <center>
                <Alert message="Login Completed" type="success" 
                description="Logged in" 
                showIcon 
                style={{maxWidth:"30em", fontWeight:"bold"}}/>
                </center>
            }
            {
                alert && 
                <center>
                <Alert message="Login Failed" type="error" 
                description="Login Failed" 
                showIcon 
                style={{maxWidth:"30em", fontWeight:"bold"}}/>
                </center>
            }
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <AntNav/>
                </Header>
            </Layout>
            <AntNav/>
            <h1 style={{marginTop:'10%'}}>This is Login Page</h1>
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
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password  onChange={e=>setPassword(e.target.value)}/>
                </Form.Item>

            

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Login
                    </Button>
                </Form.Item>
                <Link to="/reg">Don't have an account? SignUp Here</Link>
            </Form>
            <AntInfo/>
        </div>
    );
}

export default Login