import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const AboutUs = () => {
    return (
        <>
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-7">
                            <div class="section-title mb-4">
                                <h5
                                    class="position-relative d-inline-block text-primary text-uppercase"
                                >
                                    About Us
                                </h5>
                                <h1 class="display-5 mb-0">
                                    The World's Best Dental Clinic That You Can Trust
                                </h1>
                            </div>
                            <h4 class="text-body fst-italic mb-4">
                                Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem
                                sit clita duo justo magna dolore
                            </h4>
                            <p class="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
                                sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                                et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                                tempor eirmod magna dolore erat amet
                            </p>
                            <div class="row g-3">
                                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <h5 class="mb-3">
                                        <AiFillCheckCircle className='text-primary me-3'></AiFillCheckCircle>
                                        Award
                                        Winning
                                    </h5>
                                    <h5 class="mb-3">
                                        <AiFillCheckCircle className='text-primary me-3'></AiFillCheckCircle>
                                        Professional Staff
                                    </h5>
                                </div>
                                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <h5 class="mb-3">
                                        <AiFillCheckCircle className='text-primary me-3'></AiFillCheckCircle>
                                        24/7
                                        Opened
                                    </h5>
                                    <h5 class="mb-3">
                                        <AiFillCheckCircle className='text-primary me-3'></AiFillCheckCircle>
                                        Fair
                                        Prices
                                    </h5>
                                </div>
                            </div>
                            <a
                                href="appointment.html"
                                class="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                                data-wow-delay="0.6s"
                            >Make Appointment</a
                            >
                        </div>
                        <div class="col-lg-5">
                            <div class="position-relative h-100">
                                <img
                                    class="position-absolute w-100 h-100 rounded wow zoomIn"
                                    data-wow-delay="0.9s"
                                    src="https://www.ajot.com/images/uploads/article/622-parts-stock.jpg"
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;