import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                     
                        <div class="col-lg-2 offset-lg-1 col-md-3">
                            <div class="block">
                                <h4>Site Pages</h4>
                                <ul>
                                    <li><a href="#">Boston</a></li>
                                    <li><a href="#">How It works</a></li>
                                    <li><a href="#">Deals & Coupons</a></li>
                                    <li><a href="#">Articls & Tips</a></li>
                                    <li><a href="#">Terms of Services</a></li>
                                </ul>
                            </div>
                        </div>
                    
                        <div class="col-lg-2 col-md-3 offset-md-1 offset-lg-0">
                            <div class="block">
                                <h4>Admin Pages</h4>
                                <ul>
                                    <li><a href="#">Boston</a></li>
                                    <li><a href="#">How It works</a></li>
                                    <li><a href="#">Deals & Coupons</a></li>
                                    <li><a href="#">Articls & Tips</a></li>
                                    <li><a href="#">Terms of Services</a></li>
                                </ul>
                            </div>
                        </div>
                     
                        <div class="col-lg-4 col-md-7">
                          
                            <div class="block-2 app-promotion">
                                <a href="">
                                 
                                    <img src="images/footer/phone-icon.png" alt="mobile-icon" />
                                </a>
                                <p>Get the Dealsy Mobile App and Save more</p>
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
                                <p>Copyright © 2016. All Rights Reserved</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-12">
                            <ul class="social-media-icons text-right">
                                <li><a class="fa fa-facebook" href=""></a></li>
                                <li><a class="fa fa-twitter" href=""></a></li>
                                <li><a class="fa fa-pinterest-p" href=""></a></li>
                                <li><a class="fa fa-vimeo" href=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              
                <div class="top-to">
                    <a id="top" class="" href=""><i class="fa fa-angle-up"></i></a>
                </div>
            </footer>
        </>
    );
};

export default Footer;