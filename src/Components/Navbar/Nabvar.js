import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import './Navbar.css'
import {MdAttachEmail} from 'react-icons/md'
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
            <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Our Office - Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed
                            </small>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-end">
                        <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                            <div className="me-3 pe-3 border-end py-2">
                                <p className="m-0 text-white">
                                    <MdAttachEmail className=' me-2'></MdAttachEmail>
                                   info@vintagwheels.com
                                </p>
                            </div>
                            <div className="py-2">
                                <p className="m-0 text-white">
                                   <FaPhone className='me-2'></FaPhone>+012 345 6789
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <Link to='/' className="navbar-brand p-0">
                    <h1 className="m-0 text-primary">
                        Vintage Wheels
                    </h1>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-4">
                        <NavLink to='/' className="nav-item nav-link">Home</NavLink>
                        {user && <>
                            <NavLink to='/dashboard' className="nav-item nav-link">Dashboard</NavLink>
                            
                        </>}
                        <NavLink to='/blogs' className="nav-item nav-link">Blogs</NavLink>
                        <NavLink to='/portfolio' className="nav-item nav-link">Portfolio</NavLink>
                        <NavLink to='/aboutus' className="nav-item nav-link">About Us</NavLink>
                    </div>
                    {user?<>
                     <button onClick={logout} className="btn btn-primary py-2 px-4 ms-3">Sign Out</button>
                    </>:<>
                    <button onClick={goLoginPage} className="btn btn-primary py-2 px-4 ms-3">Sign In</button>
                    <button onClick={goSignupPage} className="btn btn-primary py-2 px-4 ms-3">Sign Up</button>
                    </>}
                
                
                </div>
            </nav>
        </>
    );
};

export default Nabvar;