import React from 'react'
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


const { Header} = Layout;


const AntNavDash = (props) =>{

    let history = useHistory();

    const handleLogout=()=>{
        // localStorage.removeItem('token')
        // localStorage.removeItem('update')
        localStorage.clear()
        history.push('/')
    }

    return(
        <div style={{marginBottom:'1%'}}>
            <Header className="header" theme="dark">
                <div className="logo" />
                <Menu theme="dark" theme="dark" mode="horizontal">
                    <Menu.Item key="1" style={{fontWeight:'bolder', fontSize:'16px'}}>
                        <Link to="/">Wheelers Hospital</Link>
                    </Menu.Item>                  
                    <Menu.Item key="3">
                        <Link to="/reg_bike">Bike Registration</Link>
                    </Menu.Item>
                   
                    <Menu.Item key="5">
                        <Link to="/blog">Blogs</Link>
                    </Menu.Item>  
                    {/* <Menu.Item key="6">
                        <Link to="#">Bike Info</Link>
                    </Menu.Item>   */}
                    <Menu.Item key="7" style={{float:'right'}} >
                        <Link to="#">{localStorage.getItem('user')}'s account</Link>
                    </Menu.Item>  
                    <Menu.Item key="8" style={{float:'right'}}>
                        <Link to="#" onClick={handleLogout}>Logout</Link>
                    </Menu.Item>                       
                    <Menu.Item key="9">
                        <Link to="/reset">Reset Password</Link>
                    </Menu.Item>                           
                </Menu>
            </Header>
        </div>
    );
}

export default AntNavDash;