import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import useAdmin from '../Hooks/useAdmin';

const WelcomeDashboard = () => {
    const [user,loading]=useAuthState(auth)
    const [isAdmin, adminLoading]=useAdmin(user)
    if(loading||adminLoading)
    {
        return <Spinner></Spinner>
    }
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Welcome To Your Dashboard</h2>
                        <p>{isAdmin?'Admin Dashboard':'User Dashboard'}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomeDashboard;