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
                                <img class="img-fluid w-75 align-self-end" src={imgage} alt="" />
                                <div class="w-50  p-5" style={{ marginTop: '-25%' }}>
                                    <h1 class="text-uppercase text-primary mb-3">2 Years</h1>
                                    <h2 class="text-uppercase mb-0">Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p class="d-inline-block bg-secondary text-white py-1 px-4">About Me</p>
                            <h1 class="text-uppercase mb-4">Rahat Uddin Azad</h1>
                            <h4>Full Stack Web Developer</h4>
                            <p>Strong experience in software development and has excellent interpersonal and analytical skills
                                looking to secure a position as a Software engineer in a fast-paced organization where I can use
                                my skills to the company's advantage while having the scope to develop my own skills. I wish to
                                work with a diverse team that works towards contributing to the company’s vision and goals.</p>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Education</h3>
                                    <p class="mb-0">Bsc in Software Engineering</p>
                                    <p class="mb-0">Noakhali Sciene and Technology University</p>
                                    <hr />
                                    <p class="mb-0">Higher Secondary Certificate </p>
                                    <p class="mb-0">CUET School and Collage</p>
                                    <h3 class="text-uppercase my-3">Contact</h3>
                                    <p class="mb-0"><strong>Email:</strong> rahatuddin786gmail.com</p>
                                    <p class="mb-0"><strong>Phone:</strong> 01878517664</p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Familiar Technology</h3>
                                    <p class="mb-0"><strong>Expertise :-</strong> C++, Java, JavaScript, HTML5, CSS3, Bootstrap, Tailwind, ReactJS,
                                        NodeJS, Mysql, MongoDB, JWT-Auth, Material UI</p>
                                        <hr />
                                    <p class="mb-0"><strong>Comfortable :-</strong> ES6 , ExpressJS , REST API, ,Python, PHP, Selenium, Web Scraping</p>
                                    <hr />
                                    <p class="mb-0"><strong>Familiar :-</strong>  Payment Getaways, Socket.io, Redux, Context API, Browser APIs.</p>
                                    <hr />
                                    <p class="mb-0"><strong>Tools :-</strong> Git, Github, Gitlab, VS Code , Atom, Chrome Dev Tool, Firebase, Heroku,
                                        Figma, Adobe XD, Office 365, Latex</p>

                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 1: Cars R Us</h3>
                                    <p class="mb-0"><a href="https://cars-r-us-afd67.web.app/"target='_blank' className='me-1'>Live Site </a> <a target='_blank' href="https://github.com/minionsrahat/Full-Stack-CarsRus-ClientSide" className='me-1'>Code Link </a></p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 2: Good Doctor</h3>
                                    <p class="mb-0"><a href="https://good-doctor-1080a.web.app/" target='_blank' className='me-1'>Live Site </a> <a target='_blank' href="https://github.com/minionsrahat/Good-Doctor-Website-React-Auth" className='me-1'>Code Link </a></p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 3: Makeup Maven</h3>
                                    <p class="mb-0"><a href="https://cool-makeup-maven.netlify.app/" target='_blank' className='me-1'>Live Site </a> <a target='_blank' href="https://github.com/minionsrahat/makeup-maven-with-react-router" className='me-1'>Code Link </a></p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-uppercase mb-3">Project 4: Gadget Beam</h3>
                                    <p class="mb-0"><a href="https://gadget-beam.netlify.app/" target='_blank' className='me-1'>Live Site </a> <a target='_blank' href="https://github.com/minionsrahat/Gadget-Beam" className='me-1'>Code Link </a></p>
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