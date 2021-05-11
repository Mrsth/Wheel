import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Layout} from 'antd';
import AntNav from './AntNav';


const {Footer} = Layout;


const AntOurServices = () =>{

    const [ourServiceDatas, setOurServiceDatas] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/ourservices')
        .then(res=>{
            console.log("Our service data = ", res.data)
            setOurServiceDatas(res.data)
        })
    },[])


    
    return(
        <div style={{background:'#f2f2f2'}}>
            <AntNav/>
            <center style={{marginTop:'3%'}}><h1>Our Services</h1></center>
            {
                ourServiceDatas.map(item=>{
                    return(
                        <div key={item.id} style={{display:'flex', marginLeft:'25%', marginRight:'5%', maxWidth:'50%'}}>
                            <Card
                            hoverable
                            style={{ maxWidth:'100%', marginBottom:'1%'}}
                            cover={<img alt="example" src={item.servicePhoto}  style={{paddingTop:'3%',maxWidth:'40%', display:'flex' ,height:'auto', marginLeft:'27%'}}/>}
                            >
                                
                            <h1>{item.serviceTitle}</h1> 
                            <hr></hr>    
                            <p>{item.serviceContent}</p>
                           </Card>
                        </div>
                    );
                })
            }
            <Footer style={{textAlign: 'center', position:'reletive', bottom:'0', width:'100%'}}>
                Wheeler's Hospital ©2021 Created by Mr Sth
            </Footer>
        </div>
    );
}

export default AntOurServices