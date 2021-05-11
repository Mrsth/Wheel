import React,{useEffect} from 'react';
import AntForm from './AntForm';
import { Row, Col,Image } from 'antd';
// import AntCarasoul from './AntCarasoul';
import AntNav from './AntNav'
import Logo from '../Images/Untitled.png';
import AntFooter from './AntFooter';



const LandingPage = props =>{


    useEffect(()=>{
        console.log("Test = ", localStorage.getItem('user') )
     },[localStorage.getItem('user')])
    
    return(
        <div style={{height:'100vh'}}>
            <AntNav/>
            <center><div style={{fontSize:'50px', marginBottom:'1%', fontWeight:'lighter'}}>WHEELER'S HOSPITAL</div></center>
            <div style={{marginLeft:'5%', marginRight:'5%', background:'white'}}>
                <Row justify="space-around">
                    <Col span={12} style={{marginLeft:'5%'}}>
                        {/* <AntCarasoul/> */}
                        <Image src={Logo}/>
                    </Col>
                    <Col span={7} offset={3}>
                        <AntForm/>
                    </Col>
                </Row>
            </div>
            <AntFooter/>
        </div>
    );
}

export default LandingPage;