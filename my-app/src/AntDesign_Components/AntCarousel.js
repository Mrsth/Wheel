import { Carousel } from 'antd';
import logo from '../Images/dark.jpg';


const contentStyle = {
  height: '600px',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


export default function AntCarousel(){
    return(
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img src={logo} alt="lol" style={{height:'600px', width:'100%'}}/>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src={logo} alt="lol" style={{height:'600px', width:'100%'}}/>
                </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src={logo} alt="lol" style={{height:'600px', width:'100%'}}/>
                    </h3>
                </div>
                <div>
                <h3 style={contentStyle}>
                    <img src={logo} alt="lol" style={{height:'600px', width:'100%'}}/>
                </h3>
                </div>
            </Carousel>
        </div>
    );
}  