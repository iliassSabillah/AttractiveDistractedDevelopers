import React from 'react';
import data from './data';
import {Router, Route,RouteHandler, IndexRoute, Link, browserHistory} from 'react-router';

var About = React.createClass({
  getInitialState(){
    return (
      {aboutUS: null}
      )
    
  },
  componentWillMount(){
    {this.setState({aboutUS: data.getAbout()})}

  },
  render: function() {
    return (
      <div id="storeAbout">
        <h2>As a very small group of Freelance Web Designers and developers, we offer professional service at affordable prices. 

The sales pitch is simple. We provide a superior product that you can see for yourself in our portfolio. We provide a level of service and professionalism that is uncommon in business and even more so in the faceless, online industry. 

Our group of freelance web designers and developers have a variety of specialties. We lean on each other to cover a large  (bc we lack well rounded skills) number of needs for our clients. </h2> 

      </div>
    )
  }
});

export default About;