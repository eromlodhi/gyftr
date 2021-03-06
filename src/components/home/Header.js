import React from 'react';
import call from '../../assets/images/call.png';
import logo from '../../assets/images/logo.png';

export default class Header extends React.Component{

    render(){
    
        return(
            <header className="row border-bottom">
                
                <div className="col-12 px-0 top-gry">
                    <div className="container">
                        <div className="row">
                            <div className="text-right col-12">
                                <ul className="list-inline top-links">
                                <li className="list-inline-item"><a href="#" data-toggle="modal" data-target="#login">Login/Register</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 px-0 bg-white py-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-5 col-md-4">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <div className="hamburger-icon" id="desktop-hamburger">
                                            <div className="top"></div>
                                            <div className="middle"></div>
                                            <div className="bottom"></div>
                                        </div>
                                    </li>
                                
                                    <li className="list-inline-item call nowrap">
                                        <span><a href="tel:18001033314"><img src={call} alt="logo"/></a></span>
                                        <span className="pl-l fw-700 d-none d-md-inline-block">1800-103-3314</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4 d-none d-md-block">
                                <div className="classSearch">
                                    <input type="text" name="" className="form-control" placeholder="Search by Brand / Product"/>
                                </div>
                            </div>
                            
                            <div className="col-7 col-md-4 text-right center-logo">
                                <a href="index.html"><img src={logo} className="img-fluid"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}