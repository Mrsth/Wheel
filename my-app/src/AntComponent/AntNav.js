import React from 'react'
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';


const { Header} = Layout;


const AntBar = (props) =>{

    return(
        <div style={{marginBottom:'3%'}}>
            <Header className="header" theme="dark">
                <div className="logo" />
                <Menu mode="horizontal"  theme="dark">
                    <Menu.Item key="1">
                        <Link to="/">Wheelers Hospital</Link>
                    </Menu.Item>
                    {/* <Menu.Item key="2">
                        <Link to="/login">Login</Link>
                    </Menu.Item> */}
                    <Menu.Item key="3">
                        <Link to="/reg">SignUp</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/contact">Contact Us</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/ourservices">Services</Link>
                    </Menu.Item>
                                                             
                </Menu>
            </Header>
        </div>
    );
}

export default AntBar;