import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./App.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';


var App = React.createClass({

  render: function() {
    return (
      <div>
          <Nav />
          {this.props.children}
      </div>
    )
  }
})

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="flex-container navbar navbar-fixed-top">
      <div className="container=fluid">
        <ul>
          <li key="home"><Link to="/">Home</Link></li>
          <li key="antiServices"><Link to="antiServices">Anti-services</Link></li>
          <li key="codersCloths"><Link to="codersCloths">Coders Cloths</Link></li>
          <li key="about"><Link to="about">About</Link></li>
          <li key="contact"><Link to="contact">Contact</Link></li>
        </ul>
        
      </div>
      </nav>
    )
  }
})

var AntiServices = React.createClass({
	getInitialState(){
	  return(
	  		{images:null}
			)
	},
   componentWillMount(){
   
   	this.setState({images: data.getImages()})
   },
  render: function() {
 		var imgs = this.state. images.map((img,i)=>{
  			return (
  				<div className="col-md-4" id="images"><img className ="img-responsive img-thumbnail" key={i} src={img} role="presentation"/></div>
  			)
  		})
  
    return (
      <div>
        <h1>Welcome to ADD Store!</h1>
        <h2>Home of the Attractive Distracted Developers</h2>
        {imgs}
      </div>
    )
  }
})

var CodersCloths = React.createClass({
	getInitialState(){
		return (
			{menu:null}
			)
	},
	componentDidMount(){
		this.setState({menu: data.getMenu()})
	},
	render: function() {
  	var arr= [];
  	var counter=1;
 
  	for(var product in this.state.menu){
  		arr.push(<h2>{product}</h2>)
  		this.state.menu[product].map((item,i)=> {
  		arr.push(<MenuItem keyName={item.name+counter} name={item.name} price={item.price} />)
  		counter++;
     		})
     	}
    return (
      <div className="flex-container col-md-4">
  		  {arr}
      </div>
    )
  }
})
var MenuItem = React.createClass({
	getInitialState(){
		return ({product: null})
	},
	render: function() {
    return (
      <ul className="box">
    		<li key={this.props.keyName}>{this.props.name}</li>
    		<li> {this.props.price}</li>
      </ul>
    )
  }
})

var About = React.createClass({
	getInitialState(){
		return (
			{about: null}
			)
		
	},
	componentWillMount(){
		{this.setState({about: data.getAbout()})}
	},
  render: function() {
  	
    return (
      <div>
        <h1>{this.state.about.restaurant_name}</h1>
          <p>{this.state.about.restaurant_slogan}</p> 
        <h2>About</h2>
          <p>{this.state.about.restaurant_address}</p> 
          <p>{this.state.about.restaurant_email}</p>
          <p>{this.state.about.restaurant_phone}</p>

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
var Contact
var AntiServices
var CodersCloths
var Front
var Back
var Management
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Nav} />
        <Route path="antiServices" component={AntiServices} />
        <Route path="codersCloths" component={CodersCloths} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);

// <Route path="front" component={Front} />
// <Route path="back" component={Back} />
// <Route path="management" component={Management} />