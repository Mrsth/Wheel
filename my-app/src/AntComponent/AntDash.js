import React, {useEffect, useState} from 'react';
import AntNavDash from './AntNavDash';
import AntProfile from './AntProfile';
import ServiceRequestForm from './ServiceRequestForm';
import { Col, Row } from 'antd';
import axios from 'axios';
import AntFooter from './AntFooter';

const AntDash = props =>{

    const [total, setTotal] = useState([])
    // const [filterUser, setFilterUser] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/bike')
        .then(res=>{
            // console.log("ALL DATAS = ",res.data)
            setTotal(res.data)
        })
    },[])

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

    const rider = localStorage.getItem('user')
    return(
        <div>
            <AntNavDash/>
            <Row style={{marginTop:'3%'}}>
                <Col style={{paddingLeft:'5%'}} span={8}>
                    <h1 style={{marginLeft:'6%', marginBottom:'2%', marginTop:'2%'}}>Welcome to dashboard {rider}</h1>
                </Col>
                <Col style={{float:'right', paddingLeft:'13%', paddingTop:'2%'}} span={8} offset={8}>
                    <h2>Total registered vehicles: {x}</h2>
                </Col>
            </Row>
            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                <AntProfile/>   
            </Col>
            <ServiceRequestForm/>
            <AntFooter/>
        </div>
    );
}

export default AntDash;