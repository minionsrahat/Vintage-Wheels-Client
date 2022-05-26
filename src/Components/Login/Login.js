import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'
import auth from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Spinner/Spinner';
const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword, hookuser, hookloading,
        hookerror,
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubuser, githubloading, githuberror] = useSignInWithGithub(auth);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        if (user) {

            fetch('http://localhost:5000/login', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user?.email,
                    name: user.displayName || undefined
                })
            })
                .then(res => res.json())
                .then(data => {
                    const { token } = data
                    if (token) {
                        localStorage.setItem('accessToken', token)
                        console.log(token);
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
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFormsubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(mail, password)
    }

    const handleGoogleButton = () => {
        signInWithGoogle()
    }
    const handleResetPassword = async () => {
        if (!mail) {
            toast("Oops!! you forgot to enter your mail!");
        }
        else {
            toast('Your reset password link sent to your mail!')
            await sendPasswordResetEmail(mail);
        }
    }

    return (
        <>

            <div
                class="container-fluid bg-primary bg-appointment my-5 wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div class="container">
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
                    <div class="row gx-5">
                        <div class="col-lg-6 py-5">
                            <div class="py-5">
                                <h1 class="display-5 text-white mb-4">
                                    We Are A Certified and Award Winning Automotive Company You Can Trust
                                </h1>
                                <p class="text-white mb-0">
                                    We sets the standards and trends in the highly dynamic automotive aftermarket parts industry, always staying a step ahead of the competition. Using the latest cutting-edge technologies, impeccable design processes and precision, We proudly supplies products adhering to the highest standards, ensuring both quality and safety.
                                </p>

                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                                data-wow-delay="0.6s"
                            >
                                <h1 class="text-white mb-4">Log In</h1>
                                <form onSubmit={handleFormsubmit}>
                                    <div class="row g-3">
                                        <div class="col-12 ">
                                            <input
                                                type="email"
                                                class="form-control bg-light border-0"
                                                placeholder="Your Email"
                                                onBlur={handleUserMail}

                                            />
                                        </div>
                                        <div class="col-12 ">
                                            <div class="password" id="">
                                                <input
                                                    type="password"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Your Password"
                                                    onBlur={handleUserPassword}
                                                />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-dark w-100 py-3" type="submit">
                                                Log In
                                            </button>
                                        </div>
                                        <div className="col-12">
                                            <p className='text-white'>Dont Have a Account?<strong> <Link to="/signup" className='text-white'>Sign Up</Link></strong> </p>
                                            {hookerror || googleerror ? <>
                                                <div className="text-center my-2">
                                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                        <strong>{hookerror?.message}{googleerror?.message}</strong>
                                                    </div>
                                                </div>
                                            </> : ''}
                                        </div>
                                        <div className="col-12">
                                            <div class="row text-white">
                                                <div class="col"><hr /></div>
                                                <div class="col-auto">OR</div>
                                                <div class="col"><hr /></div>
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

export default Login;