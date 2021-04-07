import React from 'react';
import foodBav from '../../assets/images/nav-icon/food-bav.png';
import grocery from '../../assets/images/nav-icon/grocery.png';
import electronics from '../../assets/images/nav-icon/electronics.png';
import healthWellness from '../../assets/images/nav-icon/health-wellness.png';
import apparels from '../../assets/images/nav-icon/apparels.png';
import eCom from '../../assets/images/nav-icon/ecom-online.png';
import entertainment from '../../assets/images/nav-icon/entertainment.png';
import cab from '../../assets/images/nav-icon/cab.png';
import all from '../../assets/images/nav-icon/all.png';

export default class NavMenu extends React.Component{

  render(){
    
    return(
            <nav className="desktopNav row border-bottom bg-white">
              <div className="container">
                <ul>
                  <li className="dropdown spriteMenu">
                    <a href="#" className="dropdown-toggle" id="apparel-accessories-Dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <figure>
                          <img src={apparels} alt="Apparel &amp; Accessories"/>
                          <figcaption>Apparel &amp;<br/> Accessories</figcaption>
                        </figure>
                    </a>
                      
                    <div className="dropdown-menu" aria-labelledby="apparel-accessories-Dropdown">
                        <a className="dropdown-item" href="#">Allen Solly</a>
                        <a className="dropdown-item" href="#">Armani Exchange</a>
                        <a className="dropdown-item" href="#">Arrow</a>
                        <a className="dropdown-item" href="#">Aurelia</a>
                        <a className="dropdown-item" href="#">Bata</a>
                        <a className="dropdown-item" href="#">Benetton</a>
                        <a className="dropdown-item" href="#">BIBA</a>
                        <a className="dropdown-item" href="#">Bobbi Brown</a>
                        <a className="dropdown-item" href="#">Brand Factory</a>
                        <a className="dropdown-item" href="#">Celio</a>
                        <a className="dropdown-item" href="#">Central</a>
                        <a className="dropdown-item" href="#">Coach</a>
                        <a className="dropdown-item" href="#">Euphoria Jewellery (TM) gold coins</a>
                        <a className="dropdown-item" href="#">Fastrack</a>
                        <a className="dropdown-item" href="#">FBB</a>
                        <a className="dropdown-item" href="#">Flying Machine</a>
                        <a className="dropdown-item" href="#">G - Star Raw</a>  
                    </div>
                  </li>
                
                  <li>
                  <a href="#">
                    <figure>
                      <img src={foodBav} alt="Food &amp; Beverage"/>
                      <figcaption>Food &amp;<br/> Beverage</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img src={grocery} alt="Grocery &amp; Home Needs"/>
                      <figcaption>Grocery &amp;<br/> Home Needs</figcaption>
                    </figure>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" id="MobileElectronics-Dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <figure>
                      <img src={electronics} alt="Mobile &amp; Electronics"/>
                      <figcaption>Mobile &amp;<br/> Electronics</figcaption>
                    </figure>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="MobileElectronics-Dropdown">
                    <a className="dropdown-item" href="#">Croma</a>
                    <a className="dropdown-item" href="#">Mobile Recharge</a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img src={healthWellness} alt="Health &amp; Wellness"/>
                      <figcaption>Health &amp;<br/> Wellness</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img src={eCom} alt="e-Com &amp; Online"/>
                      <figcaption>e-Com &amp;<br/> Online</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img src={entertainment} alt="Grocery &amp; Home Needs"/>
                      <figcaption>Entertainment &amp;<br/> Magazines</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img src={cab} alt="Cabs &amp; Travel"/>
                      <figcaption>Cabs &amp;<br/> Travel</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img src={all} alt="all"/>
                      <figcaption>All<br/> Brands</figcaption>
                    </figure>
                  </a>
                </li>
              </ul>
              </div>
            </nav>
        );
    }
}