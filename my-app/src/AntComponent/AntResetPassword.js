import React,{useState, useEffect} from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AntNavDash from './AntNavDash';


const AntResetPassword=()=>{

    const layout = {
        labelCol: {
          span: 9,
        },
        wrapperCol: {
          span: 6,
        },
    };
    const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
    };

    const[form] = Form.useForm()

   
    const token = localStorage.getItem('token')


    const [theID, setTheID] = useState(0)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/login')
        .then(res=>{
            res.data.map(item=>{
               if(item.username === localStorage.getItem('user')){
                console.log("Aayo = ", item.username)
                setTheID(item.id)
               }
            })
        })
    },[])

    console.log("ID aayo = ", theID)


    const onFinish = (values) => {
        console.log('Success:', values);
            axios.put(`http://127.0.0.1:8000/api/change_password/${theID}`, {
            'old_password': currentPassword,
            'password': newPassword,
            'password2':confirmPassword
          },
          {
              'headers':{'Authorization': `token ${token}`}
          }
          )
          .then(function (response) {
            console.log("password = ",response);
            form.resetFields()
            toast.success("Password changed successfully")
          })
          .catch(function (error) {
            // console.log(error);
            toast.error("Password reset failed")
          });
        
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const[currentPassword, setCurrentPassword] = useState("")
    const[newPassword, setNewPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")


    return(
        <div>
            <AntNavDash/>
            <ToastContainer/>
            <center style={{fontSize:'30px', marginTop:'5%', marginBottom:'3%'}}>Reset password from</center>
            <Form
            {...layout}
            form={form}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Current Password"
                    name="current_password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your current password!',
                    },
                    ]}
                >
                    <Input.Password placeholder="Please input your current password" onChange={e=>setCurrentPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="New Password"
                    name="new_password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your new password!',
                    },
                    ]}
                >
                    <Input.Password placeholder="Please input your new password" onChange={e=>setNewPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirm_password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input new password!',
                    },
                    ]}
                >
                    <Input.Password placeholder="Please confirm your new password" onChange={e=>setConfirmPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item {...tailLayout} style={{marginTop:'2%'}}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AntResetPassword