import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import AntDash  from './AntComponent/AntDash';
import ProtectedRoute from './AntComponent/ProtectedRoute';
// import AntNav from './AntComponent/AntNav';
import AntRegister from './AntComponent/AntRegister';
import AntForm from './AntComponent/AntForm';
import LandingPage from './AntComponent/LandingPage';
// import AntProfile from './AntComponent/AntProfile';
// import ProtectedProfile from './AntComponent/ProtectedProfile';
// import ServiceRequestForm from './AntComponent/ServiceRequestForm';
import AntContactUs from './AntComponent/AntContactUs';
import AntBikeReg from './AntComponent/AntBikeReg';
import AntBlog from './AntComponent/AntBlog';
import AntBikeUpdate from './AntComponent/AntBikeUpdate';
import AntResetPassword from './AntComponent/AntResetPassword';
import AntOurServices from './AntComponent/AntOurService';


import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App() {
  const auth =(localStorage.getItem('token') !== null);
 
  return (
    <div className="App">  
      <BrowserRouter>
        {/* <AntNav/>   */}
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={AntForm}/>
          <ProtectedRoute exact path="/dash" auth={!auth} component={AntDash}/>
          <Route exact path="/reg" component={AntRegister}/>
          {/* <ProtectedProfile exact path="/profile" auth={!auth} component={AntProfile}/> */}
          {/* <Route exact path="/req" component={ServiceRequestForm}/> */}
          <ProtectedRoute exact path="/reg_bike" component={AntBikeReg}/>
          <Route exact path="/contact" component={AntContactUs}/>
          <ProtectedRoute exact path="/blog" component={AntBlog}/>
          <ProtectedRoute exact path="/update" component={AntBikeUpdate}/>
          <ProtectedRoute exact path="/reset" component={AntResetPassword}/>
          <Route exact path="/ourservices" component={AntOurServices}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
