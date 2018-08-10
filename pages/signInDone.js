import React from 'react';

import {Redirect} from "react-router-dom";

import {signOut, update} from '../js/entry';

class SignInDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
            emailAddress: "",
            fullName: "",
            mobileNumber: "",
            password: "",
            redirect: false
        };
        
        this.nameChange = this.nameChange.bind(this);
        // this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCallback = this.updateCallback.bind(this);
        this.signOutNav = this.signOutNav.bind(this);
    }
  
    nameChange(event) {
        this.setState({fullName: event.target.value});
    }
    
    // passwordChange(event) {
    //     this.setState({password: event.target.value});
    // }
    
    handleSubmit(event) {
      var obj = {
        UserPoolId: "ap-southeast-1_TB9GVW9nj",
        ClientId: "2a57aiojrldeloo774oritg30i",
        Name: this.state.fullName,
        password: this.state.password,
        Email: this.props.email
      }
      
        update(obj, this.updateCallback, this);
        console.log(JSON.stringify(obj));
        event.preventDefault();
    }
    
    updateCallback(res) {
        alert(res);
    }
    
    signOutNav() {
        var obj = {
            UserPoolId: "ap-southeast-1_TB9GVW9nj",
            ClientId: "2a57aiojrldeloo774oritg30i",
            Email: this.props.email
        }
        console.log(this.props.email);
        signOut(obj);
        this.setState({redirect: true});
    }
    
    
    render() {
    
        console.log("Rendering Sign Up Container");
        
        if (this.state.redirect === true) {
          console.log('redirecting...to home');
          return (<Redirect to='/' />)
        }
        
        return (
            <span>
              <link rel="stylesheet" type="text/css" href="../styles/signup-done.css" />
              <div>
                <div className="container col-centered">
                  <div className="row panel-body">
                    <img src="../resources/page-1-tick.svg" className="page-2" />
                    <div id="sign-up">
                      <h2 style={{color: '#6d6e71', fontSize: '13px'}}>Signed in successfully!</h2>
                    </div>
                    <form>
                        <div className="input-group" style={{margin: '7% 5%'}}>
                          <span className="input-group-addon"><img src="../resources/page-1-user.svg" className="page-1" /></span>
                          <input type="text" name="name" id="name" tabIndex={1} className="form-control" placeholder="Enter Full Name" 
                          value={this.state.fullName} onChange={this.nameChange}/>
                        </div>
                        {/*<div className="input-group">
                          <span className="input-group-addon"><img src="../resources/key-icon.svg" className="page-1" /></span>
                          <input type="password" name="password" id="password" tabIndex={3} className="form-control" placeholder="Enter a Password" 
                          value={this.state.password} onChange={this.passwordChange}/>
                        </div>*/}
                        <div className="form-group" style={{marginTop: '4.8%'}}>
                            <button onClick={this.handleSubmit} className="btn btn-primary" style={{backgroundColor: '#f98470', width: 320, height: 40}}>Update Details</button>
                        </div>
                    </form>
                  </div>
                </div>
                <div id="sign-in">
                  <a className="link" onClick={this.signOutNav}>Sign out</a>
                </div>
             </div>
            </span>
        )
    }
}

export default SignInDone;
