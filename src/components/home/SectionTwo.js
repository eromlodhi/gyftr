import React from 'react';
import deals from '../../assets/images/deals.jpg';
import offers1 from '../../assets/images/offers-1.jpg';
import offers2 from '../../assets/images/offers-2.jpg';
import discount from '../../assets/images/discount.jpg';

export default class SectionTwo extends React.Component{

    render(){
        return(
            <section className="row py-2">
                <div className="col-12 p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 p-3 pr-md-0">
                                <div className="p-3 shadow-sm border rounded">
                                    <div>
                                        <h3 className="h4 fw-700 text-uppercase m-0">Deal of the day</h3>
                                        <p className="fs-12 mb-2">Amazing Deals from choicest brands!</p>
                                    </div>
                                    
                                    <div className="shadow-sm mb-3">
                                        <a href="#">
                                            <img src={deals} alt="deals" className="w-100"/>
                                        </a>
                                    </div>
                                    
                                    <div className="text-right">
                                        <a href="#" className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 p-3">
                                <div className="p-3 shadow-sm border rounded">
                                    <div>
                                        <h3 className="h4 fw-700 text-uppercase m-0">Offers</h3>
                                        <p className="fs-14 mb-2">Top discounts & deals on leading brands!</p>
                                    </div>
                                    
                                    <div className="shadow-sm mb-3">
                                        <a href="#">
                                            <img src={offers1} alt="offers-1" className="w-100"/>
                                        </a>
                                    </div>
                                    
                                    <div className="shadow-sm mb-3">
                                        <a href="#">
                                            <img src={offers2} alt="offers-1" className="w-100"/>
                                        </a>
                                    </div>
                            
                                    <div className="text-right">
                                        <a href="#" className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-3 p-3 pl-md-0">
                                <div className="p-3 shadow-sm border rounded">
                                    <div>
                                        <h3 className="h4 fw-700 text-uppercase m-0">discounts</h3>
                                        <p className="fs-12 mb-2">Buy fast moving brands just for you</p>
                                    </div>
                                   
                                    <div className="shadow-sm mb-3">
                                        <a href="#">
                                            <img src={discount} alt="dicount" className="w-100"/>
                                        </a>
                                    </div>
                                    
                                    <div className="text-right">
                                        <a href="#" className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">View More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}