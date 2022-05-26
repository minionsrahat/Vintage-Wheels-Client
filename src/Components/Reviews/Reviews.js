import React, { useEffect, useState } from 'react';
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewItem from './ReviewItem';

const Reviews = () => {
        const [reviews, setReviews]=useState([])
        useEffect(()=>{
            fetch('https://arcane-shore-13420.herokuapp.com/readreviews')
            .then(res=>res.json())
            .then(data=>setReviews(data))

        },[])

    return (
        <>
            <div className="container my-5">
            <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>Customer Reviews</h2>
                            </div>
                        </div>
                    </div>
                <OwlCarousel className='owl-theme testimonial-carousel p-2' responsiveClass='true' loop margin={10} nav>
                   
                {reviews.map((review)=>{
                    return <ReviewItem key={review._id} review={review}></ReviewItem>
                })}
            
                </OwlCarousel>
            </div>

        </>
    );
};

export default Reviews;