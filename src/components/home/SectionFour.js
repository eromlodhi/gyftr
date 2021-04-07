import React from 'react';
import product1 from '../../assets/images/1.jpg';
import product2 from '../../assets/images/2.jpg';
import product3 from '../../assets/images/3.jpg';
import product4 from '../../assets/images/4.jpg';
import logo7 from '../../assets/images/logos/7.png';
import logo8 from '../../assets/images/logos/8.png';
import logo9 from '../../assets/images/logos/9.png';
import logo10 from '../../assets/images/logos/10.png';

export default class SectionFour extends React.Component{

    render(){
        return(
            <section className="row py-3 py-md-4">
                <div className="col-12 p-0">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-12">
                                <h3 className="h4 fw-700 text-uppercase">TRENDING CATEGORY</h3>
                            </div>

                            <div className="col-12 px-4">
                                <div className="row">
                                    <div className="col-6 col-md-3 p-2">
                                        <div className="productList border rounded-top">
                                            <img src={product1} alt="product image" className="w-100 rounded-top"/>
                                            <div className="pr-det text-center">
                                                <div className="logoBox"><img src={logo7}/></div>
                                                <div className="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                                                <a href="#" className="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-3 p-2">
                                        <div className="productList border rounded-top">
                                            <img src={product2} alt="product image" className="w-100 rounded-top"/>
                                            <div className="pr-det text-center">
                                                <div className="logoBox"><img src={logo8}/></div>
                                                <div className="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                                                <a href="#" className="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-3 p-2">
                                        <div className="productList border rounded-top">
                                            <img src={product3} alt="product image" className="w-100 rounded-top"/>
                                            <div className="pr-det text-center">
                                                <div className="logoBox"><img src={logo9}/></div>
                                                <div className="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                                                <a href="#" className="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-3 p-2">
                                        <div className="productList border rounded-top">
                                            <img src={product4} alt="product image" className="w-100 rounded-top"/>
                                            <div className="pr-det text-center">
                                                <div className="logoBox"><img src={logo10}/></div>
                                                <div className="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                                                <a href="#" className="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                                            </div>
                                        </div>
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