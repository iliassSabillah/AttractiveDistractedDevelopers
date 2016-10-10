import React from 'react';
import {Link} from 'react-router';
import ImageBox from './ImageBox';
import HomeAbout from './HomeAbout';
import ServicesIcon from './ServicesIcon';
import CoderClothing from './CoderClothing';
import ContactInfo from './ContactInfo';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

var Waypoint = require('react-waypoint');

var Home = React.createClass({

  render: function() {
    return (
      <div id="home">
          <ul className="nav nav-pills nav-stacked" id="mylist">
            <li  className="active" className="listitem"><a href="#home">Home</a></li>
            <li className="listitem"><a href="#services">Services</a></li>
            <li className="listitem"><a href="#coderclothing">Clothing</a></li>
            <li className="listitem"><a href="#contactInfo">Contact</a></li>
            <li className="listitem"><a href="#homeabout">About</a></li>
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

export default Home;