import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';

const Dashboard = () => {
    const [user,loading]=useAuthState(auth)
    const [isAdmin,adminLoading]=useAdmin(user)

    if(loading||adminLoading)
    {
       return <Spinner></Spinner>
    }

    return (
        <>
            <section class="dashboard section">
                <div class="container">
                 
                    <div class="row">
                        <div class="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
                            
                            <div class="sidebar">
                                <div class="widget user-dashboard-profile">
                                    <div class="profile-thumb">
                                        <img src="images/user/user-thumb.jpg" alt="" class="rounded-circle" />
                                    </div>
                                    <h5 class="text-center">Samanta Doe</h5>
                                    <p>Joined February 06, 2017</p>
                                    <a href="user-profile.html" class="btn btn-main-sm">Edit Profile</a>
                                </div>
                                <div class="widget user-dashboard-menu">
                                    <ul className='d-flex flex-column'>
                                        {isAdmin?<>
                                        <NavLink to="myorders">Manage All Orders</NavLink>
                                        <NavLink to="addreview">Add A Product</NavLink>
                                        <NavLink to="manageusers">Make Admin</NavLink>
                                        <NavLink to="myprofile">Manage Products</NavLink>
                                        <NavLink to="myprofile">My Profile</NavLink>
                                        </>:<>
                                        <NavLink to="myorders">My Orders</NavLink>
                                        <NavLink to="addreview">Add a Review</NavLink>
                                        <NavLink to="myprofile">My Profile</NavLink>
                                        </>}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-0">

                            <Outlet></Outlet>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Dashboard;