import React from 'react';
import logo1 from '../../assets/images/logos/1.png';
import logo2 from '../../assets/images/logos/2.png';
import logo3 from '../../assets/images/logos/3.png';
import logo4 from '../../assets/images/logos/4.png';
import logo5 from '../../assets/images/logos/5.png';
import logo6 from '../../assets/images/logos/6.png';

export default class SectionThree extends React.Component{

    render(){
        return(
            <section className="row py-3 py-md-4">
                <div className="col-12 p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="h4 fw-700 text-uppercase">best selling brands</h3>
                            </div>

                            <div className="col-12 px-4">
                                <div className="row destSealingGread">
                                    <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                                        <div className="border">
                                            <figure className="m-0">
                                            <img src={logo1}/>
                                            <figcaption className="m-0 mt-3 p-3 border-top">
                                                <div className="offDiv">Upto 5% off</div>
                                                <div><a href="brand.html" className="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                                            </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                                        <div className="border">
                                            <figure className="m-0">
                                            <img src={logo2}/>
                                            <figcaption className="m-0 mt-3 p-3 border-top">
                                                <div className="offDiv">Upto 5% off</div>
                                                <div><a href="brand.html" className="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                                            </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                                        <div className="border">
                                            <figure className="m-0">
                                            <img src={logo3}/>
                                            <figcaption className="m-0 mt-3 p-3 border-top">
                                                <div className="offDiv">Upto 5% off</div>
                                                <div><a href="brand.html" className="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                                            </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                                        <div className="border">
                                            <figure className="m-0">
                                            <img src={logo4}/>
                                            <figcaption className="m-0 mt-3 p-3 border-top">
                                                <div className="offDiv">Upto 5% off</div>
                                                <div><a href="brand.html" className="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                                            </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                                        <div className="border">
                                            <figure className="m-0">
                                            <img src={logo5}/>
                                            <figcaption className="m-0 mt-3 p-3 border-top">
                                                <div className="offDiv">Upto 5% off</div>
                                                <div><a href="brand.html" className="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                                            </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                                        <div className="border">
                                            <figure className="m-0">
                                            <img src={logo6}/>
                                            <figcaption className="m-0 mt-3 p-3 border-top">
                                                <div className="offDiv">Upto 5% off</div>
                                                <div><a href="brand.html" className="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                                            </figcaption>
                                            </figure>
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