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
            <div className="col-sm-12 col-lg-4">

                <div className="product-item bg-light">
                    <div className="card">
                        <div className="thumb-content">
                            <img className="card-img-top" src={img} alt="" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{name.slice(0,30)}...</h4>
                            <p className="card-text">
                                {des.slice(0,100)}...
                            </p>
                            <div className="product-ratings">
                                <Rating
                                    initialRating={ratings}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{ color: '#e00085' }} icon={faStar} />}
                                    readonly
                                ></Rating>
                            </div>
                            <div className="my-2">
                                <span className='d-block'>Minimum Order Quantity:{min_quantity}</span>
                                <span className='d-block'>Available Quantity:{quantity}</span>
                            </div>
                            <h4>Unit Price:${price}</h4>
                            
                            <div className="text-center mt-4">
                                <button onClick={() => navigateToProductDetailspage(_id)} className="btn btn-primary">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Product;