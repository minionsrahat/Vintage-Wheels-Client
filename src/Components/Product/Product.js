import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import ReactStars from "react-rating-stars-component";
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { _id, name, des, img, quantity, min_quantity, ratings, price } = props.product;
    const navigate = useNavigate('');
    const navigateToProductDetailspage = (id) => {
        navigate(`/productdetails/${id}`)
    }

    return (
        <>
            <div class="col-sm-12 col-lg-4">

                <div class="product-item bg-light">
                    <div class="card">
                        <div class="thumb-content">
                            <img class="card-img-top" src={img} alt="" />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{name}</h4>
                            <p class="card-text">
                                {des}
                            </p>
                            <div class="product-ratings">
                                <Rating
                                    initialRating={ratings}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{ color: '#e00085' }} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </div>
                            <div className="my-2">
                                <span className='d-block'>Minimum Quantity:{min_quantity}</span>
                                <span className='d-block'>Available Quantity:{quantity}</span>
                            </div>
                            <h4>Unit Price:${price}</h4>
                            
                            <div className="text-center mt-4">
                                <button onClick={() => navigateToProductDetailspage(_id)} class="btn btn-main">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Product;