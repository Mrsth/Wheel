import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest})=>{
    return(
        <div>
            <Route {...rest} render={
                 props=>{
                     if(localStorage.getItem('token') === null){
                        return <Redirect to={{pathname:'/'}}/>
                     }else{
                        return <Component {...rest} {...props}/>
                     }
                 }
                 }/>
        </div>
    );
}

export default ProtectedRoute;