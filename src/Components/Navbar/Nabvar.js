import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import './Navbar.css'
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Nabvar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const goLoginPage = () => {
        navigate('/login')
    }
    const goSignupPage = () => {
        navigate('/signup')
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };

    return (
        <>
            <div class="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
                <div class="row gx-0">
                    <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div class="d-inline-flex align-items-center">
                            <small class="py-2"><i class="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed
                            </small>
                        </div>
                    </div>
                    <div class="col-md-6 text-center text-lg-end">
                        <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                            <div class="me-3 pe-3 border-end py-2">
                                <p class="m-0">
                                    <i class="fa fa-envelope-open me-2"></i>info@example.com
                                </p>
                            </div>
                            <div class="py-2">
                                <p class="m-0">
                                    <i class="fa fa-phone-alt me-2"></i>+012 345 6789
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0 text-primary">
                        Vitage Wheels
                    </h1>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto py-4">
                        <NavLink to='/' className="nav-item nav-link">Home</NavLink>
                        {user && <>
                            <NavLink to='/DASHBOARD' className="nav-item nav-link">Dashboard</NavLink>
                            
                        </>}
                        <NavLink to='/blogs' className="nav-item nav-link">Blogs</NavLink>
                        <NavLink to='/contactus' className="nav-item nav-link">Contact</NavLink>
                    </div>
                    {user?<>
                     <button onClick={logout} class="btn btn-primary py-2 px-4 ms-3">Sign Out</button>
                    </>:<>
                    <button onClick={goLoginPage} class="btn btn-primary py-2 px-4 ms-3">Sign In</button>
                    <button onClick={goSignupPage} class="btn btn-primary py-2 px-4 ms-3">Sign Up</button>
                    </>}
                
                
                </div>
            </nav>
        </>
    );
};

export default Nabvar;