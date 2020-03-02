import React from 'react';
import { Route, Redirect } from 'react-router';

 const AuthenticRoute=({component:Component,...rest})=>(
    <Route
        {...rest}
        render={props=>localStorage.getItem("token")?<Component {...props}/>:<Redirect to="/"/>}
    />

);

export default AuthenticRoute;