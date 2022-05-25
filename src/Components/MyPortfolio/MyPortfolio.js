import React from 'react';
import './MyPortfolio.css'
import imgage from '../images/rahat-removebg.png'
const MyPortfolio = () => {
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div class="d-flex flex-column">
                                <img class="img-fluid w-75 align-self-end" src={imgage} alt=""/>
                                    <div class="w-50  p-5"  style={{marginTop:'-25%'}}>
                                        <h1 class="text-uppercase text-primary mb-3">2 Years</h1>
                                        <h2 class="text-uppercase mb-0">Experience</h2>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p class="d-inline-block bg-secondary text-primary py-1 px-4">About Us</p>
                            <h1 class="text-uppercase mb-4">More Than Just A Haircut. Learn More About Us!</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Education</h3>
                                    <p class="mb-0">Bsc in Software Engineering</p>
                                    <p class="mb-0">Noakhali Sciene and Technology University</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Familiar Technology</h3>
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 1: Cars R Us</h3>
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 2: Good Doctor</h3>
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 3: Makeup Maven</h3>
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 4: Good Doctor</h3>
                                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPortfolio;