import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import AntNav from './AntNav';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function AntDash(){
    return(
        <div>
            <Layout>
                <Header className="header">
                <div className="logo" />
                <AntNav/>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <Menu.Item>
                        <Link to="/dash">Dashboard</Link>    
                    </Menu.Item> 
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Bike">
                        <Menu.Item key="1">Bike Servicing</Menu.Item>
                        <Menu.Item key="2">Bike Parts</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="Car">
                        <Menu.Item key="5">Car Servicing</Menu.Item>
                        <Menu.Item key="6">Car Parts</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    Welcome user
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        </div>
    );
}
  