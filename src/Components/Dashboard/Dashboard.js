import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                                        <NavLink to="myorders">My Orders</NavLink>
                                        <NavLink to="addreview">Add a Review</NavLink>
                                        <NavLink to="myprofile">My Profile</NavLink>
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