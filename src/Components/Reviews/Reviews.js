import React, { useEffect, useState } from 'react';
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewItem from './ReviewItem';
import Spinner from '../Spinner/Spinner'
import { useQuery } from 'react-query';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        fetch('https://vintagewheels.onrender.com/readreviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })

    }, [])

    // const { isLoading, error, data: reviews,refetch } = useQuery('reviewsdata', () =>
    //     fetch('https://vintagewheels.onrender.com/readreviews').then(res =>
    //         res.json()
    //     )
    // )

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };


    // if (isLoading) {
    //     return <Spinner></Spinner>
    // }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Customer Reviews</h2>
                        </div>
                    </div>
                </div>
                {/* <OwlCarousel className='owl-theme testimonial-carousel p-2' responsiveclassName='true' loop margin={10} nav>

                    {reviews.map((review) => {
                        return <ReviewItem key={review._id} review={review}></ReviewItem>
                    })}

                </OwlCarousel> */}
                <div className="row">

                    {reviews.map((review) => {
                        return <>
                            <div className="col-md-6 col-sm-12 p-3">
                                <ReviewItem key={review._id} review={review}></ReviewItem>
                            </div>
                        </>
                    })}
                </div>

            </div>

        </>
    );
};

export default Reviews;