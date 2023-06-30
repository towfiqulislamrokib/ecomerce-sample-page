import React, { useContext } from 'react';
import { Authcontext } from '../contexts/Usercontext';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation();
    if(loading){
        return <div>loading....</div>;
    }
   if(user && user.uid){
    return children;
   }
   return <Navigate to='/login' state= { {from: location} } replace />
};

export default Privateroute;
