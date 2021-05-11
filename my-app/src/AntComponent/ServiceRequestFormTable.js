import { Row, Table, Col} from 'antd';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ServiceRequestFormTable(){

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id'},
    { title: 'Rider Name', dataIndex: 'ridername', key: 'ridername',},
    { title: 'Bike Company', dataIndex: 'bikecompany', key: 'bikecompany',},
    { title: 'Bike Model', dataIndex: 'bikemodel', key: 'bikemodel',  },
    { title: 'Bike Color', dataIndex: 'bikecolor', key: 'bikecolor', },
    { title: 'Pickup Location', dataIndex: 'pickup', key: 'pickup',},
    { title: 'Delivery Location', dataIndex: 'delivery', key: 'delivery',},
    { title: 'Km Covered', dataIndex: 'km', key: 'km', },
    { title: 'Contact', dataIndex: 'contact', key: 'contact' ,width:'5%', },
    { title: 'Problem', dataIndex: 'problem', key: 'problem' ,},
    { title: 'Completed', dataIndex: 'completed', key: 'completed', },
    { title: 'Servicing date', dataIndex: 'servicingdate', key: 'servicingdate', },
    { title: 'Servicing time', dataIndex: 'servicingtime', key: 'servicingtime', },
    { title: 'Delivery time', dataIndex: 'deliverytime', key: 'deliverytime', },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <a onClick={()=>deleteRecord(record)}>Delete</a>,
    },
  ]

  const[allDatas, setAllDatas] = useState([])


  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/service')
    .then(res=>{
      setAllDatas(res.data)
    })
  },[])

 

  var i = 0;
  const data = []
  for(i=0; i<allDatas.length; i++){
    if(allDatas[i].rider_name !== localStorage.getItem('user')){
      continue
    }
     let x =  {
       id: allDatas[i].id,
       ridername: allDatas[i].rider_name,
       bikecompany: allDatas[i].bike_company,
       bikemodel: allDatas[i].bike_model,
       bikecolor: allDatas[i].bike_color,
       pickup: allDatas[i].pickup,
       delivery: allDatas[i].delivery,
       km: allDatas[i].kmcovered,
       contact: allDatas[i].contact,
       problem: allDatas[i].problem,
       completed: allDatas[i].completed,  
       servicingdate: allDatas[i].serviceDate, 
       servicingtime: allDatas[i].serviceTime,
       deliverytime: allDatas[i].deliveryTime,
     }
     data.push(x)
  }

  const deleteRecord =(record)=>{
    console.log("Deleted")
    // data.find(item=>console.log(item.id, record.id))
    data.find(item=>{
      if(item.id === record.id){
        axios.delete(`http://127.0.0.1:8000/api/service/${record.id}`)
        .then(res=>console.log("After delete = ", res))
        toast.success(`Record ID = ${record.id} deleted successfully`)
        window.location.reload()
      }
    })
  }


  return(
        <div style={{marginTop:'3%' ,display:'flex', flexDirection:'row', overflow:'auto',width:'100%'}}>
           <Row style={{width:'100%'}}>
             <Col style={{width:'100%'}}>
             <h1><center>{localStorage.getItem('user')}'s servicing request details</center></h1>
              <Table
                  // key={id}
                  columns={columns}
                  // expandable={{
                  // expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                  // rowExpandable: record => record.name !== 'Not Expandable',
                  // }}
                  dataSource={data}
                  rowKey="id"  
              />
             </Col>
           </Row>
        </div>
    );
}
