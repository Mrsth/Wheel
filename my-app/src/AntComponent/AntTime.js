import { TimePicker, Row, Col } from 'antd';

function serviceTime(time, timeString) {
//   console.log(timeString);
  localStorage.setItem('STime', timeString)
}

function deliveryTime(time, timeString) {
    // console.log(timeString);
    localStorage.setItem('DTime', timeString)
  }

const AntTime = () =>{
    return(
        <div>
            {/* <TimePicker use12Hours onChange={onChange} /> */}
            <Row style={{marginTop: '2%'}}>
              <Col>
                <h3>Service Time:</h3><TimePicker use12Hours format="h:mm:ss A" onChange={serviceTime} style={{ width: 140}} />
              </Col>
              <Col style={{marginLeft:'5%'}}>
                <h3>Expected delivery Time:</h3> <TimePicker use12Hours format="h:mm:ss A" onChange={deliveryTime} style={{ width: 140 }} />
              </Col>
            {/* <TimePicker use12Hours format="h:mm a" onChange={onChange} /> */}
            </Row>
        </div>
    )
}

export default AntTime;