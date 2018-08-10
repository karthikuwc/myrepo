import React from 'react';

import {Link} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    
        console.log("Rendering Home");
        
        return (
            <div>
              <link rel="stylesheet" href="../styles/home2.css" />
              <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a href="/" className="img-svg"><span><img src="../resources/header-logo.svg" /></span></a>
                  </div>
                  <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#">Get-Set-GO</a></li>
                      <li><a href="#">Help Center</a></li>
                      <li><a href="#">GlideStore</a></li>
                      <li><Link to="/signup">Sign Up</Link></li>
                      <li><a href="#"><Link to="signin" style={{ color: 'white' }}><span className="signin"><img src="../resources/head-icon.svg" className="d-inline-block align-top head-icon" alt />Sign In</span></Link></a></li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/*container block 1*/}
              <div className="container block-1">
                <div className="row">
                  <div className="container" style={{textAlign: 'center'}}>
                    <img src="../resources/top-page.svg" />
                  </div>
                  <h2 style={{fontFamily: '"Lato", sans-serif', textAlign: 'center', color: '#fff'}}>AI-Ready Cloud WiFi for Small Business</h2>
                  <div>
                    <ul style={{display: 'inline', textAlign: 'center', color: '#fff'}} id="block1">
                      <li>Better Productivity</li>
                      <li>Better Security</li>
                      <li>Better Performance</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*container block 2*/}
              <div className="container block-2">
                <h2 style={{marginBottom: '5%', textAlign: 'center'}}>Quick Setup, Awesome Features</h2>
                <div className="container col-md-4 col-xs-6">
                  <div className="header">
                    <h4>{/*<img src="images/timer.svg">*/}1-Minute Setup</h4>
                  </div>
                  <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                  <a>Learn More &gt;</a>
                </div>
                <div className="container col-md-4 col-xs-6">
                  <div className="header">
                    <h4>{/*<img src="images/secure.svg">*/}Lot More Secure</h4>
                  </div>
                  <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                  <a>Learn More &gt;</a>
                </div>
                <div className="container col-md-4 col-xs-6">
                  <div className="header">
                    <h4>{/*<img src="images/unlimited.svg">*/}Free and Unlimited</h4>
                  </div>
                  <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                  <a>Learn More &gt;</a>
                </div>
                <div className="container col-md-4 col-xs-6">
                  <div className="header">
                    <h4>{/*<img src="images/dashboard.svg">*/}Visual Dashboard</h4>
                  </div>
                  <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                  <a>Learn More &gt;</a>
                </div>
                <div className="container col-md-4 col-xs-6">
                  <div className="header">
                    <h4>{/*<img src="images/privacy.svg">*/}Privacy Control</h4>
                  </div>
                  <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                  <a>Learn More &gt;</a>
                </div>
                <div className="container col-md-4 col-xs-6">
                  <div className="header">
                    <h4>{/*<img src="images/encrypt.svg">*/}Encrypt Your Traffic</h4>
                  </div>
                  <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                  <a>Learn More &gt;</a>
                </div>
              </div>
              {/*container block 3*/}
              <div className="container block-3 col-lg-12" style={{backgroundColor: '#ffd8cb'}}>
                <div className="article-content">
                  <div className="row">
                    <div className="col-xs-6" style={{paddingLeft: '10%'}}>
                      <p>Access</p>
                      <h4>Hassle-Free Visitor Wi-Fi</h4>
                      <p>You get instant access to Wi-Fi, lot more secure and peace of mind.</p>
                    </div>
                    <div className="col-xs-6" style={{paddingRight: '10%'}}>
                      <img src="../resources/hassle-free.svg" className="Page-1" style={{float: 'right'}} />
                    </div>
                  </div>
                </div>
              </div>
              {/*container block 4*/}
              <div className="container block-4 col-lg-12" style={{backgroundColor: '#fff'}}>
                <div className="article-content">
                  <div className="row">
                    <div className="col-xs-6" style={{paddingLeft: '10%'}}>
                      <img src="../resources/analytics.svg" style={{float: 'left'}} />
                    </div>
                    <div className="col-xs-6">
                      <p>Analytics</p>
                      <h4>Keep track of your Wi-Fi usage and keep track of yourself</h4>
                      <p>Get to know your browsing habits, time spent at different GlideBit hotspots, know yourself.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*container block 5*/}
              <div className="container block-5 col-lg-12" style={{backgroundColor: '#ffd8cb'}}>
                <div className="article-content">
                  <div className="row">
                    <div className="col-xs-6" style={{paddingLeft: '10%'}}>
                      <p>Privacy</p>
                      <h4>Keep your web traffic to yourself</h4>
                      <p>Whether you are surfing your company website, our Facebook, keep your web traffic private by encrypting all your Internet traffic.</p>
                    </div>
                    <div className="col-xs-6" style={{paddingRight: '10%'}}>
                      <img src="../resources/traffic-privacy.svg" style={{float: 'right'}} />
                    </div>
                  </div>
                </div>
              </div>
              {/*container block 6*/}
              <div className="container block-6">
                <div className="row">
                  <div className="container col-md-6 col-xs-12" style={{paddingTop: '5%', paddingBottom: '5%', color: 'white', textAlign: 'center'}}>
                    <h4 style={{marginBottom: '3%'}}>Get Started With GlideX</h4>
                    <h6 style={{marginBottom: '3%'}}>Create Your Account</h6>
                    <button className="btn btn-primary" style={{backgroundColor: '#f98470', border: '1px solid #fff'}}>Signup</button>
                  </div>
                  <div className="container col-md-6 col-xs-12" style={{paddingTop: '5%', paddingBottom: '5%', color: 'white', textAlign: 'center'}}>
                    <h4 style={{marginBottom: '3%'}}>Signin to GlideX Control Center</h4>
                    <h6 style={{marginBottom: '3%'}}>Analytics, Apps and More</h6>
                    <button className="btn btn-primary" style={{backgroundColor: '#f98470', border: '1px solid #fff'}}>Signin</button>
                  </div>
                </div>
              </div>
              {/*container block 7*/}
              <div className="container block-7">
                <div className="row">
                  <div className="container" style={{textAlign: 'center'}}>
                    <img src="../resources/bottom-page.svg" />
                  </div>
                  <div className="container col-xs-12" style={{textAlign: 'center'}}>
                    <img src="../resources/header-logo.svg" />
                    <div className="container">
                      <ul>
                        <h4>Company</h4>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                      </ul>
                    </div>
                    <div className="container">
                      <ul>
                        <h4>Other</h4>
                        <li>Terms of Use</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                      </ul>
                    </div>
                    <div className="container">
                      <ul>
                        <h4>About GlideX</h4>
                        <li>GlideStore</li>
                        <li>GlideX WiFi Devices</li>
                        <li>What is a GlideSpot</li>
                        <li>What is GlideX WiFi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <footer id="footer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <a className="link" href="#">Status</a>
                      <a className="link" href="#">Privacy &amp; Terms</a>
                      <a className="link" href="#">Contact</a>
                    </div>
                    <div className="text-right col-xs-12 col-sm-6">
                      <a className="link" href="#">Copyright 2018 - GlideX</a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
        )
    }
}

export default Home;