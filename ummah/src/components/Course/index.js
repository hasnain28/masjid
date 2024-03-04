import React from 'react'
import icon1 from '../../images/course/icon1.png'
import icon2 from '../../images/course/icon2.png'
import icon3 from '../../images/course/icon3.png'
import icon4 from '../../images/course/icon4.png'
import icon5 from '../../images/course/icon5.png'
import icon6 from '../../images/course/icon6.png'

import './style.css'

const Course = (props) => {

    const courses = [
        {
          cIcon:icon1,
          heading:"Quran Memorization",
          pra:"This course intends to help the students memorize Holy Quran. Classes are being conducted on daily basis at Darbar Mohra Sharif Rawalpindi.",
        },
        {
          cIcon:icon2,
          heading:"Junior Preschool",
          pra:"Balancing Islamic and traditional education is crucial, so along with islamic education children are also taught traditional education as well.",
        },
        {
          cIcon:icon3,
          heading:"Junior High School",
          pra:"Intelligent students are sponsered for High school education as well",
        },
        {
          cIcon:icon4,
          heading:"Stitching Course",
          pra:"Stitching courses are taught at Mohra Sharif to skillfully train young girls in the art of sewing so they can contribute to the income of there families in a respectable way",
        },
        {
          cIcon:icon5,
          heading:"Language Courses",
          pra:"Different language courses are also taught like English Arabic etc.",
        },
        {
          cIcon:icon6,
          heading:"Learning Technologies",
          pra:"Different type of computer courses and other technology related courses are also taught",
        },
    ]
    return(
        <div className="courses-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Top Courses</span>
                            <h2>Our Populer Courses</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {courses.map((cource, i) => (
                        <div className="col-lg-4 col-md-6 custom-grid col-12" key={i}>
                            <div className="courses-item">
                                <div className="course-icon">
                                    <span><img src={cource.cIcon} alt="" /></span>
                                </div>
                                <div className="course-text">
                                    <h2>{cource.heading}</h2>
                                    <p>{cource.pra}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Course;