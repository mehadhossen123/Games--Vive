import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { RiPictureInPictureLine } from 'react-icons/ri';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Component/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    // console.log(user,loading);
    const location=useLocation()
    //  console.log(location)
    
    if(loading){
        return <Loading></Loading>
    }



    if(user&&user?.email){
        return children
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;