import { signOut } from 'firebase/auth';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase';
import useAdmin from '../Hooks/useAdmin';


const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [isadmin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <Spinner></Spinner>
    }

    if(!user || !isadmin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;