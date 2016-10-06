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
        <h2 >ABOUT</h2>
        <p>
            ADD IS A CREATIVE FREELANCE AGENCY THAT SPECIALIZES IN FULL STACK WEB DEVELOPMENT.<br/>
            Attractive Distracted Developers (ADD) def: A group of highly attractive developers (both physically and skillfully) well versed in JavaScript and professional service at affordable costs.</p> 

      </div>
    )
  }
});

export default About;