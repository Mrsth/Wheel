import React from 'react';
import { Card, Row, Col  } from 'antd';
import image from '../Images/w1.jpg';
import AntNav from './AntNav';


const AntService = () =>{
    return(
        <div>
            <AntNav/>
            <Row style={{marginLeft:'22%', marginTop:'5%'}}>
                <Col style={{background:'red'}}>
                <Card
                    hoverable
                    style={{ width: 500}}
                    cover={<img alt="example" src={image} />}
                >
                    <h1>Wheeler's Hospital</h1>
                    <h2>Find us on Social Media</h2>
                    <Row> 
                        <Col style={{padding:'5%'}}><FacebookFilled style={{ fontSize:'50px'}}/></Col>
                        <Col style={{padding:'5%'}}><InstagramFilled style={{ fontSize:'50px'}}/></Col>
                        <Col style={{padding:'5%'}}><YoutubeFilled style={{ fontSize:'50px'}}/></Col>
                        <Col style={{padding:'5%'}}><LinkedinFilled style={{ fontSize:'50px'}}/></Col>
                    </Row>
                </Card>
                </Col>
                <Col style={{background:'blue'}}>
                <Card
                    hoverable
                    style={{ width: 500 }}
                >
                    <ul style={{listStyle:'none'}}>
                        <li>Servicing</li>
                        <li>Pick Up</li>
                        <li>Delivery</li>
                    </ul>
                </Card>
                </Col>
            </Row>
        </div>
    );
}

export default AntService;