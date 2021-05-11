import {Link} from 'react-router-dom';
import {Menu} from 'antd';
export default function AntNav(){
    return(
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/home">Home</Link>    
                </Menu.Item>
                <Menu.Item key="2">Bluebook Renew</Menu.Item>
                <Menu.Item key="3">Contact US</Menu.Item>
                <Menu.Item key="4">
                    <Link to="/reg">Register</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to='/login'>Login</Link>  
                </Menu.Item>
            </Menu>
        </div>
    );
}