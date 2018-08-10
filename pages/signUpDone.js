import React from 'react';
import {Link} from "react-router-dom";

class SignUpDone extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    
        console.log("Rendering Sign Up Page Done Container");
        
        return (
            <span>
                <link rel="stylesheet" href="../styles/signup-done.css"/>
                <div>
                <div className="container col-centered">
                  <div className="row">
                    <img src="../resources/page-1-tick.svg" className="page-2" />
                    <div id="sign-up">
                      <h1 style={{fontSize: 30, fontWeight: 900, color: '#6d6e71'}}>Sign Up Done!</h1>
                    </div>
                    <div className="row" id="content" style={{margin: 15, textAlign: 'center', color: '#4d4d4d'}}>
                      <p>Thank you for signing up with GlideX.</p>
                      <p>
                        Verify your GlideX WiFi account by clicking the link in the email sent to {this.props.email}.
                      </p>
                    </div>
                    <div>
                      <div className="form-group" style={{marginTop: '4.8%'}}>
                        <button className="btn btn-primary" style={{backgroundColor: '#f98470', width: 320, height: 40}}>Sign Up!</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sign-in">
                  <Link to='/signin'><div className="link">Sign In</div></Link>
                </div>
                </div>
            </span>
        )
    }
}

export default SignUpDone;