import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.png'
import Newsletter from '../Newsletter'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <div className={`wpo-ne-footer ${props.footerClass}`}>
        <Newsletter/>
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="" />
                                </div>
                                <p>You can also follow us on social media through below links </p>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i className="ti-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Service</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/service-single">Quran courses</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single">Our Causes</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service">Our Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/event">Our Event</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/event">Events</Link></li>
                                    {/* <li><Link onClick={ClickHandler} to="/about">Prayer Times</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 offset-lg-1 col-md-6 col-12">
                            <div className="widget market-widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <p>Contact us for further details</p>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi ti-location-pin"></i>Mohra Sharif Rawalpindi</li>
                                        <li><i className="fi flaticon-call"></i>+923005264409</li>
                                        <li><i className="fi flaticon-envelope"></i>mohrasharifrawalpindi@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">&copy; 2024 MohraSharifRawalpindi. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
} 

export default Footer;