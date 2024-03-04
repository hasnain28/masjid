import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const EventSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


     const eventList = [
         {
           eventImg:props.eventImg1,
           date:"2",
           month:"June",
           title:"Annual Milad Conference",
           time:"9.00 - 2.00",
           location:"Darbar Mohra Sharif Rawalpindi",
           des:"Spirtual Event",
           btn:"Learn More...",
           link:"/event-single",
         },
         {
           eventImg:props.eventImg2,
           date:"2",
           month:"NOV",
           title:"Annual Urs",
           time:"9.00 - 2.00",
           location:"Darbar Mohra Sharif Rawalpindi",
           des:"Spirtual Event",
           btn:"Learn More...",
           link:"/event-single",
         },
     ]

    return(
        <div className={`wpo-event-area section-padding  ${props.EventClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Events</span>
                            <h2>Our Upcomming event</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {eventList.map( (item, en) => (
                        <div className="col-lg-6 col-sm-12 col-12 custom-grid" key={en}>
                            <div className="wpo-event-item">
                                <div className="wpo-event-img">
                                    <img src={item.eventImg} alt="" />
                                    <div className="thumb-text">
                                        <span>{item.date}</span>
                                        <span>{item.month}</span>
                                    </div>
                                </div>
                                <div className="wpo-event-text">
                                    <h2>{item.title}</h2>
                                    <ul>
                                        <li><i className="fa fa-clock-o" aria-hidden="true"></i>{item.time}</li>
                                        <li><i className="fa fa-map-marker"></i>{item.location}</li>
                                    </ul>
                                    <p>{item.des}</p>
                                    <Link onClick={ClickHandler} to={item.link}>{item.btn}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventSection;