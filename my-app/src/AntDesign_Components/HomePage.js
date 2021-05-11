import { Layout} from 'antd';
import AntCarousel from './AntCarousel';
import Services from './Serivces';
import AntCustomer from './AntCustomer';
import AntInfo from './AntInfo';
import AntNav from './AntNav';

const { Header, Content, Footer } = Layout;


export default function HomePage(props){
    console.log(props)
    return(
    <div>
        <Layout>
            <div className="logo" />
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <AntNav/>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <AntCarousel/>
                <Services/>
                <AntCustomer/>
                <AntInfo/>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </div>
    );
}
