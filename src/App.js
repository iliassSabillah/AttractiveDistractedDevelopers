import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,RouteHandler, IndexRoute, Link, browserHistory} from 'react-router';
// require('./App.css');
require('./index.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {About} from './About';
import {Services, Front, Back, Management} from './Services.js';
import {Product, Clothing} from './Clothing.js';
import {ImageBox} from './ImageBox.js'


var App = React.createClass({

  render: function() {
    return (
      <div>
          <Header />
          {this.props.children}
          <Footer/>
      </div>
    )
  }
})

var Header = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-inverse navbar-collapse">
          <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">ADD</a>
            </div>
            <ul className="nav navbar-nav">
              <li key="home">
                <Link to="/">Home
                </Link>
              </li> 
              <li className="dropdown"> 
                <Link to="Services" className="dropdown-toggle" 
                    data-toggle="dropdown" role="button"
                     aria-haspopup="true" aria-expanded="false">Services
                  <span className="caret"></span>
                </Link> 
              </li>
              <li key="Clothing">
                <Link to="Clothing">Coders Cloths
                </Link>
              </li>
              <li key="about">
                <Link to="about">About
                </Link>
              </li>
              <li key="contact">
                <Link to="contact">Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
})
        


var Contact = React.createClass({
  getInitialState(){
    return (
      {contact: null}
      )
    
  },
  componentWillMount(){
    {this.setState({contact: data.getAbout()})}
  },
  render: function() {
    return (
      <div>  
        <h1>Contact</h1>
          <p>{this.state.contact.store}</p> 
          <p>{this.state.contact.store_email}</p>
          <p>{this.state.contact.store_phone}</p>
      </div>
    )
  }
})


var Footer = React.createClass({
  render(){
    return (
        <div className="footer">
          <h2>Footer goes here</h2>
        </div>
      )
  }
})

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <h1>404</h1>
      </div>
    )
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
          <Route path="Services" component={Services}>  
            <Route path="Services/front" component={Front} />
          </Route>    
          <Route path="Clothing" component={Clothing} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);

