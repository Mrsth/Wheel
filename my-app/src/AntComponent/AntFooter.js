import {Layout} from 'antd';

const {Footer} = Layout;

const AntFooter = props =>{
    return(
       
            <Footer style={{textAlign: 'center', position:'fixed', bottom:'0', width:'100%'}}>
                Wheeler's Hospital ©2021 Created by Mr Sth
            </Footer>
        
    );
}

export default AntFooter;
