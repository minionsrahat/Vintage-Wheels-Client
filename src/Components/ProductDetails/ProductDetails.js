import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';
import auth from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';


const ProductDetails = () => {



	const [user, loading] = useAuthState(auth)
	const { id } = useParams();
	const navigate = useNavigate();
	const [userData, setUserdata] = useState({})
	const arrivalDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));


	useEffect(() => {
		fetch(`https://vintagewheels.onrender.com/readUserData?email=${user?.email}`)
			.then(res => res.json())
			.then(data => setUserdata(data))
	}, [user])


	const { isLoading: productLoading, data: product } = useQuery('productdata', () =>
		fetch(`https://vintagewheels.onrender.com/readSingleToolsData/${id}`).then(res =>
			res.json()
		)
	)
	const phone = useRef('');
	const quantity = useRef('');
	const address = useRef('');
	const message = useRef('');
	const [price, setPrice] = useState(0)



	if (productLoading) {
		return <Spinner></Spinner>
	}

	const handleQuantity = (e) => {
		if (parseInt(quantity.current.value) < product.min_quantity) {
			quantity.current.value = product.min_quantity
			alert('You have to order at least ' + product.min_quantity + " items")
			setPrice(parseInt(quantity.current.value) * product.price)
		}
		else if (isNaN(quantity.current.value)) {
			quantity.current.value = product.min_quantity
			alert('Quantity can not be string')
			setPrice(parseInt(quantity.current.value) * product.price)
		}
		else if (parseInt(quantity.current.value) > product.quantity) {

			alert('Sorry We havent ' + quantity.current.value + " items in our stock")
			quantity.current.value = product.min_quantity
			setPrice(parseInt(quantity.current.value) * product.price)
		}
		else if (!quantity.current.value) {
			quantity.current.value = product.min_quantity
			setPrice(parseInt(quantity.current.value) * product.price)
		}
		else {
			setPrice(parseInt(quantity.current.value) * product.price)

		}

	}


	const handleFormsubmit = (e) => {
		const token = localStorage.getItem('accessToken')
		const newOrder = {
			product_id: product._id,
			product_name:product.name,
			phone: phone.current.value,
			quantity: quantity.current.value,
			price:price,
			address: address.current.value,
			message: message.current.value,
			email: userData.email,
			name: userData.name
		}
		e.preventDefault();
		fetch("https://vintagewheels.onrender.com/addOrder", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				accesstoken: `${userData.email} ${token}`
			},
			body: JSON.stringify(newOrder)
		}).then(res => res.json())
			.then((data) => {
				const { acknowledged, insertedId } = data;
				const { error } = data

				if (acknowledged) {
					document.getElementById("order-form").reset();

					toast('Order Added Successfully')
					
				}
				else {
					toast("Unexpected Error Occured!! Please Fill Up form carefully")
				}
			})
	}



	return (
		<>
			<section className="section bg-gray">
				<div className="container">
					<div className="row">

						<ToastContainer></ToastContainer>
						<div className="col-md-8 mx-auto">
							<div className="product-details">
								<h1 className="product-title">{product.name}</h1>
								<div className="product-meta">
									<ul className="list-inline">
										<li className="list-inline-item"><i className="fa fa-user-o"></i> By Andrew</li>
										<li className="list-inline-item"><i className="fa fa-folder-open-o"></i> Category Electronics</li>
										<li className="list-inline-item"><i className="fa fa-location-arrow"></i> Location Dhaka Bangladesh</li>
									</ul>
								</div>
								<img src={product.img} alt="" srcset="" />
								<div className="content">
									<div className="d-flex justify-content-center">
										<div className="price bg-primary text-white px-5 py-2">
											Price <br />
											${product.price}
										</div>
										<div className="price bg-primary text-white px-5 py-2 mx-2">
											Min Qunatity <br />
											{product.min_quantity}
										</div>
										<div className="price bg-primary text-white px-5 py-2">
											Available Quantity <br />
											{product.quantity}
										</div>
									</div>
									<div className="tab-content" id="pills-tabContent">
										<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
											<h3 className="tab-title">Product Description</h3>
											<p>{product.des}</p>
										</div>
									</div>
									<div>

									</div>
									<div className="tab-content" id="pills-tabContent">
										<h3 className="tab-title">Ratings</h3>
										<Rating
											initialRating={product.ratings}
											emptySymbol={<FontAwesomeIcon icon={faStar} />}
											fullSymbol={<FontAwesomeIcon style={{ color: '#e00085' }} icon={faStar} />}
											readonly
										></Rating>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h1 className="mb-5"><span className="text-primary text-uppercase">Place Order</span> </h1>
					</div>
					<div className="row g-4">
						<div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<iframe className="position-relative rounded w-100 h-100"alt='' title='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"></iframe>
						</div>
						<div className="col-md-6">
							<div className="wow fadeInUp" data-wow-delay="0.2s">
								<form onSubmit={handleFormsubmit} id='order-form'>
									<div className="row g-3">
										<div className="col-md-6">
											<div className="form-floating">
												<input type="text" className="form-control" readOnly id="name" placeholder={"Your Name"} value={userData?.name} />
												<label for="name">Your Name</label>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-floating">
												<input type="email" readOnly className="form-control" id="email" value={userData?.email} placeholder="Your Email" />
												<label for="email">Your Email</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input ref={phone} type="text" className="form-control" required id="subject" placeholder="Phone" />
												<label for="subject">Phone</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input ref={address} type="text" className="form-control"required id="subject" placeholder="Address" />
												<label for="subject">Address</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input type="text" ref={quantity} onBlur={handleQuantity} required className="form-control" id="subject" placeholder="Quantity" />
												<label for="subject">Quantity</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input type="text" value={price} readOnly className="form-control" id="subject" placeholder="Price" />
												<label for="subject">Price</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<textarea ref={message} className="form-control"required placeholder="Leave a message here" id="message"></textarea>
												<label for="message">Message</label>
											</div>
										</div>
										<div className="col-12">
											<button className="btn btn-primary w-100 py-3" type="submit">Place order</button>
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

export default ProductDetails;