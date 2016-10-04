import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
// require('./App.css');
require('./index.css');
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

var Home = React.createClass({
  render: function() {
    return (
      <div id="home">
          <ul className="breadcrumb">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#coderclothing">Clothing</a></li>
            <li><a href="#contactInfo">Contact</a></li>
            <li className="active">About</li>
          </ul>
          <ImageBox />
          <HomeAbout />
          <ServicesIcon />
          <CoderClothing/>
          <ContactInfo/>
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
                </Link></li> 
              <li className="dropdown"> 
                <Link to="Services"  className="dropdown-toggle" 
                    data-toggle="dropdown" role="button"
                     aria-haspopup="true" aria-expanded="false">Services
                </Link> 
              </li>
              <li key="Clothing">
                <Link to="Clothing">Clothing
                </Link>
              </li>
              <li key="about">
                <Link to="About">About
                </Link>
              </li>
              <li key="contact">
                <Link to="Contact">Contact
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
        <img src="https://s-media-cache-ak0.pinimg.com/originals/c8/a2/cc/c8a2ccd031b2a85533bca14367607a42.jpg" alt="hire us" className="lisapic"/>
      </div>
    )
  }
})



var HomeAbout = React.createClass({
  render: function() {
    return ( 
           <div id="homeabout">
            <h1>ABOUT</h1>
              <p>Stumptown flexitarian organic, disrupt waistcoat chambray VHS. Blog meggings freegan, PBR&B crucifix +1 thundercats tote bag offal VHS cray hashtag YOLO shabby chic. 8-bit affogato portland, four dollar toast master cleanse flexitarian wayfarers forage schlitz microdosing slow-carb. Actually sartorial XOXO literally meh, biodiesel woke. Gentrify tousled tattooed af prism. Tbh iceland hot chicken vinyl, gluten-free messenger bag ugh unicorn kogi. Pork belly semiotics vaporware, tofu microdosing lumbersexual unicorn seitan aesthetic.</p>
                
          </div>

    )
  }
})


var ServicesIcon = React.createClass({
  render: function() {
    return (  
      <div id="services"> 
        <h1>SERVICES</h1>
        <div className="container">
          <div className="row">
            <div className='col-sm-4'><Link to="Services">Front</Link>
               <p>Front End development is blah blah blah </p>
            </div>
            <div className='col-sm-4'><Link to="Services"><img src="https://cdn1.iconfinder.com/data/icons/express-your-creativity/60/web-development-512.png" width="150" height="100" alt="back-end-dev" /></Link>
                <p>Back End Development is blah blah blah</p>
            </div>
            <div className='col-sm-4'><Link to="Services"><img src="http://i1.wp.com/connectedresearchers.com/wp-content/uploads/2014/11/icon_26055.png" width="150" height="100" alt="program-management" /></Link>
                <p>Program Management to boss us around</p>
            </div>
          </div>
    
      </div>
      {this.props.children}
    </div>
    )
  }
})    

var CoderClothing = React.createClass({
  render: function() {
    return (  
      <div id="coderclothing"> <h1>CODER CLOTHING</h1>
          <p>BUY CLOTHES TO CODE IN</p>
          <div className="container">
            <div className="row">
               <div className='col-md-12'> <Link to="Clothing"><img src="http://www.betterthanpants.com/media/catalog/product/i/-/i-know-html-funny-nerd-tshirt-mens-regular-white_2_1.png" width="250" height="300" alt="front-end-dev" /></Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
}) 


var ContactInfo = React.createClass({
  render: function() {
    return ( 
          <div id="contactInfo">
            <h1>Contact Info</h1>
          </div>

    )
  }
})   

var Footer = React.createClass({
  render(){
    return (
        <div className="footer" id="contact">
          <h1>CONTACTINFO</h1>
            <h3>C4Q</h3>
            <h4>ACCESS CODE</h4>
            <p>31-00 47th ave</p>
            <p>Phone Number</p>
            <p>email</p>
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
            <IndexRoute component={Home}/>
            <Route path="Services" component={Services}>
              <Route path="front" component={Front}/>
              <Route path="back" component={Back}/>
              <Route path="Management" component={Management}/>
            </Route>
            <Route path="Clothing" component={Clothing} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
      </Route>
      <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);


