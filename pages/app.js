import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, browserHistory} from "react-router-dom";

import SignUp from './signUp';
import SignUpDone from './signUpDone';
import PageHeader from '../js/pageHeader';
import Footer from '../js/footer';
import Home from './home';
import SignIn from './signIn';
import SignInDone from './signInDone';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: ""
        };
        
        this.navSignUpDone = this.navSignUpDone.bind(this);
    }
    
    navSignUpDone(email) {
         this.setState({emailAddress: email});
         console.log("set email"+ this.state.emailAddress);
    }
    
    render() {
        return(
          <Router history={browserHistory}>
            <div>
                <Switch>
                 <Route exact path="/" render={() => <Home />}/>
                 
                 <Route path="/signin" render={() => <div>
                 <PageHeader/>
                 <SignIn setEmail={this.navSignUpDone}/>
                 <Footer/> </div>}/>
                 
                 <Route path="/signindone" render={() => <div>
                 <PageHeader/>
                 <SignInDone email={this.state.emailAddress}/>
                 <Footer/> </div>}/>
                 
                 <Route path="/signup" render={() =><div>
                 <PageHeader/>
                 <SignUp navSignUpDone={this.navSignUpDone}/>
                 <Footer/> </div>}/>
                 
                 <Route path="/signupdone" render={() => <div>
                 <PageHeader/>
                 <SignUpDone email={this.state.emailAddress}/>
                 <Footer/> </div>}/>
                 
                </Switch>
            </div>
          </Router>
        )
    }
}

export default App;
