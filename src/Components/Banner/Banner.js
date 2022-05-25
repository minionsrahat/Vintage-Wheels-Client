import React from 'react';
import './Banner.css'
import {BiBed} from 'react-icons/bi'
import {FaGrav} from 'react-icons/fa'
import {FaCarSide} from 'react-icons/fa'
import {MdFastfood} from 'react-icons/md'
import { Link } from 'react-router-dom';
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
                                    <h2>Our Other Popular Business</h2>
                                    <ul class="list-inline text-white">
                                        <li class="list-inline-item">
                                            <Link to="/"><BiBed></BiBed>Hotel</Link></li>
                                        <li class="list-inline-item">
                                            <Link to="/"><FaGrav></FaGrav> Fitness</Link>
                                        </li>
                                        <li class="list-inline-item">
                                            <Link to="/"><FaCarSide></FaCarSide> Cars</Link>
                                        </li>
                                        <li class="list-inline-item">
                                            <Link to="/"><MdFastfood></MdFastfood> Restaurants</Link>
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
                                                
                                                    <button class="btn btn-main ms-2">SEARCH</button>
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