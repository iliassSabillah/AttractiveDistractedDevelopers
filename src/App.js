import React from 'react';
import ReactDOM from 'react-dom';
var Waypoint = require('react-waypoint');
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./index.css');
require('./App.css');
import data from './data';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Services from './Services';
import Back from './Back';
import Front from './Front';
import Management from './Management';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import {Product, Clothing} from './Clothing';

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

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="Services" component={Services}>
              <Route path="/front" component={Front}/>
              <Route path="/back" component={Back}/>
              <Route path="/management" component={Management}/>
            </Route>
            <Route path="/Clothing" component={Clothing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
      </Route>
    
  </Router>,
  document.getElementById('root')
);


