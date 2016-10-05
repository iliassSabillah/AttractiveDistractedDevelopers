import React from 'react';
import {Link} from 'react-router';
import ImageBox from './ImageBox';
import HomeAbout from './HomeAbout';
import ServicesIcon from './ServicesIcon';
import CoderClothing from './CoderClothing';
import ContactInfo from './ContactInfo';
import 'bootstrap/dist/css/bootstrap.css';


var Home = React.createClass({

  render: function() {
    return (
      <div id="home">
          <ul className="breadcrumb">
            <li  className="active"><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#coderclothing">Clothing</a></li>
            <li><a href="#contactInfo">Contact</a></li>
            <li><a href="#homeabout">About</a></li>
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