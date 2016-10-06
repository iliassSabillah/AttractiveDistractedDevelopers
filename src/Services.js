import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Services = React.createClass({
  render: function() {
      return (
      <div className="container-fluid" id="service">
          <h2>Home of the Attractive Distracted Developers</h2>    
            <div className="serviceLink">
            <div className="row">
            <ul className="serviceLink2">
               <p className="serviceFront"><Link to="front">Front </Link> </p>       
             <p className="serviceBack"> <Link to="back">Back </Link> </p>
             <p className="serviceManagement"> <Link to="management">Management </Link> </p>  
            </ul>
            </div>
          </div>
          {this.props.children}
      </div>
    )
  }
});

export default Services;