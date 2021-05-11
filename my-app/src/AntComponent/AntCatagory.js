import React from 'react';
import { Carousel} from 'antd';


const AntCatagory = (props) =>{
    const contentStyle = {
        height: '200px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        width: '100%',
    };

    
    const [dotPosition] = React.useState('top');
      
    
        
    return(
        <div>
            <Carousel dotPosition={dotPosition}>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
   
}

export default AntCatagory;