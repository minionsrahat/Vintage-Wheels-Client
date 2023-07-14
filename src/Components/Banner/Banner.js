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
            <section className="hero-area bg-1 text-center overly">
              
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                          
                            <div className="content-block">
                                <h1>Buy & Sell Near You </h1>
                                <p>Join the millions who buy from us  everyday from around the world</p>
                                <div className="short-popular-category-list text-center">
                                    <h2>Our Other Popular Business</h2>
                                    <ul className="list-inline text-white">
                                        <li className="list-inline-item">
                                            <Link to="/"><BiBed></BiBed>Hotel</Link></li>
                                        <li className="list-inline-item">
                                            <Link to="/"><FaGrav></FaGrav> Fitness</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><FaCarSide></FaCarSide> Cars</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><MdFastfood></MdFastfood> Restaurants</Link>
                                        </li>
                                      
                                    </ul>
                                </div>

                            </div>
                           
                            <div className="advance-search">
                           
                                    <div className="row">
                                      
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block d-flex">
                                                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block d-flex">
                                                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store"/>
                                                
                                                    <button className="btn btn-main ms-2">SEARCH</button>
                                            </div>
                                        </div>
                                    </div>
                               

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;