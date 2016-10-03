import React from 'react';
import data from './data';
import {Link} from 'react-router';


var Services = React.createClass({
  getInitialState(){
    return(
        {images:null}
      )
  },
   componentWillMount(){
   
    this.setState({images: data.getImages()})
   },
  render: function() {
    var imgs = this.state.images.map((img,i)=>{
        return (
          <div className="col-md-4" id="images"><img className ="img-responsive img-thumbnail" key={i} src={img} role="presentation"/></div>
        )
      })
    return (
      <div>
        <nav className="navbar navbar navbar-collapse submenu">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="Front">Front </Link></li>
              <li><a href="back">Back </a></li>
              <li><a href="management">Management </a></li>
            </ul>
          </div>
        </nav>
        <h1>Welcome to ADD Store!</h1>
        <h2>Home of the Attractive Distracted Developers</h2>

        <h2>Store Images:</h2>
          {imgs}
        <h2>Front:</h2>
          <Front/>
        <h2>Back:</h2>
          <Back/>
        <h2>Management:</h2>
          <Management/>
      </div>
    )
  }
});

var Front = React.createClass({
  getInitialState(){
    return (
      {items: null}
      )
    
  },
  componentWillMount(){
    {this.setState({items: data.getAbout()})}

  },
  render: function() {
    return (
      <div id="front">
        <h2>Front-end Web Developers</h2> 
      </div>
    )
  }
});
var Back = React.createClass({
  getInitialState(){
    return (
      {items: null}
      )
    
  },
  render: function() { 
    return (
      <div id="back">
        <h2>Back-end Web Developers</h2> 
      </div>
    )
  }
})
var Management = React.createClass({
  getInitialState(){
    return (
      {items: null}
      )    
  },
  render: function() {  
    return (
      <div id="management">
      <h2>Management PlayGround</h2>
      </div>
    )
  }
});

export {Services, Front, Back, Management};