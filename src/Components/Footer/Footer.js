import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer class="footer section section-sm">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-7 offset-md-1 offset-lg-0">
                        
                            <div class="block about">
                                
                                <img src="images/logo-footer.png" alt="" />
                             
                                <p class="alt-color">
                                We sets the standards and trends in the highly dynamic automotive aftermarket parts industry, always staying a step ahead of the competition. Using the latest cutting-edge technologies, impeccable design processes and precision, We proudly supplies products adhering to the highest standards, ensuring both quality and safety.
                                </p>
                            </div>
                        </div>
                     
                        <div class="col-lg-2 offset-lg-1 col-md-3">
                            <div class="block">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/'>How it works</Link></li>
                                    <li><Link to='/'>Deals & Coupons</Link></li>
                                    <li><Link to='/'>News & Tips</Link></li>
                                    <li><Link to='/'>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    
                        <div class="col-lg-2 col-md-3 offset-md-1 offset-lg-0">
                            <div class="block">
                                <h4>Popular Links</h4>
                                <ul>
                                <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/'>How it works</Link></li>
                                    <li><Link to='/'>Deals & Coupons</Link></li>
                                    <li><Link to='/'>News & Tips</Link></li>
                                    <li><Link to='/'>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                     
                        <div class="col-lg-4 col-md-7">
                          
                            <div class="block-2 app-promotion">
                               
                                <p>Vintage Wheels</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
          
            <footer class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <div class="copyright">
                                <p>Copyright ©minionsrahat 2022. All Rights Reserved</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-12">
                            <ul class="social-media-icons text-right ">
                                <li><FaFacebookF className='text-white me-2'></FaFacebookF></li>
                                <li><FaInstagramSquare className='text-white me-2'></FaInstagramSquare></li>
                                <li><FaLinkedin className='text-white me-2'></FaLinkedin></li>
                                <li><FaPhone className='text-white me-2'></FaPhone></li>
                                <li><FaTwitter className='text-white me-2'></FaTwitter></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
              
             
            </footer>
        </>
    );
};

export default Footer;