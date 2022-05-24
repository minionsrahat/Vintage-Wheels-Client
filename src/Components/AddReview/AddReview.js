import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import ReactStars from "react-rating-stars-component";
import auth from '../../firebase';
import Spinner from '../Spinner/Spinner';
const AddReview = () => {
    const [rating, setRating] = useState('')
    const [user, loading] = useAuthState(auth)
    const { isLoading: userloading, data: userData } = useQuery(['userdata', user], () =>
        fetch(`http://localhost:5000/readUserData?email=${user?.email}`).then(res =>
            res.json()
        )
    )
    const review = useRef('');
    const handleFormsubmit = (e) => {
        const token = localStorage.getItem('accessToken')
        const newreview = {
            review:review.current.value,
            rating:rating,
            email:userData.email,
			name:userData.name
        }
        e.preventDefault();
        fetch("http://localhost:5000/addreview", {
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
                    alert('Review Added Successfully')
                }
                else {
                    alert("Unexpected Error Occured!! Please Fill Up form carefully")
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
            <div class="container widget dashboard-container ">
                <h4 className="text-center mb-4">Give a Review</h4>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={handleFormsubmit} id="review-form">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" readOnly id="name" value={userData.name} placeholder={"Your Name"} />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" readOnly class="form-control" value={userData.email} id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input ref={review}type="text" class="form-control" required id="subject" placeholder="Phone" />
                                            <label for="subject">Review</label>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex align-items-center">
                                        <label className='me-2'><strong>Ratings:</strong> </label>
                                        <ReactStars
                                            count={5}
                                            value={1}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>

                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Give Review</button>
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