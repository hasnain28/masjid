import React from 'react'
import {Link} from 'react-router-dom'
import tmr1 from '../../images/prayer-shape/2.png'
import tmr2 from '../../images/prayer-shape/1.png'
import tmr3 from '../../images/prayer-shape/3.png'
import VideoModal from '../ModalVideo'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-img-3">
                                <img src={props.aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 colsm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>About Us</span>
                                    <h2>Brief history of Mohra Sharif</h2>
                                </div>
                                <p>Mohra Sharif is a spiritual center and home of the Sufi order Naqshbandi. Hazrat baba Qasim is the founder of this Sufi center. Darbar Mohra Sharif is 200 years old Sufi institute with a clear vision of spreading true teachings of Islam which primarily focuses on love and respect of Allah (SWT), Rasool (SAW), and Panjtan-Pak.
Helping the needy, orphans, sick, educating people, and serving humanity are the core values of Mohra Sharif Sufis.</p>
                                <div className="btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn" tabIndex="0">Discover More</Link>
                                    <ul>
                                        <li className="video-holder">
                                            <VideoModal/>
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timer-section">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="timer-text">
                                <h2>Prayer Times</h2>
                                <p>Prayer times in Rawalpindi Pakistan</p>
                                <span>Mon 15 Jan, 2021</span>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="timer-num">
                                <ul>
                                    <li>Fajr<span>05:47</span></li>
                                    <li>Sunrize<span>07:05</span></li>
                                    <li>Dhuhr<span>12:34</span></li>
                                    <li>Asr<span>15:35</span></li>
                                    <li>Maghrib<span>17:58</span></li>
                                    <li>Isha'a<span>19:15</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="timer-shape1">
                        <img src={tmr1} alt="" />
                    </div>
                    <div className="timer-shape2">
                        <img src={tmr2} alt="" />
                    </div>
                    <div className="timer-shape3">
                        <img src={tmr3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;