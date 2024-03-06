import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import ServiceSingleChildCare from '../../components/ServiceSingleChildCare'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServiceSingleChildCarePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/>
            <ServiceSingleChildCare/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServiceSingleChildCarePage;
