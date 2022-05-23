import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'
import auth from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Spinner from '../Spinner/Spinner';
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

            fetch('https://murmuring-brook-11258.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: user?.email })
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


    // if(hookloading||googleloading||githubloading)
    // {
    //     return <Spinner></Spinner>
    // }

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
    const handleGithubButton = () => {
        signInWithGithub();

    }
    if (hookerror) {
        console.log(hookerror);
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
                    <div class="row gx-5">
                        <div class="col-lg-6 py-5">
                            <div class="py-5">
                                <h1 class="display-5 text-white mb-4">
                                    We Are A Certified and Award Winning Dental Clinic You Can Trust
                                </h1>
                                <p class="text-white mb-0">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                                    ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                                    rebum sea invidunt voluptua. Eos vero eos vero ea et dolore
                                    eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                                    magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                                    sed.
                                </p>

                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                                data-wow-delay="0.6s"
                            >
                                <h1 class="text-white mb-4">Log In</h1>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-12 ">
                                            <input
                                                type="email"
                                                class="form-control bg-light border-0"
                                                placeholder="Your Email"

                                            />
                                        </div>
                                        <div class="col-12 ">
                                            <div class="password" id="">
                                                <input
                                                    type="text"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Your Password"


                                                />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-dark w-100 py-3" type="submit">
                                                Log In
                                            </button>
                                        </div>
                                        <div className="col-12">
                                        <div class="row text-white">
                                            <div class="col"><hr/></div>
                                            <div class="col-auto">OR</div>
                                            <div class="col"><hr/></div>
                                        </div>
                                        </div>
                                        
                                        <div className="col-12">
                                            <GoogleButton className='mx-auto'></GoogleButton>
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