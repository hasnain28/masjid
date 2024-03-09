import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../../images/service-details.jpg'
import service2 from '../../images/service-detail2.jpg'
import './style.css'

const ServiceSingle = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
      


    return(
        <section className="service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-12">
                        <div className="service-single-content">
                            <div className="service-single-img">
                                <img src={service1} alt=""/>
                            </div>
                            <h2>Quran Memorization</h2>
                            <p> Al-Farooq Islamic and Moden Studies were established in 2007 to provide every child happy and prosperous life by giving them religious knowledge and scientific knowledge which is very important for Muslims to progress in this world and hereafter.
“A Believer thirst for knowledge is never quenched,
he continues to hear and learn until he enters paradise.”
 ~Tirmidhi
From here more than 3000 students have learned Hifz Quran and differents Islamic Courses including ( Hifz, Tafseer, Fiqh, Qiraat, Aqaaid courses) currently we have 7 Islamic centers which are supported by Darbar Mohra Sharif in Rawalpindi district, where more than 450 students are studying.  
Currently, at Darbar Sharif Islamic center/Madrassa around 95 students are studying out of which 30    students are living with all the basic facilities. </p>
                            <div className="service-single-tb">
                                <div className="service-single-inner">
                                    <span><img src={service2} alt=""/></span>
                                    <div className="service-single-tb-text">
                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-single-tb-content">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                            </div>
                        </div>
                        <div className="prv-nx">
                            <div className="pre-btn"><Link onClick={ClickHandler} to="/service-single">Previous</Link></div>
                            <div className="nex-btn"><Link onClick={ClickHandler} to="/service-single">Next</Link></div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-12 col-12">
                        <div className="service-sidebar">
                            <div className="widget service-list-widget">
                                <h3>All Services</h3>
                                <ul>
                                    <li className="current"><Link to="/service-single">Quran Memorization</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single">Clean Water Bores</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single">Mosque Development</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single">Feeding the needy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single">Child Sponsers</Link></li>
                                </ul>
                            </div>
                            <div className="widget contact-widget">
                                <div>
                                    <h4>Request a Call Back</h4>
                                    <h2>(523) 456-789</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSingle;