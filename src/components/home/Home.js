import React, {Fragment} from 'react';
import '../../assets/css/footer-style.css';
import '../../assets/css/owl.carousel.min.css';
import '../../assets/css/styles.css';
import '../../assets/js/custom';
import Header from '../home/Header';
import NavMenu from '../common/NavMenu';
import SectionFirst from '../home/SectionFirst';
import SectionTwo from '../home/SectionTwo';
import SectionThree from '../home/SectionThree';
import SectionFour from '../home/SectionFour';
import SectionFive from '../home/SectionFive';
import SectionSix from '../common/SectionSix';
import Footer from '../common/Footer';
import Login from '../home/Login';
import Password from '../home/Password';
import OTP from '../home/OTP';
import Signup from '../home/Signup';
import SideMenu from '../common/SideMenu';

export default class Home extends React.Component{

  render(){
      return(
        <React.Fragment>
          <SideMenu/>
          <div className="off-canvas-main">
              <div className="container-fluid">
                  <Header/>
                  <NavMenu/>
                  <SectionFirst/>
                  <SectionTwo/>
                  <SectionThree/>
                  <SectionFour/>
                  <SectionFive/>
                  <SectionSix/>
                  <Footer/>  
              </div>
          </div>
          <Login/>
          <Password/>
          <OTP/>
          <Signup/>
        </React.Fragment>
      );
    }
}