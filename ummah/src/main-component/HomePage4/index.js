import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import About from '../../components/about'
import Course from '../../components/Course'
import Pilars from '../../components/Pilars'
import EventSection from '../../components/event'
import Support2 from '../../components/Support2'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import abimg from '../../images/about2.png'
import evn1 from '../../images/event/img-1.jpg'
import evn2 from '../../images/event/img-2.jpg'
import blog1 from '../../images/blog/img-1.jpg'
import blog2 from '../../images/blog/img-2.jpg'
import blog3 from '../../images/blog/img-3.jpg'
import hero1 from '../../images/slider/img-4.png'

const HomePage4 =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero HeroStyleClass={'hero-style-4'} heroImg={hero1}/>
            <About aboutImg={abimg}/>
            <Course/>
            <Pilars/>
            <EventSection eventImg1={evn1} eventImg2={evn2}/>
            <Support2/>
            <BlogSection blogImg1={blog1} blogImg2={blog2} blogImg3={blog3}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage4;