import React from 'react';
import trandingBrand1 from '../../assets/images/tranding-brand/1.jpg';
import trandingBrand2 from '../../assets/images/tranding-brand/2.jpg';
import trandingBrand3 from '../../assets/images/tranding-brand/3.jpg';
import trandingBrand4 from '../../assets/images/tranding-brand/4.jpg';
import trandingBrand5 from '../../assets/images/tranding-brand/5.jpg';
import trandingBrand6 from '../../assets/images/tranding-brand/6.jpg';
import trandingBrand7 from '../../assets/images/tranding-brand/7.jpg';
import trandingBrandPNG1 from '../../assets/images/tranding-brand/1.png';
import trandingBrandPNG2 from '../../assets/images/tranding-brand/2.png';
import trandingBrandPNG3 from '../../assets/images/tranding-brand/3.png';
import trandingBrandPNG4 from '../../assets/images/tranding-brand/4.png';
import trandingBrandPNG5 from '../../assets/images/tranding-brand/5.png';
import trandingBrandPNG6 from '../../assets/images/tranding-brand/6.png';

export default class SectionSix extends React.Component{

    render(){
        return(
            <section className="row TrendingBrands py-3 py-md-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-22 text-uppercase fw-700 text-muted"><span>Trending Brands</span></h3>
                        </div>
                    
                        <div className="col-12">
                            <div className="TrendingBrands-owl-carousel owl-carousel">
                                <div className="item">
                                    <div className="productList border rounded p-0">
                                        <img src={trandingBrand1} alt="product image" className="w-100 rounded"/>
                                        <div className="pr-det text-center">
                                            <div className="logoBox"><img src={trandingBrandPNG1}/></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="productList border rounded p-0">
                                        <img src={trandingBrand2} alt="product image" className="w-100 rounded"/>
                                        <div className="pr-det text-center">
                                            <div className="logoBox"><img src={trandingBrandPNG2}/></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="productList border rounded p-0">
                                        <img src={trandingBrand3} alt="product image" className="w-100 rounded"/>
                                        <div className="pr-det text-center">
                                            <div className="logoBox"><img src={trandingBrandPNG3}/></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="productList border rounded p-0">
                                        <img src={trandingBrand4} alt="product image" className="w-100 rounded"/>
                                        <div className="pr-det text-center">
                                            <div className="logoBox"><img src={trandingBrandPNG5}/></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="productList border rounded p-0">
                                        <img src={trandingBrand5} alt="product image" className="w-100 rounded"/>
                                        <div className="pr-det text-center">
                                            <div className="logoBox"><img src={trandingBrandPNG4}/></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="productList border rounded p-0">
                                        <img src={trandingBrand6} alt="product image" className="w-100 rounded"/>
                                        <div className="pr-det text-center">
                                            <div className="logoBox"><img src={trandingBrandPNG6}/></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="productList border rounded p-0">
                                        <img src={trandingBrand7} alt="product image" className="w-100 rounded"/>
                                        <div className="pr-det text-center">
                                            <div className="logoBox"><img src={trandingBrandPNG1}/></div>
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