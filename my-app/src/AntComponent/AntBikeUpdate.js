import AntNavDash from './AntNavDash'
import React, { useState } from 'react';
import axios from 'axios';
import {Row, Col, Form, Input, Button} from 'antd';
import image1 from '../Images/w1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AntBikeUpdate(props){

    window.onunload=()=>{
        sessionStorage.removeItem('update')
    }

    if(sessionStorage.getItem('update')==='true'){
        var {id, Rider, ModeL, company, bike_number, bike_color, picture} = props.location.state.toreg
    }else{
        var {Rider, ModeL, company, bike_number, bike_color, picture} = props
    }
 
    const[Reg_Rider, setReg_Rider] = useState(Rider)
    const[Reg_Model, setReg_Model] = useState(ModeL)
    const[Reg_Company, setReg_Company] = useState(company)
    const[Reg_Bike_number, setReg_Bike_number] = useState(bike_number)
    const[Reg_Bike_color, setReg_Bike_color] = useState(bike_color)
    const[Reg_Picture, setReg_Picture] = useState(picture)

    console.log("Photo = ", Reg_Picture)

    const [form] = Form.useForm();


    let formData = new FormData();
    formData.append("rider",Reg_Rider);
    formData.append("company",Reg_Company);
    formData.append("model",Reg_Model);
    formData.append("bike_color",Reg_Bike_color);
    formData.append("picture",Reg_Picture);
    formData.append("bike_number", Reg_Bike_number);
    
    const resetSubmit=()=>{
        setReg_Bike_color("");
        setReg_Bike_number("")
        setReg_Company("")
        setReg_Model("")
        setReg_Picture(image1)
        setReg_Rider("")
    }


    const updateSubmit = () => {
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/bike/${id}`,
            data: formData,
            headers: {Authorization: `Token${localStorage.getItem('token')}` },
          })
            .then(function (response) {
              //handle success
              console.log(response)
              const success_msg = "Updated Successfully"
              toast.success(success_msg)
            })
            .catch(function (response) {
              //handle error
              console.log(response)
              toast.error("Please don't leave any field empty...")
            });
    }


    const handleDelete=()=>{
        axios.delete(`http://127.0.0.1:8000/api/bike/${id}`)
        .then(res=>{
            console.log(res.data)
            props.history.push("/dash")
        })
    }

    const layout = {

        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
    };


    return(
        <div className="App">
            <AntNavDash/>
            <center style={{marginTop:'3%'}}><h1>UPDATE YOUR BIKE INFORMATION</h1></center> 
            <ToastContainer/>
            <Row style={{width:'90%',marginTop:'4%', marginLeft:'10%'}}>
                   <Col style={{width:'50%'}}>
                   <Form 
                   form={form}
                   name="basic"
                   {...layout} 
                   initialValues={{remember: true,}}
                   >   
                       <Form.Item
                            label="Username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                             <Input  value={Reg_Rider} type="text" onChange={(evt) => setReg_Rider(evt.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Company"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike company name!',
                            },
                            ]}
                        >
                             <Input  name="company" value={Reg_Company} type="text"  onChange={(evt) => setReg_Company(evt.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Model"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike model name!',
                            },
                            ]}
                        >
                             <Input  name="model" value={Reg_Model} type="text" onChange={(evt) => setReg_Model(evt.target.value)}/>
                        </Form.Item>   

                        <Form.Item
                            label="Bike Number"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike number!',
                            },
                            ]}
                        >
                             <Input  name="bike_number" value={Reg_Bike_number} type="text" onChange={(evt) => setReg_Bike_number(evt.target.value)}/>
                        </Form.Item> 

                        <Form.Item
                            label="Bike Color"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike color!',
                            },
                            ]}
                        >
                             <Input  name="bike_color" value={Reg_Bike_color} type="text"  onChange={(evt) => setReg_Bike_color(evt.target.value)}/>
                        </Form.Item>   
                        <Form.Item
                            label="Bike Image"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike Image!',
                            },
                            ]}
                        >
                             <Input type="file"  onChange={(evt) => setReg_Picture(evt.target.files[0])}/>
                        </Form.Item> 
                        <Form.Item {...tailLayout}>
                            <Button style={{marginRight:'2%'}} type="primary" onClick={() => updateSubmit()}>Update</Button>
                            <Button type="primary" style={{background:'green', marginRight:'2%'}} onClick={() => resetSubmit()}>Reset</Button>
                            <Button style={{marginRight:'2%'}} type="primary" danger onClick={()=>handleDelete()}>Delete</Button>
                            {/* <center style={{marginTop:"5%"}}>{Reg_Picture && <ImageThumb image={Reg_Picture}/>}</center>  */}
                        </Form.Item>   
                                                                                       
                   </Form>
                   
                   </Col>

                   <Col style={{marginLeft:'5%'}}>
                   {
                    picture !== undefined?  
                    <img alt="black wheel" style={{width:'600px', height:'500px'}} src={"http://127.0.0.1:8000"+ Reg_Picture}/>:
                    <img alt="no" style={{width:'600px', height:'500px'}} src={image1}/>
                    }  
                   </Col>
            </Row>   
      </div>
    );
}

