import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Clothing = React.createClass({
	getInitialState(){
		return (
			{product:null}
			)
	},
	componentDidMount(){
		this.setState({product: data.getproduct()})
	},
	render: function() {
  	var arr= [];
 
  	for(var product in this.state.product){
      console.log(this.state.product.product1[0].price)
  		arr.push(<h2>{product}</h2>)
  		this.state.product[product].map((item,i)=> {
  		arr.push(<Product key={item.id} name={item.name} price={item.price} />)
     		})
     	}
    return (
      <div className="flex-container col-md-4">
  		  {arr}
      </div>
    )
  }
})
var Product = React.createClass({
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

export {Clothing, Product};