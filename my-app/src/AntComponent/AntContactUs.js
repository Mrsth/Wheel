import React from 'react';
import { Card, Row, Col  } from 'antd';
import image from '../Images/w1.jpg';
import AntNav from './AntNav';

import {FacebookFilled, InstagramFilled, YoutubeFilled, LinkedinFilled, MobileFilled, EnvironmentFilled, MailFilled} from '@ant-design/icons';

const AntContactUs = () =>{
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
                        <Col style={{padding:'5%'}}>
                            <a href="https://www.facebook.com/"><FacebookFilled style={{ fontSize:'50px'}}/></a>
                        </Col>
                        <Col style={{padding:'5%'}}>
                            <a href="https://www.instagram.com/"><InstagramFilled style={{ fontSize:'50px'}}/></a>
                        </Col>
                        <Col style={{padding:'5%'}}>
                            <a href="https://www.youtube.com/"><YoutubeFilled style={{ fontSize:'50px'}}/></a>
                        </Col>
                        <Col style={{padding:'5%'}}>
                            <a href="https://www.linkedin.com"><LinkedinFilled style={{ fontSize:'50px'}}/></a>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col style={{background:'blue'}}>
                <Card
                    hoverable
                    style={{ width: 500 }}
                >
                    <h1>Contact Us</h1>
                    <ul style={{listStyle:'none'}}>
                        <li>
                            <h2><MobileFilled style={{marginRight:'5%'}}/>Phone number:</h2>
                            <p>9821648912</p>
                        </li>
                        <li>
                            <h2><EnvironmentFilled style={{marginRight:'5%'}}/>Location:</h2>
                            <p>Kathmandu, Nepal, Swoyambhu</p>
                        </li>
                        <li>
                            <h2><MailFilled style={{marginRight:'5%'}}/>Email:</h2>
                            <p>abc@abc.com</p>
                        </li>
                    </ul>
                </Card>
                </Col>
            </Row>
        </div>
    );
}

export default AntContactUs;