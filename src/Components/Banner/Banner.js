import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <section class="hero-area bg-1 text-center overly">
              
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                          
                            <div class="content-block">
                                <h1>Buy & Sell Near You </h1>
                                <p>Join the millions who buy and sell from each other  everyday in local communities around the world</p>
                                <div class="short-popular-category-list text-center">
                                    <h2>Popular Category</h2>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href=""><i class="fa fa-bed"></i> Hotel</a></li>
                                        <li class="list-inline-item">
                                            <a href=""><i class="fa fa-grav"></i> Fitness</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href=""><i class="fa fa-car"></i> Cars</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href=""><i class="fa fa-cutlery"></i> Restaurants</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href=""><i class="fa fa-coffee"></i> Cafe</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                           
                            <div class="advance-search">
                                <form action="#">
                                    <div class="row">
                                      
                                        <div class="col-lg-6 col-md-12">
                                            <div class="block d-flex">
                                                <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12">
                                            <div class="block d-flex">
                                                <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store"/>
                                                
                                                    <button class="btn btn-main">SEARCH</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;