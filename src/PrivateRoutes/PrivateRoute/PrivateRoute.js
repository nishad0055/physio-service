import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
     
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
     if(loading) {
        return <>
                    <div class="flex items-center justify-center ">
                        <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                    </div>
              </>
  
     }
    if(user){
        return children
    }

    return <Navigate state={{from:location}} replace >  </Navigate>
       
};

export default PrivateRoute;