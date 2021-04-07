import React from 'react';
import banner from '../../assets/images/banner.jpg';
import mobileBanner from '../../assets/images/mobile-banner.jpg';

export default class SectionFirst extends React.Component{

    render(){
        return(
            <section className="row">
                <div className="col-12 p-0">
                    <div id="carouselHome" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active carousel-item-left">
                                <img className="w-100 d-none d-md-block" src={banner} alt="First slide"/>
                                <img className="w-100 d-block d-md-none " src={mobileBanner} alt="First slide"/>
                            </div>

                            <div className="carousel-item carousel-item-next carousel-item-left">
                                <img className="w-100 d-none d-md-block" src={banner} alt="First slide"/>
                                <img className="w-100 d-block d-md-none" src={mobileBanner} alt="First slide"/>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}