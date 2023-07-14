import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewItem = ({ review }) => {
    return (
        <div className='item'>
            <div className="testimonial-item bg-transparent border rounded p-4">
                <div className="text-center my-1">
                    <Rating
                        initialRating={review.rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: '#e00085' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </div>
                <h5 className='text-center'>"{review.review}"</h5>
                <div className="">
                    <div className="p-2 my-2 ">
                        <p className="mb-1 text-center">{review.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;