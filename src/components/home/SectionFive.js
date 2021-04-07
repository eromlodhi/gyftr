import React from 'react';
import logo11 from '../../assets/images/logos/1.png';
import logo1 from '../../assets/images/logos/1.png';
import logo2 from '../../assets/images/logos/2.png';
import logo3 from '../../assets/images/logos/3.png';
import logo4 from '../../assets/images/logos/4.png';
import logo5 from '../../assets/images/logos/5.png';
import logo6 from '../../assets/images/logos/6.png';
import logo7 from '../../assets/images/logos/7.png';
import logo8 from '../../assets/images/logos/8.png';
import logo9 from '../../assets/images/logos/9.png';
import logo10 from '../../assets/images/logos/10.png';

export default class SectionFive extends React.Component{

    render(){
        return(
            <section className="row DiscountsOffersRecent">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 py-3 py-md-4">
                            <h3 className="fs-16 fw-400 border-bottom pb-2 text-uppercase">Best Discounts</h3>
                            <div className="Discounts-owl-carousel owl-carousel">
                            <div className="item"><div className="border"><img src={logo11}/></div></div>
                            <div className="item"><div className="border"><img src={logo2}/></div></div>
                            <div className="item"><div className="border"><img src={logo3}/></div></div>
                            <div className="item"><div className="border"><img src={logo4}/></div></div>
                            <div className="item"><div className="border"><img src={logo5}/></div></div>
                            <div className="item"><div className="border"><img src={logo6}/></div></div>
                            <div className="item"><div className="border"><img src={logo7}/></div></div>
                            <div className="item"><div className="border"><img src={logo8}/></div></div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 py-3 py-md-4">
                            <h3 className="fs-16 fw-400 border-bottom pb-2 text-uppercase">Best Offers</h3>
                            <div className="Offers-owl-carousel owl-carousel">
                            <div className="item"><div className="border"><img src={logo9}/></div></div>
                            <div className="item"><div className="border"><img src={logo10}/></div></div>
                            <div className="item"><div className="border"><img src={logo1}/></div></div>
                            <div className="item"><div className="border"><img src={logo2}/></div></div>
                            <div className="item"><div className="border"><img src={logo3}/></div></div>
                            <div className="item"><div className="border"><img src={logo4}/></div></div>
                            <div className="item"><div className="border"><img src={logo5}/></div></div>
                            <div className="item"><div className="border"><img src={logo6}/></div></div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 py-3 py-md-4">
                            <h3 className="fs-16 fw-400 border-bottom pb-2 text-uppercase">YOUR FAVOURITE</h3>
                            <div className="Recent-owl-carousel owl-carousel">
                            <div className="item"><div className="border"><img src={logo7}/></div></div>
                            <div className="item"><div className="border"><img src={logo8}/></div></div>
                            <div className="item"><div className="border"><img src={logo9}/></div></div>
                            <div className="item"><div className="border"><img src={logo10}/></div></div>
                            <div className="item"><div className="border"><img src={logo1}/></div></div>
                            <div className="item"><div className="border"><img src={logo2}/></div></div>
                            <div className="item"><div className="border"><img src={logo3}/></div></div>
                            <div className="item"><div className="border"><img src={logo4}/></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}