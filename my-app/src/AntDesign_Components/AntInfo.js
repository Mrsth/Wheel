import { Divider, Col, Row} from 'antd';

export default function AntInfo(){
    return(
        <div style={{marginTop:'5%'}}>
             <Divider>
                <h1 style={{textAlign: 'center'}}>Company Information</h1>
             </Divider>
                <Row>
                    <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                    <h2>Policy</h2>
                        <ul style={{listStyle:'none'}}>
                            <li>Terms and condition</li>
                            <li>Privacy Plocy</li>
                        </ul>
                    </Col>
                    <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
                    <h2>Resources</h2>
                        <ul style={{listStyle:'none'}}>
                            <li>BLog</li>
                            <li>Press</li>
                            <li>Franchise Registration</li>
                        </ul>
                    </Col>
                    <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
                        <h2>Contact Us</h2>
                        <ul style={{listStyle:'none'}}>
                            <li><b>Location: </b>Kathmandu, Swoyambhu</li>
                            <li><b>Phone: </b>+977-934632949</li>
                            <li><b>Email:</b>abc@abc.com</li>
                        </ul>
                    </Col>
                    <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
                        <h2>Company</h2>
                        <ul style={{listStyle:'none'}}>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                    </Col>
                </Row>
        </div>
    );
}