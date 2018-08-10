import React from 'react';

import {Redirect, Link} from "react-router-dom";

import {signUp} from '../js/entry';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            fullName: "",
            mobileNumber: "",
            password: "",
            redirect: false,
            email: {
              button:"active",
              form: {display: 'block'}
            },
            mobile:{
              button:"",
              form: {display: 'none'}
            },
            on:true
        };
        
        this.emailChange = this.emailChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.mobileChange = this.mobileChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signUpCallback = this.signUpCallback.bind(this);
        this.onFormChoiceClick = this.onFormChoiceClick.bind(this);
    }
    
    emailChange(event) {
        this.setState({emailAddress: event.target.value});
    }
  
    nameChange(event) {
        this.setState({fullName: event.target.value});
    }
    
    mobileChange(event) {
        this.setState({mobileNumber: event.target.value});
    }
    
    passwordChange(event) {
        this.setState({password: event.target.value});
    }
    
    handleSubmit(event) {
      var obj = {
        UserPoolId: "ap-southeast-1_TB9GVW9nj",
        ClientId: "2a57aiojrldeloo774oritg30i",
        Email: this.state.emailAddress,
        PhoneNumber: this.state.mobileNumber,
        Name: this.state.fullName,
        password: this.state.password
      }
      
      signUp(obj, this.signUpCallback, this);
      console.log(JSON.stringify(obj));
      event.preventDefault();
    }
    
    signUpCallback(email) {
      this.props.navSignUpDone(email);
      this.setState({redirect: true});
    }
    
    onFormChoiceClick(event) {
      this.state.on = !this.state.on;
      
      if(this.state.on) {
        this.state.email.button = "active";
        this.state.mobile.button = "";
        this.state.email.form = {display: 'block'};
        this.state.mobile.form = {display: 'none'};
      }
      else {
        this.state.email.button = "";
        this.state.mobile.button = "active";
        this.state.email.form = {display: 'none'};
        this.state.mobile.form = {display: 'block'};
      }
    }
    
    render() {
    
        console.log("Rendering Sign Up Container");
        
        if (this.state.redirect === true) {
          console.log('redirecting...to signupdone');
          return (<Redirect to='/signupdone' />)
        }
        
        return (
            <span>
              <link rel="stylesheet" type="text/css" href="../styles/signup.css" />
              <div>
                  <div className="container col-centered">
                    <div className="row" style={{height: '100%'}}>
                      <div className="panel panel-login" style={{height: '100%'}}>
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-xs-6" style={{paddingRight: 0}}>
                              <a href="#" onClick={this.onFormChoiceClick} className={this.state.email.button} id="email-form-link">Email Address</a>
                            </div>
                            <div className="col-xs-6" style={{paddingLeft: 0}}>
                              <a href="#" onClick={this.onFormChoiceClick} className={this.state.mobile.button} id="mobile-form-link">Mobile Number</a>
                            </div>
                          </div>
                        </div>
                        <div className="panel-body" style={{paddingTop: 0}}>
                          <div className="row">
                            <div className="col-lg-12">
                              <form id="email-form" style={this.state.email.form}>
                                <div className="input-group">
                                  <span className="input-group-addon"><img src="../resources/page-1-envelope.svg" className="page-1" /></span>
                                  <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Enter Email" 
                                  value={this.state.emailAddress} onChange={this.emailChange}/>
                                </div>
                                <div className="input-group">
                                  <span className="input-group-addon"><img src="../resources/page-1-user.svg" className="page-1" /></span>
                                  <input type="text" name="name" id="name" tabIndex={2} className="form-control" placeholder="Enter Full Name" 
                                  value={this.state.fullName} onChange={this.nameChange}/>
                                </div>
                                <div className="input-group">
                                  <span className="input-group-addon"><img src="../resources/key-icon.svg" className="page-1" /></span>
                                  <input type="password" name="password" id="password" tabIndex={3} className="form-control" placeholder="Enter a Password" 
                                  value={this.state.password} onChange={this.passwordChange}/>
                                </div>
                                <div className="terms " style={{textAlign: 'center'}}>By clicking Signup, I agree to the <a href="#">Terms of Service</a> and<br /> <a href="#">Privacy Policy</a>.</div>
                                <div className="form-group" style={{marginTop: '4.8%'}}>
                                  <button className="btn btn-primary" style={{backgroundColor: '#f98470', width: 350, height: 40, paddingTop: 10}} onClick={this.handleSubmit}>Sign Up</button>
                                </div>
                              </form>
                              <form id="mobile-form" style={this.state.mobile.form}>
                                <div className="input-group">
                                  <span className="input-group-addon"><img src="../resources/page-1-mobile.svg" className="page-2" /></span>
                                  <input type="tel" name="phone" id="phone" tabIndex={1} className="form-control" placeholder="9086 8097"
                                  value={this.state.mobileNumber} onChange={this.mobileChange}/>
                                </div>
                                <div className="input-group">
                                  <span className="input-group-addon"><img src="../resources/page-1-user.svg" className="page-1" /></span>
                                  <input type="text" name="name" id="name" tabIndex={2} className="form-control" placeholder="Enter Full Name" style={{zIndex: 'auto'}} 
                                  value={this.state.fullName} onChange={this.nameChange}/>
                                </div>
                                <div className="input-group">
                                  <span className="input-group-addon"><img src="../resources/key-icon.svg" className="page-1" /></span>
                                  <input type="password" name="password" id="password" tabIndex={3} className="form-control" placeholder="Enter a Password" 
                                  value={this.state.password} onChange={this.passwordChange}/>
                                </div>
                                <p className="terms " style={{textAlign: 'center'}}>By clicking Signup, I agree to the <a href="#">Terms of Service</a> and<br /> <a href="#">Privacy Policy</a>.</p>
                                <div className="form-group" style={{marginTop: '4.8%'}}>
                                  <button className="btn btn-primary" style={{backgroundColor: '#f98470', width: 350, height: 40, paddingTop: 10}} onClick={this.handleSubmit}>Sign Up</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sign-in" style={{textAlign: 'center'}}>
                    <Link to='/signin'><div className="link">Sign In</div></Link>
                  </div>
              </div>
            </span>
        )
    }
}

export default SignUp;


