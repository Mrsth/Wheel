import React, { useEffect, useState} from 'react'
import axios from 'axios'
import AntNavDash from './AntNavDash'
import {Card, Layout} from 'antd';

const {Footer} = Layout;


const AntBlog = () =>{

    const[blogs, setBlogs] = useState([])
    const[showBlogModel, setShowBlogModel] = useState(false)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/blog')
        .then(res=>{
            setBlogs(res.data)
        })
    },[])

    console.log("Blog = ", blogs)

    var i = 0;
    var total = 0;
    for(i=0; i<blogs.length; i++){
        total +=1;
    }

    return(
        <div style={{background:'#f2f2f2'}}> 
            <AntNavDash/>
            <h2 style={{float:'right', color:'black', marginRight:'2%'}}>
                {`Total number of blogs : ${total}`}
            </h2>
            <div>
                <center style={{marginTop:'2%', marginLeft:'10%'}}>
                    <div style={{fontSize:'40px'}}>On going vehicle news</div>
                </center>
                {
                    blogs.map(item=>{
                    return(
                        <div key={item.id} style={{display:'flex', marginLeft:'25%', marginRight:'5%', maxWidth:'50%'}}>
                        <Card
                        hoverable
                        style={{ maxWidth:'100%', marginBottom:'3%'}}
                        cover={<img alt="example" src={"http://127.0.0.1:8000"+item.blogImage} style={{paddingTop:'3%',maxWidth:'80%', display:'flex' ,height:'auto', marginLeft:'10%'}}/>}
                        >
                            <h1>{item.blogTitle}</h1>
                            <hr></hr>
                            <p>{item.blogContent}</p>
                            <a href={item.blogLink}>Official Source</a>
                        </Card> 
                        </div>
                    );
                    })
                }
            </div>
            <Footer style={{textAlign: 'center', position:'reletive', bottom:'0', width:'100%'}}>
                Wheeler's Hospital ©2021 Created by Mr Sth
            </Footer>
        </div>
    );
}

export default AntBlog;