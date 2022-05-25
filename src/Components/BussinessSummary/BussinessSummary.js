import React from 'react';
import { FcServices } from 'react-icons/fc';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineFlag } from 'react-icons/ai';

const BussinessSummary = () => {
    return (
        <>
            <div class="my-5 py-5">
                <div class="container mt-5">
                    <div class="row g-5 align-items-center m-0">
                        <div class="col-lg-6">
                            <h1 class="mb-4">Welcome to <span class="text-primary text-uppercase">Vintage Wheels</span></h1>
                            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div class="row g-3 pb-4">
                                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="border rounded p-1">
                                        <div class="border rounded text-center p-4">
                                            <FcServices className='fa-2x text-primary mb-2'></FcServices>
                                            <h2 class="mb-1 " data-toggle="counter-up">8+</h2>
                                            <p class="mb-0">Services</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="border rounded p-1">
                                        <div class="border rounded text-center p-4">
                                        <AiOutlineUsergroupAdd className='fa-2x text-primary mb-2'></AiOutlineUsergroupAdd>
                                            <h2 class="mb-1" data-toggle="counter-up">600k+</h2>
                                            <p class="mb-0">Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div class="border rounded p-1">
                                        <div class="border rounded text-center p-4">
                                        <AiOutlineFlag className='fa-2x text-primary mb-2'></AiOutlineFlag>
                                            <h2 class="mb-1" data-toggle="counter-up">70+</h2>
                                            <p class="mb-0">Countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="btn btn-primary py-3 px-5 mt-2" href="/">Explore More</a>
                        </div>
                        <div class="col-lg-6">
                            <div class="row g-3">
                                <div class="col-6 text-end">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" alt='' src="https://media.mehrnews.com/d/2019/07/21/4/3185382.jpg" 
                                    style={{
                                        marginTop: '25%'
                                    }} />
                                </div>
                                <div class="col-6 text-start">
                                    <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" alt=''  src="https://media.istockphoto.com/photos/car-production-line-picture-id538617741?k=20&m=538617741&s=612x612&w=0&h=jhZS_t10oNkaYTc_S-tnNH-4Y5rR4ujk67S8Y-ed9po=" />
                                </div>
                                <div class="col-6 text-end">
                                    <img class="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" alt=''  src="https://www.spendedge.com/wp-content/uploads/sites/6/2018/02/auto-parts-1.png" />
                                </div>
                                <div class="col-6 text-start">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" alt=''  src="https://charlotteregion.com/clientuploads/directory/component_flexible_content/auto_4.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BussinessSummary;