import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3ahMG0E7F2Erbs99tjo8knoWbR5BXoJximf7sLmLdADOKySuNfdY9SZYo4sPXPLYLhg392uz8RpjDq3iVWOOOn00ank1njnt');

const Payment = () => {
    const { id } = useParams();


    const { data: order, isLoading: orderLoading } = useQuery(['singleorderdata', id], () => fetch(`https://arcane-shore-13420.herokuapp.com/readSingleOrderData/${id}`)
        .then(res => res.json()));

    // const { data: product, isLoading: productLoading } = useQuery(['singleproductdata',order], () => fetch(`https://arcane-shore-13420.herokuapp.com/readSingleToolsData/${order?.product_id}`)
    //  .then(res => res.json()));

    if (orderLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-12 p-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">{order.product_name}</h4>
                                <p class="card-text">Quantity: {order.quantity}</p>
                                <p class="card-text">Price: {order.price}</p>
                                <p class="card-text">Location: {order.address}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row my-3">
                    <div class="col-12 p-4">
                        <div class="card">
                            <div class="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm order={order} />
                                </Elements>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Payment;