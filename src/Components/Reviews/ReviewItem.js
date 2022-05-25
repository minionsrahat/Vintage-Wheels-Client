import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewItem = ({ review }) => {
    return (
        <div class='item'>
            <div class="testimonial-item bg-transparent border rounded p-4">
                <div className="text-center my-1">
                    <Rating
                        initialRating={review.rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: '#e00085' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </div>
                <h5 className='text-center'>"{review.review}"</h5>
                <div class="d-flex align-items-center">
                    <div class="p-2 my-2">
                        <p class="mb-1">{review.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;