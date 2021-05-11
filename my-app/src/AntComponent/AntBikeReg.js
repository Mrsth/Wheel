// import React, { useEffect, useRef,useState } from 'react';
// import {useForm} from 'react-hook-form';
// import { Form, Button, Row, Col} from 'antd';
// import image1 from '../Images/w1.jpg';
// import axios from 'axios';

// import AntNavDash from './AntNavDash';

// export default function AntBikeReg(props){

//     const[User, setUser] = useState("")
//     const[Model, setModel] = useState("")
//     const[company, setCompany] = useState("")
//     const[Bike_number, setBike_number] = useState("")
//     const[Bike_color, setBike_color] = useState("")
//     const[Picture, setPicture] = useState(null)
    

//     let formData = new FormData();

//     formData.append("rider",User);
//     formData.append("company",company);
//     formData.append("model",Model);
//     formData.append("bike_color",Bike_color);
//     formData.append("picture",Picture);
//     formData.append("bike_number", Bike_number);


//     function handleUpload(event) {
//         setPicture(event.target.files[0]);
//     }
 

//     try{
//         const {rider, model, company, bike_number, bike_color, picture} = props.location.state.toreg

//         var preLoadedData = {
//             username: rider,
//             model: model,
//             company: company,
//             bike_number: bike_number,
//             bike_color: bike_color,
//             picture: picture
//         };
    
//     }catch(error){
//         var empty_preLoadedData = {
//             username: "",
//             model: "",
//             company: "",
//             bike_number: "",
//             bike_color: "",
//             picture: ""
//         };
//     }

//     const{register, handleSubmit} = useForm({
//         defaultValues: preLoadedData === undefined ? empty_preLoadedData : preLoadedData
//     });

//     const onSubmit = (data) => {    
        
//         axios({
//                         method: "post",
//                         url: "http://127.0.0.1:8000/api/bike",
//                         data: formData,
//                         headers: {Authorization: `Token${localStorage.getItem('token')}` },
//                       })
//                         .then(function (response) {
//                           //handle success
//                           console.log(response);
//                         })
//                         .catch(function (response) {
//                           //handle error
//                           console.log(response);
//              });
        
//       };

//     return(
//         <div>
//             <AntNavDash/>
//             <Row style={{width:'80%', marginLeft:'10%', marginTop:'5%'}}>
//                 <Col flex={2}>
//                     <Form onClick={handleSubmit(onSubmit)} style={{marginLeft:'20%', marginTop:'5%', width:'100%'}}>
//                     <h1>Edit the information</h1>
                
//                     <Form.Item
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username!',
//                         },
//                         ]}
//                     >
//                         <input name="username" ref={register} onChange={e=>setUser(e.target.value)} placeholder="Username"  id="demo1" style={{width:'50%'}}/>
//                     </Form.Item>

//                     <Form.Item
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your bike model!',
//                         },
//                         ]}
//                     >
//                         <input name="model" ref={register} placeholder="model"  onChange={e=>setModel(e.target.value)} id="demo2" style={{width:'50%'}}/>
//                     </Form.Item>

//                     <Form.Item
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your bike company!',
//                         },
//                         ]}
//                     >
//                         <input name="company" ref={register} placeholder="company"  onChange={e=>setCompany(e.target.value)} id="demo3" style={{width:'50%'}}/>
//                     </Form.Item>

//                     <Form.Item
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your bike number!',
//                         },
//                         ]}
//                     >
//                         <input name="bike_number" ref={register} onChange={e=>setBike_number(e.target.value)} placeholder="bike number"  id="demo4" style={{width:'50%'}}/>
//                     </Form.Item>

//                     <Form.Item
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your bike color!',
//                         },
//                         ]}
//                     >
//                         <input name="bike_color" ref={register} onChange={e=>{setBike_color(e.target.value)}} placeholder="bike color"  id="demo5" style={{width:'50%'}}/>
//                     </Form.Item>


//                     <Form.Item>
//                         <Button type="primary" htmlType="submit">
//                         Sign Up
//                         </Button>
//                     </Form.Item>   
//                     </Form>
                    
//                 </Col>
//                 <Col>
//                     {
//                     preLoadedData !== undefined ?  
//                     <img style={{width:'1000px', height:'600px'}} src={"http://127.0.0.1:8000"+ preLoadedData.picture}/> :
//                     <img style={{width:'700px', height:'600px'}} src={image1}/>
//                     }   
                    
//                 </Col>
//             </Row>

//             <div id="upload-box">
//                 <input type="file" onChange={handleUpload} />
//             </div> 


//                 {/* <input type="text" ref={register} name="username" placeholder="username"/>
//                 <input type="text" ref={register} name="model" placeholder="model"/>
//                 <input type="text" ref={register} name="company" placeholder="company"/>
//                 <input type="text" ref={register} name="bike_number" placeholder="bike number"/>
//                 <input type="text" ref={register} name="bike_color" placeholder="bike color"/>
//                 <input type="text" ref={register} name="picture" placeholder="picture"/>
//                 <input type="button" value="submit" /> */}
//         </div>
//     );

// }




// ----------------------------------------------- OK ----------------------------------------------------------

import AntNavDash from './AntNavDash'
import React, { useState } from 'react';
import axios from 'axios';
import {Row, Col, Form, Input} from 'antd';
import image1 from '../Images/w1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AntFooter from './AntFooter';


function AntBikeReg(props){

    
    const[Reg_Rider, setReg_Rider] = useState("")
    const[Reg_Model, setReg_Model] = useState("")
    const[Reg_Company, setReg_Company] = useState("")
    const[Reg_Bike_number, setReg_Bike_number] = useState("")
    const[Reg_Bike_color, setReg_Bike_color] = useState("")
    const[Reg_Picture, setReg_Picture] = useState("")

    const [form] = Form.useForm();


    let formData = new FormData();
    formData.append("rider",Reg_Rider);
    formData.append("company",Reg_Company);
    formData.append("model",Reg_Model);
    formData.append("bike_color",Reg_Bike_color);
    formData.append("picture",Reg_Picture);
    formData.append("bike_number", Reg_Bike_number);
    

    const regSubmit = () => {
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/bike",
            data: formData,
            headers: {Authorization: `Token${localStorage.getItem('token')}` },
          })
            .then(function (response) {
              console.log("Submitted = ",response);
              toast.success("Bike registered successfully....")
              form.resetFields();
            })
            .catch(function (response) {
              console.log("Not submitted = ",response);
              toast.error("Bike registration failed...")
            });
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
            <ToastContainer/>
            <center style={{marginTop:'3%'}}><h1>REGISTER YOUR BIKE</h1></center> 
            <Row style={{width:'80%', marginLeft:'10%',marginTop:'4%'}}>
                   <Col flex={2}>'
                   <Form 
                   {...layout} 
                   initialValues={{remember: true,}}
                   form={form}
                   name="basic"
                   >   
                       <Form.Item
                            label="Username"
                            name='username'
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                             <Input  id = "demo1" name="username" value={Reg_Rider} type="text" onChange={(evt) => setReg_Rider(evt.target.value)} placeholder="Enter your name"/>
                        </Form.Item>

                        <Form.Item
                            name="company"
                            label="Company"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike company name!',
                            },
                            ]}
                        >
                             <Input  id = "demo1" name="company" value={Reg_Company} type="text"  onChange={(evt) => setReg_Company(evt.target.value)} placeholder="Enter bike company"/>
                        </Form.Item>

                        <Form.Item
                            name="model"
                            label="Model"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike model name!',
                            },
                            ]}
                        >
                             <Input  id = "demo1" name="model" value={Reg_Model} type="text" onChange={(evt) => setReg_Model(evt.target.value)} placeholder="Enter bike model"/>
                        </Form.Item>   

                        <Form.Item
                            name="bike_number"
                            label="Bike Number"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike number!',
                            },
                            ]}
                        >
                             <Input  id = "demo1" name="bike_number" value={Reg_Bike_number} type="text" onChange={(evt) => setReg_Bike_number(evt.target.value)} placeholder="BA-1-PA-1111"/>
                        </Form.Item> 

                        <Form.Item
                            name="bike_color"
                            label="Bike Color"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike color!',
                            },
                            ]}
                        >
                             <Input  id = "demo1" name="bike_color" value={Reg_Bike_color} type="text"  onChange={(evt) => setReg_Bike_color(evt.target.value)} placeholder="Color of your bike"/>
                        </Form.Item>   
                        <Form.Item
                            name="picture"
                            label="Bike Image"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bike Image!',
                            },
                            ]}
                        >
                             <Input id = "demo1" type="file"  onChange={(evt) => setReg_Picture(evt.target.files[0])}/>
                        </Form.Item> 
                        <Form.Item {...tailLayout}>
                            <button onClick={() => regSubmit()}>Register</button>
                        </Form.Item>                                                                                             
                   </Form>
                   {/* <h3>Bike registration and update information</h3>     
                        <br/>
                            <label>
                            User
                            <input  name="username" value={Reg_Rider} type="text" onChange={(evt) => setReg_Rider(evt.target.value)}/>
                            </label>
                        <br/> 
                            <label>
                            Company
                            <input  name="company" value={Reg_Company} type="text"  onChange={(evt) => setReg_Company(evt.target.value)}/>
                            </label>
                        <br/>
                            <label>
                            Model
                            <input  name="model" value={Reg_Model} type="text" onChange={(evt) => setReg_Model(evt.target.value)}/>
                            </label>
                        <br/>            
                            <label>
                            Bike_number
                            <input  name="bike_number" value={Reg_Bike_number} type="text" onChange={(evt) => setReg_Bike_number(evt.target.value)}/>
                            </label>
                        <br/>
                            <label>
                            Bike_color
                            <input  name="bike_color" value={Reg_Bike_color} type="text"  onChange={(evt) => setReg_Bike_color(evt.target.value)}/>
                            </label>
                        <br/>
                            <label>
                            Picture
                            <input  type="file"  onChange={(evt) => setReg_Picture(evt.target.files[0])}/>
                            </label>
                        <br/>
                            <button onClick={() => regSubmit()}>Register</button> */}
                   </Col>

                   <Col style={{marginLeft:'5%'}}>
                   
                    <img style={{width:'600px', height:'500px'}} src={image1} alt="company logo"/>
    
                   </Col>
            </Row> 
            <AntFooter/>      
      </div>
    );
}

export default AntBikeReg;