import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

var ContactInfo = React.createClass({
  render: function() {
    return ( 
          <div id="contactInfo">
            <h1>Contact Info</h1>
            <p>ADD located at 31-00 soured from c4q blah blah</p>
            <div className="container-fluid">
              <div className="row">
                 <div> <Link to="contact"><img width="100%" height="auto" /></Link>
                </div>
              </div>
          	</div>
          </div>
    )
  }
})   

export default ContactInfo;