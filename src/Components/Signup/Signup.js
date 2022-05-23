import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'
// import Spinner from '../Spinner/Spinner';
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
            fetch('http://localhost:5000/login', {
                method: 'POST',
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

    // if (hookloading || googleloading || githubloading) {
    //     return <Spinner></Spinner>
    // }

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
                                <h1 class="text-white mb-4">Sign Up</h1>
                                <form onSubmit={handleFormsubmit}>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                class="form-control bg-light border-0"
                                                placeholder="Your Name"
                                                required
                                               onBlur={handleUserName}


                                            />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                class="form-control bg-light border-0"
                                                placeholder="Your Email"
                                                required
                                                onBlur={handleUserMail}
                                            />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="" id="">
                                                <input
                                                    type="password"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Your Password"
                                                    required
                                                    onBlur={handleUserPassword}

                                                />
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="" id="">
                                                <input
                                                    type="password"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Confirm Password"
                                                    required
                                                    onBlur={handleUserConfirmPassword}

                                                />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-dark w-100 py-3" type="submit">
                                                Sign Up
                                            </button>
                                        </div>
                                        <hr />
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