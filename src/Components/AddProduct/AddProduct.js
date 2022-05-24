import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase';
import Spinner from '../Spinner/Spinner';

const AddProduct = () => {
    const [user, loading] = useAuthState(auth)

    const name = useRef('');
    const des = useRef('');
    const img = useRef('');
    const ratings = useRef('');
    const price = useRef('');
    const min_quantity = useRef('');
    const quantity = useRef('');

    const { isLoading: userloading, data: userData } = useQuery(['userdata', user], () =>
        fetch(`http://localhost:5000/readUserData?email=${user?.email}`).then(res =>
            res.json()
        )
    )


    const handleFormsubmit = (e) => {
        const token = localStorage.getItem('accessToken')
        const newproduct = {
            name: name.current.value,
            des: des.current.value,
            img: img.current.value,
            price: price.current.value,
            quantity: quantity.current.value,
            min_quantity: min_quantity.current.value,
            ratings: ratings.current.value,
            email: userData.email,
            
        }
        e.preventDefault();
        fetch("http://localhost:5000/addproduct", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: `${userData.email} ${token}`
            },
            body: JSON.stringify(newproduct)
        }).then(res => res.json())
            .then((data) => {
                const { acknowledged, insertedId } = data;
                const { error } = data

                if (acknowledged) {
                    alert('Product Added Successfully')
                }
                else {
                    alert("Unexpected Error Occured!! Please Fill Up form carefully")
                }
            })
    }


    if (userloading || loading) {
        return <Spinner></Spinner>
    }
    return (
        <>
            <div>
                <div class="container widget dashboard-container ">
                    <h4 className="text-center mb-4">Add New Product</h4>
                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={handleFormsubmit} id="review-form">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" readOnly id="name" value={userData.name} />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" readOnly class="form-control" value={userData.email} id="email" />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input ref={name} type="text" class="form-control" required id="subject" placeholder="Product Title" />
                                                <label for="subject">Product Title</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" ref={des} class="form-control" required id="subject" placeholder="Product Description" />
                                                <label for="subject">Product Description</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" ref={img} class="form-control" required id="subject" placeholder="Image URL" />
                                                <label for="subject">Image URL</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="number" ref={price} class="form-control" required id="name" placeholder="Unit Price" />
                                                <label for="name">Unit Price</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="number" ref={min_quantity} class="form-control" required id="email" placeholder="Minimum Order Quantity" />
                                                <label for="email">Minimum Order Quantity</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="number" ref={quantity} class="form-control" required id="email" placeholder="Available Quantity" />
                                                <label for="email">Available Quantity</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="number" ref={ratings} class="form-control" required id="email" placeholder="Initial Ratings" />
                                                <label for="email">Initial Ratings</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Add Product</button>
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

export default AddProduct;