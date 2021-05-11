import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const ProtectedProfile = ({component: Component, ...rest})=>{
    return(
        <div>
            <Route {...rest} render={
                 props=>{
                     if(localStorage.getItem('token') === null){
                        return <Redirect to={{pathname:'/profile'}}/>
                     }else{
                        return <Component {...rest} {...props}/>
                     }
                 }
                 }/>
        </div>
    );
}

export default ProtectedProfile;