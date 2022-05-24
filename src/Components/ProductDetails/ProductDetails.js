import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';

const ProductDetails = () => {

	const { id } = useParams();
	const navigate = useNavigate();
	const { isLoading: productLoading, data: product } = useQuery('productdata', () =>
		fetch(`http://localhost:5000/readSingleToolsData/${id}`).then(res =>
			res.json()
		)
	)
	if (productLoading) {
		return <Spinner></Spinner>
	}



	return (
		<>
			<section class="section bg-gray">
				<div class="container">
					<div class="row">

						<div class="col-md-8 mx-auto">
							<div class="product-details">
								<h1 class="product-title">{product.name}</h1>
								<div class="product-meta">
									<ul class="list-inline">
										<li class="list-inline-item"><i class="fa fa-user-o"></i> By Andrew</li>
										<li class="list-inline-item"><i class="fa fa-folder-open-o"></i> Category Electronics</li>
										<li class="list-inline-item"><i class="fa fa-location-arrow"></i> Location Dhaka Bangladesh</li>
									</ul>
								</div>
								<img src={product.img} alt="" srcset="" />
								<div class="content">
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
									<div class="tab-content" id="pills-tabContent">
										<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
											<h3 class="tab-title">Product Description</h3>
											<p>{product.des}</p>
										</div>
									</div>
									<div>

									</div>
									<div class="tab-content" id="pills-tabContent">
										<h3 class="tab-title">Ratings</h3>
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
			<div class="container-xxl py-5">
				<div class="container">
					<div class="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h1 class="mb-5"><span class="text-primary text-uppercase">Place Order</span> </h1>
					</div>
					<div class="row g-4">
						<div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<iframe class="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"></iframe>
						</div>
						<div class="col-md-6">
							<div class="wow fadeInUp" data-wow-delay="0.2s">
								<form>
									<div class="row g-3">
										<div class="col-md-6">
											<div class="form-floating">
												<input type="text" class="form-control" id="name" placeholder="Your Name" />
												<label for="name">Your Name</label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-floating">
												<input type="email" class="form-control" id="email" placeholder="Your Email" />
												<label for="email">Your Email</label>
											</div>
										</div>
										<div class="col-12">
											<div class="form-floating">
												<input type="text" class="form-control" id="subject" placeholder="Phone" />
												<label for="subject">Phone</label>
											</div>
										</div>
										<div class="col-12">
											<div class="form-floating">
												<input type="text" class="form-control" id="subject" placeholder="Address" />
												<label for="subject">Address</label>
											</div>
										</div>
										<div class="col-12">
											<div class="form-floating">
												<input type="text" class="form-control" id="subject" placeholder="Quantity" />
												<label for="subject">Quantity</label>
											</div>
										</div>
										<div class="col-12">
											<div class="form-floating">
												<textarea class="form-control" placeholder="Leave a message here" id="message"></textarea>
												<label for="message">Message</label>
											</div>
										</div>
										<div class="col-12">
											<button class="btn btn-primary w-100 py-3" type="submit">Place order</button>
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