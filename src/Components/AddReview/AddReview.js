import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import ReactStars from "react-rating-stars-component";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase';
import Spinner from '../Spinner/Spinner';
import { useForm } from "react-hook-form";
const AddReview = () => {
    const [rating, setRating] = useState(1)
    const [user, loading] = useAuthState(auth)
    const { isLoading: userloading, data: userData } = useQuery(['userdata', user], () =>
        fetch(`https://vintagewheels.onrender.com/readUserData?email=${user?.email}`).then(res =>
            res.json()
        )
    )
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (newreview) =>{
        const token = localStorage.getItem('accessToken')
        newreview.rating=rating;
        fetch("https://vintagewheels.onrender.com/addreview", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: `${userData.email} ${token}`
            },
            body: JSON.stringify(newreview)
        }).then(res => res.json())
            .then((data) => {
                const { acknowledged, insertedId } = data;
                const { error } = data

                if (acknowledged) {
                    document.getElementById("review-form").reset();
                    toast('Review Added Successfully')
                }
                else {
                    toast("Unexpected Error Occured!! Please Fill Up form carefully")
                }
            }) 
    }
    const ratingChanged = (newRating) => {
        setRating(newRating)
    };
    if (userloading) {
		return <Spinner></Spinner>
	}

    return (
        <div>
            <div className="container widget dashboard-container ">
            <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Give a Review</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ToastContainer></ToastContainer>
                    <div className="col-md-8 mx-auto">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={handleSubmit(onSubmit)} id="review-form">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                        <input {...register("name", { required: true })} readOnly defaultValue={userData.name} type="text" className="form-control" required id="subject" placeholder="Phone" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                        <input {...register("email", { required: true })} readOnly defaultValue={userData.email} type="text" className="form-control" required id="subject" placeholder="Phone" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                        <input {...register("review", { required: true })} type="text" className="form-control"  id="subject" placeholder="Review" />
                                            {/* <input ref={review}type="text" className="form-control" required id="subject" placeholder="Phone" /> */}
                                            <label for="subject">Review</label>
                                        </div>
                                        {errors.review && <span className='text-danger'>This field is required</span>}
                                    </div>
                                    <div className="col-12 d-flex align-items-center">
                                        <label className='me-2'><strong>Ratings:</strong> </label>
                                        <ReactStars
                                            count={5}
                                            value={1}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Give Review</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AddReview;