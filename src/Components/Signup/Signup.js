import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import GoogleButton from 'react-google-button'
import Spinner from '../Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setConfirmPassword] = useState('');
    const [user, loading] = useAuthState(auth);
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, hookuser, hookloading,
        hookerror] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user) {
            console.log();
            fetch('https://vintagewheels.onrender.com/login', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: user?.email,
                    name:user.displayName|| name
                })
            })
                .then(res => res.json())
                .then(data => {
                    const { token } = data
                    if (token) {
                        localStorage.setItem('accessToken', token)
                        navigate(from, { replace: true })

                    }
                })
        }
    }, [user])

    if (hookloading || googleloading) {
        return <Spinner></Spinner>
    }

    const handleUserMail = (e) => {
        setMail(e.target.value);
    }
    const handleUserName = (e) => {
        setName(e.target.value);
    }
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleUserConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleFormsubmit = (e) => {
        e.preventDefault();
        // console.log(mail, password);
        if (password === cpass) {
            createUserWithEmailAndPassword(mail, password)
        }
        else {
            toast("Oops!! Your password and confirmed password didnt match.");

        }
    }

    const handleGoogleButton = () => {
        signInWithGoogle()
    }

    

    return (
        <>

            <div
                className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="container">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                    <div className="row gx-5">
                        <div className="col-lg-6 py-5">
                            <div className="py-5">
                                <h1 className="display-5 text-white mb-4">
                                    We Are A Certified and Award Winning Automotive Company You Can Trust
                                </h1>
                                <p className="text-white mb-0">
                                We sets the standards and trends in the highly dynamic automotive aftermarket parts industry, always staying a step ahead of the competition. Using the latest cutting-edge technologies, impeccable design processes and precision, We proudly supplies products adhering to the highest standards, ensuring both quality and safety.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                                data-wow-delay="0.6s"
                            >
                                <h1 className="text-white mb-4">Sign Up</h1>
                                <form onSubmit={handleFormsubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0"
                                                placeholder="Your Name"
                                                required
                                               onBlur={handleUserName}


                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                className="form-control bg-light border-0"
                                                placeholder="Your Email"
                                                required
                                                onBlur={handleUserMail}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="" id="">
                                                <input
                                                    type="password"
                                                    className="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Your Password"
                                                    required
                                                    onBlur={handleUserPassword}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="" id="">
                                                <input
                                                    type="password"
                                                    className="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Confirm Password"
                                                    required
                                                    onBlur={handleUserConfirmPassword}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-dark w-100 py-3" type="submit">
                                                Sign Up
                                            </button>
                                        </div>
                                        <div className="col-12">
                                        <p className='text-white'>Already Have a Account?<strong> <Link to="/login" className='text-white'>Login</Link></strong> </p>
                                        {hookerror || googleerror? <>
                                            <div className="text-center my-2">
                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    <strong>{hookerror?.message}{googleerror?.message}</strong>
                                                </div>
                                            </div>
                                        </> : ''}
                                        </div>
                                        <div className="col-12">
                                            <div className="row text-white">
                                                <div className="col"><hr /></div>
                                                <div className="col-auto">OR</div>
                                                <div className="col"><hr /></div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                        <GoogleButton
                                                onClick={handleGoogleButton} className="mx-auto"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;