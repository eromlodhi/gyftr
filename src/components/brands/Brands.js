import React from 'react';

import BrandsHeader from './BrandHeader';
import NavMenu from '../common/NavMenu';
import Footer from '../common/Footer';
import SideMenu from '../common/SideMenu';
import BrandsBanner from './BrandsBanner';
import BrandsSectionFirst from './BrandsSectionFirst';
import BrandsSectionTwo from './BrandsSectionTwo';
import BrandsSectionThree from './BrandsSectionThree';
import SectionSix from '../common/SectionSix';

export default class Brands extends React.Component{

    render(){
        return(
            <React.Fragment>
                <SideMenu/>
                <div className="off-canvas-main">
                    <div className="container-fluid">
                        <BrandsHeader/>
                        <NavMenu/>
                        <BrandsBanner/>
                        <BrandsSectionFirst/>
                        <BrandsSectionTwo/>
                        <BrandsSectionThree/>
                        <SectionSix/>
                        <Footer/>  
                    </div>
                </div>
            </React.Fragment>
        );
    }
}