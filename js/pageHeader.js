import React from 'react';
import {Link} from "react-router-dom";

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

    }
    
    render() {
    
        console.log("Rendering Page Header");
        
        return (
            // <nav className="navbar navbar-default navbar-static-top">
            //     <div className="container-fluid">
            //       <div id="navbar" className="collapse navbar-collapse" style={{borderTopWidth: 0}}>
            //         <ul className="nav navbar-nav">
            //           <li><a href="#">GlideX</a></li>
            //           <li><img src="../resources/cross.svg" className="cross"/></li>
            //         </ul>
            //         {/*<ul className="nav navbar-nav navbar-right">
            //           <li><a href="#"><i className="glyphicon glyphicon-remove" /></a></li>
            //         </ul>*/}
            //       </div>
            //     </div>
            // </nav>
            
            <nav class="navbar navbar-default navbar-static-top" >
              <div class="navbar-header">
                   
              </div>
              <a class="navbar-brand nav navbar-nav" href="#" id="navbar">GlideX</a>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li><Link to="/"><img src="../resources/cross.svg" className="cross"/></Link></li>
                </ul>
              </div>
            </nav>
        )
    }
}

export default PageHeader;