import React from 'react';
import {Link} from 'react-router';


var Header = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-inverse navbar-collapse">
          <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand App-logo" href="#">ADD</a>
            </div>
            <ul className="nav navbar-nav">
              <li key="home">
                <Link to="/">Home</Link></li> 
              <li key="Services"> 
                <Link to="Services"  className="dropdown-toggle" 
                    data-toggle="dropdown" role="button"
                     aria-haspopup="true" aria-expanded="false">Services</Link> 
              </li>
              <li key="Clothing">
                <Link to="Clothing">Clothing</Link>
              </li>
              <li key="about">
                <Link to="About">About</Link>
              </li>
              <li key="contact">
                <Link to="Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
})

export default Header;