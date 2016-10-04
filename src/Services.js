import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Services = React.createClass({
  render: function() {
      return (
      <div id="service">
          <li><Link to="Services/front">Front </Link></li>
          <li><Link to="Services/back">Back </Link></li>
          <li><Link to="Services/management">Management </Link></li>
          <h2>Home of the Attractive Distracted Developers</h2>
          {this.props.children}
      </div>
    )
  }
});
export default Services;