import { Card, Col, Divider, Row } from 'antd';


export default function AntCustomer(){
    return(
        <div className="site-card-wrapper">
        <Divider>
          <h1 style={{textAlign: 'center'}}>Happy Customer</h1> 
        </Divider>  
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    );
}