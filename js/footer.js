import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

    }
    
    render() {
    
        console.log("Rendering Page Footer");
        
        return (
            <div className="page-footer" id="footer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="text-center">
                      <a className="link">Help Center</a>
                      <a className="link">Privacy</a>
                      <a className="link"><i className="glyphicon glyphicon-option-horizontal" /></a>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Footer;