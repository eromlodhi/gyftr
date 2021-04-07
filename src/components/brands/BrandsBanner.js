import React from 'react';
import brandBanner from '../../assets/images/brand-banner.jpg';
import brandMobBanner from '../../assets/images/brand-mobile-banner.jpg';

export default class BrandsBanner extends React.Component{

    render(){
        return(
            <section className="row">
                <div className="col-12 px-0">
                    <img src={brandBanner} className="w-100 d-none d-md-block"/>
                    <img src={brandMobBanner} className="w-100 d-block d-md-none"/>
                </div>
            </section>
        );
    }
}