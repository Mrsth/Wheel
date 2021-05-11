import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Card} from 'antd';
import {Redirect} from 'react-router-dom';
// import ServiceRequestForm from './ServiceRequestForm';


const { Meta } = Card;

const AntProfile = props =>{

    const Rider = localStorage.getItem('user')
    const [therider,setTheRider] = useState([])
    const [cardOnClick, setCardOnClick] = useState(false)
    const [toreg, setToReg] = useState({})
    // const [totalReg, setTotalReg] = useState([])
    // const [cardOnHover, setCardOnHover] = useState(false)
    // const [toServiceForm, setToServiceForm] = useState({})

    

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/bike')
        .then(res=>{
            // console.log("ALL DATA = ",res.data)
            setTheRider(res.data)
        })
    },[])

   
    

    // useEffect(()=>{
    //     axios({
    //         method: "get",
    //         url: "http://127.0.0.1:8000/api/bike",
    //         headers: {'Content-Type':'application/json'},
    //       }).then(res=>setTheRider(res.data))
    // },[])
 

 function RiderCard({id,rider,company,model,bike_number,bike_color,picture}){
    //  http://127.0.0.1:8000/media/fz_250_white.jpeg
     return(
        
            <Card      
                hoverable
                style={{ width: 600, paddingRight:'1%'}}
                cover={<img style={{width:'500px', height:'400px'}} alt="example" src={"http://127.0.0.1:8000"+picture}/>}
                onClick={()=>{
                    setCardOnClick(true)
                    // console.log("lol = ",id, rider, company, model, bike_number, bike_color)
                    const req = {
                        "id":id, "Rider":rider, "company":company, "ModeL":model, 
                        "bike_number": bike_number, "bike_color":bike_color, "picture":picture
                    }
                    setToReg(req)
                    sessionStorage.setItem('update', 'true')
                }
            }
            >
                <Meta description="Registered"/>
                <Meta description="Click to edit" style={{marginRight:'2%', marginLeft:'75%'}}/>
                <h1>{rider}</h1>
                <ul>
                    <li><b>Bike Model: </b>{model}</li>
                    <li><b>Bike Company: </b>{company}</li>
                    <li><b>Bike Number: </b>{bike_number}</li>
                    <li><b>Bike Color: </b>{bike_color}</li> 
                </ul>
            </Card>
        
        );
 }


    return(
        <div>
            <div style={{display:'flex', flexDirection:'row', overflow:'auto', width:'400%'}}>
            {
                //    Filtering the use i.e only admin bikes if admin loggs in not other riders bike
                therider.map((item)=>(
                    item.rider === Rider ? 
                    <RiderCard 
                        key={item.id} 
                        {...item}
                        /> 
                    : 
                    <h1 key={item.id}></h1>
                )
                )
            }
            {cardOnClick === true ? <Redirect to={{
                pathname: '/update',
                state: {"toreg":toreg, 'cardClick': cardOnClick}
            }}/>:null}
            </div>
        </div>
    );
}

export default AntProfile;