import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Services = React.createClass({
  render: function() {
      return (
      <div id="service">
          <h2>Home of the Attractive Distracted Developers</h2>
          
            <div className="serviceLink">
            <ul className="serviceLink2">
              
               <p className="serviceFront"><Link to="Services/front">Front </Link> </p>
                 
             <p className="serviceBack"> <Link to="Services/back">Back </Link> </p>

             <p className="serviceManagement"> <Link to="Services/management">Management </Link> </p>
            
            </ul>
          </div>
          {this.props.children}
      </div>
    )
  }
});
export default Services;