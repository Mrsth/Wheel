import React, {useState, useEffect } from 'react';
import {UserOutlined, RiseOutlined, SendOutlined, BankOutlined, HighlightOutlined, PhoneOutlined, CalculatorFilled} from '@ant-design/icons';
import { Form, Input, Button, Row, Col, message} from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ServiceRequestFormTable from './ServiceRequestFormTable';
import AntCalender from './AntCalender';
import AntTime from './AntTime';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ServiceRequestForm = (props) =>{
 
    const [rider_name, setrider_name] = useState("")
    const [bike_company, setbike_company] = useState("")
    const [bike_number, setbike_number] = useState("")
    const [bike_model, setbike_model] = useState("")
    const [bike_color, setbike_color] = useState("")
    const [pickup, setpickup] = useState("")
    const [delivery, setdelivery] = useState("")
    const [kmcovered, setkmcovered] = useState("")
    const [contact, setcontact] = useState("")
    const [problem, setproblem] = useState("")
    const [selectUser, setSelectUser] = useState("")

    const [form] = Form.useForm()
    const [total, setTotal] = useState([])

    const[companyDatas, setCompanyDatas] = useState([])
    const[bikeNumbers, setBikeNumbers] = useState([])
    // const[bikeModels, setBikeModels] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/bike')
        .then(res=>{
            setTotal(res.data)
        })
        axios.get('http://127.0.0.1:8000/api/company')
        .then(res=>{
            // console.log("Company datas = ", res.data)
            setCompanyDatas(res.data)
        })
        axios.get('http://127.0.0.1:8000/api/bike')
        .then(res=>{
            // console.log("NUM = ", res.data)
            setBikeNumbers(res.data)
        })
    },[])
//----------------------------------------------------------------------
var list_bikeCompany = []
    for(var i=0; i<companyDatas.length; i++){
        // console.log("test",companyDatas[i]["companyName"])
        list_bikeCompany.push(companyDatas[i]["companyName"])
    }

    var list_bikeNumber = []
    // for(var i=0; i<bikeNumbers.length; i++ ){
    //     // console.log(bikeNumbers[i]["bike_number"])
    //     list_bikeNumber.push(bikeNumbers[i]["bike_number"])
    // }

    for(var i=0; i<bikeNumbers.length; i++){
        // console.log("OK = ", bikeNumbers[i]["company"])
        if(bikeNumbers[i]["company"]===bike_company){
            list_bikeNumber.push(bikeNumbers[i]["bike_number"])
        }
    }

    var list_bikeModels = []
    for(var i=0; i<bikeNumbers.length; i++){
        // console.log("OK = ", bikeNumbers[i]["company"])
        if(bikeNumbers[i]["company"]===bike_company){
            list_bikeModels.push(bikeNumbers[i]["model"])
        }
    }
//----------------------------------------------------------------------  

    var x = 0
    function filterUserFunction(){
        for(var i=0; i<total.length; i++){
            if(total[i].rider === localStorage.getItem('user')){
                x += 1
            }else{
                continue
            }
        }
    }
    filterUserFunction()

    
    const onFinish = (values) => {
            x === 0 ? toast.error("No bike registered yet...") :
            
            axios.post('http://127.0.0.1:8000/api/service', 
            {
                "rider_name": rider_name,
                "bike_company": bike_company,
                "bike_model": bike_model,
                "bike_color": bike_color,
                "bike_number": bike_number,
                "pickup": pickup,
                "delivery": delivery,
                "kmcovered": kmcovered,
                "contact": contact,
                "problem": problem , 
                "serviceDate": localStorage.getItem('Date'),
                "serviceTime": localStorage.getItem('STime'),
                "deliveryTime": localStorage.getItem('DTime'),
            }).then(res=>{
                form.resetFields()
                toast.success("Servicing request sent.....")
            }).catch(err=>{
                toast.error("Failed to send servicing error...")
                form.resetFields()
            })
        
      };

    const defaultOption = "Select your bike company"
    function handleSelect(option){
        const selectedCity = option.value
        setbike_company(selectedCity)
    }

    const defaultOption1 = "Your registered bike number"
    function handleNumberSelect(option){
        const selectedNumber = option.value
        setbike_number(selectedNumber)
    }

    const defaultOption2 = "Your registered bike models"
    function handleModelSelect(option){
        const selectedmodel = option.value
        setbike_model(selectedmodel)
    }

    const defaultOption3 = "Bike user"
    function handleUserSelect(option){
        const selectedUser = option.value
        setrider_name(selectedUser)
    }

   

    return(
        <div style={{paddingTop:'2%', paddingBottom:'2%' ,marginTop:'3%', background:'#f2f2f2'}}>
            <ToastContainer/>
            <Row style={{marginLeft:'6%'}}>
                <Col style={{width:'40%'}}>
                        <Form
                            style={{width:'100%'}}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            form={form}
                            >
                            <h1>Bike Service request form</h1>    
                            <Form.Item
                                name="riderName"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                                ]}
                                
                            >
                                <Dropdown onChange={handleUserSelect} options={[localStorage.getItem('user')]} value={defaultOption3} placeholder="Select rider name" />
                                {/* <Input  onChange={e=>setrider_name(e.target.value)} prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Rider name"/> */}
                            </Form.Item>

                                
                            <Form.Item
                                // name="bikeCompany"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your bike company!',
                                },
                                ]}
                                
                            >
                               
                                <Dropdown onChange={handleSelect} options={list_bikeCompany} value={defaultOption} placeholder="Select an option" />
                                {/* <Input onChange={e=>setbike_company(e.target.value)} placeholder="Bike Company" prefix={<BankOutlined />}/> */}
                            </Form.Item>
                            <Form.Item
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your bike number!',
                                },
                                ]}
                                
                            >
                               
                                <Dropdown onChange={handleNumberSelect} options={list_bikeNumber} value={defaultOption1} placeholder="Select an option" />
                                {/* <Input onChange={e=>setbike_number(e.target.value)} placeholder="Bike number"/> */}
                            </Form.Item>

                            <Form.Item
                                // name="bikeModel"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your bike model!',
                                },
                                ]}
                                
                            >
                                <Dropdown onChange={handleModelSelect} options={list_bikeModels} value={defaultOption2} placeholder="Select an option" />
                                {/* <Input onChange={e=>setbike_model(e.target.value)} placeholder="Bike model" prefix={<SendOutlined />}/> */}
                            </Form.Item>

                            <Form.Item
                                name="color"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your bike color!',
                                },
                                ]}
                                
                            >
                                <Input onChange={e=>setbike_color(e.target.value)} placeholder="Bike Color" prefix={<HighlightOutlined/>}/>
                            </Form.Item>

                            <Form.Item
                                name="pickUpLocation"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your pick location!',
                                },
                                ]}
                                
                            >
                                <Input onChange={e=>setpickup(e.target.value)} placeholder="Bike pick up location" prefix={<SendOutlined/>}/>
                            </Form.Item>

                            <Form.Item
                                name="deliverLocation"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your bike deliver location!',
                                },
                                ]}
                                
                            >
                                <Input onChange={e=>setdelivery(e.target.value)} placeholder="Bike delivery location" prefix={<SendOutlined/>}/>
                            </Form.Item>

                            <Form.Item
                                name="kmCovered"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your bike km covered!',
                                },
                                ]}
                                
                            >
                                <Input onChange={e=>setkmcovered(e.target.value)} placeholder="Km Covered" prefix={<RiseOutlined/>}/>
                            </Form.Item>

                            <Form.Item
                                name="contactNum"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your contact number!',
                                },
                                ]}
                                
                            >
                                <Input onChange={e=>setcontact(e.target.value)} placeholder="Rider's contact number" prefix={<PhoneOutlined/>}/>
                            </Form.Item>

                            <Form.Item
                                name="problems"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your problem in bike if any......!',
                                },
                                ]}
                                
                            >
                                <Input.TextArea onChange={e=>setproblem(e.target.value)} placeholder="Problem with bike"/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                            </Form.Item>
                            </Form>
                </Col> 
                <Col style={{width:'50%', marginLeft:'9%'}}>
                    <AntCalender/>
                    <AntTime/>
                </Col>                        
            </Row>   
            <Row>
                <ServiceRequestFormTable/>
            </Row>     
        </div>
    );
}

export default ServiceRequestForm;