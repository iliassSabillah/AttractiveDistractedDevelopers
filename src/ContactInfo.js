import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

var ContactInfo = React.createClass({
  render: function() {
    return ( 
          <div id="contactInfo">
            <h1>Contact Info</h1>
            <p>ADD located at 31-00 soured from c4q blah blah</p>
            <div className="container">
              <div className="row">
                 <div className='col-md-12'> <Link to="contact"><img src="https://hd.unsplash.com/photo-1447069387593-a5de0862481e" width="100%" height="auto" /></Link>
                </div>
              </div>
          	</div>
          </div>
    )
  }
})   

export default ContactInfo;