import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,RouteHandler, IndexRoute, Link, browserHistory} from 'react-router';
// require('./App.css');
require('./index.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Services, Front, Back, Management} from './Services.js';
import Contact from './Contact';
import About from './About';
import {Product, Clothing} from './Clothing.js';

var App = React.createClass({

  render: function() {
    return (
      <div>
          <Header />
          <ImageBox />
          <HomeAbout />
          <ServicesIcon />
          <Footer/>
          {this.props.children}
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
                <Link to="Clothing">Clothing
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

var ImageBox = React.createClass({
  render: function() {
    return (
      <div>
        <img src="https://wallpaperscraft.com/image/programmer_coder_admin_administrator_5628_1920x1080.jpg" alt="hire us" className="lisapic"/>
      </div>
    )
  }
})

var ImageBox2 = React.createClass({
  render: function() {
    return (
    <div>
      <img src="http://www.bstlhj6.com/data/out/156/5018796-programmer-wallpapers.png" alt="hire us" className="lisapic" />
    </div>
      )
  }
})

var HomeAbout = React.createClass({
  render: function() {
    return (  <div>
                <div id="#homeabout">
                <h1>ABOUT</h1> </div>
                  <p>Stumptown flexitarian organic, disrupt waistcoat chambray VHS. Blog meggings freegan, PBR&B crucifix +1 thundercats tote bag offal VHS cray hashtag YOLO shabby chic. 8-bit affogato portland, four dollar toast master cleanse flexitarian wayfarers forage schlitz microdosing slow-carb. Actually sartorial XOXO literally meh, biodiesel woke. Gentrify tousled tattooed af prism. Tbh iceland hot chicken vinyl, gluten-free messenger bag ugh unicorn kogi. Pork belly semiotics vaporware, tofu microdosing lumbersexual unicorn seitan aesthetic.</p>
                
              </div>

    )
  }
})

var CoderClothing = React.createClass({
  render: function() {
    return (  
      <div>
        <div id="#coderclothing"> <h1>CODER CLOTHING</h1> </div>
        <p>BUY CLOTHES TO CODE IN</p>
        <div className="container">
          <div className="row">
             <div className='col-md-12'> <img src="http://www.betterthanpants.com/media/catalog/product/i/-/i-know-html-funny-nerd-tshirt-mens-regular-white_2_1.png" width="250" height="300" alt="front-end-dev" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}) 

var ServicesIcon = React.createClass({
  render: function() {
    return (  
      <div>
        <div id="#services"> <h1>SERVICES</h1> </div>
        <div className="container">
          <div className="row">

           <div className='col-sm-4'> <img src="http://www.samsung.com/us/aboutsamsung/sustainability/sustainablemanagement/img/over02_icon3.png" width="150" height="100" alt="front-end-dev" />
                       <p>Front End development is blah blah blah </p>
          </div>

            <div className='col-sm-4'><img src="https://cdn1.iconfinder.com/data/icons/express-your-creativity/60/web-development-512.png" width="150" height="100" alt="back-end-dev" />
                        <p>Back End Development is blah blah blah</p>
            </div>
            
            <div className='col-sm-4'><img src="http://i1.wp.com/connectedresearchers.com/wp-content/uploads/2014/11/icon_26055.png" width="150" height="100" alt="program-management" />
                        <p>Program Management to boss us around</p>
            </div>

            </div>
        </div>
      </div>
    )
  }
})    

var ContactInfo = React.createClass({
  render: function() {
    return (  <div>
                <div id="contact"><h1>CONTACTINFO</h1></div>
                <h3>C4Q</h3>
                <h4>ACCESS CODE</h4>
                <p>31-00 47th ave</p>
                <p>Phone Number</p>
                <p>email</p>
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
  <div>
  <ImageBox />
  <Header />
  <ImageBox2 />
  <HomeAbout />
  <ServicesIcon />
  <CoderClothing />
  <ContactInfo />
  <Footer />
  </div>,
  document.getElementById('root')
);

