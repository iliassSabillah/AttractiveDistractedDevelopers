import React from 'react';
import data from './data2';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
require('./index.css');
var Clothing = React.createClass({
	getInitialState(){
		return (
			{product:null , images:[]}
			)
	},
	componentDidMount(){
		this.setState({product: data.getProduct()})
    
   
	},
	render: function() {
  	var arr= [];
    
  	for(var product in this.state.product){
      
  		arr.push(<h2>{product}</h2>)
  		this.state.product[product].map((item,i)=> {
  		arr.push(<Product key={item.id} name={item.name} price={item.price} image={item.image} />)
     		})
     	}
    return (
      <div className="flex-container">

       <h1>Welcome to Clothing Page:</h1>
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
      <div>
        <div id="clothinghanger"> <img src="https://openclipart.org/image/2400px/svg_to_png/230120/Clothes-Hanger.png" width='100' height='50' alt="hanger"  /> 
        </div>
        <div className="col-sm-3">
           <div > <img className='img-circle' src={this.props.image} width="160" height="200" alt="stuff" />
                       <p> {this.props.name}</p>
                       <p>$ {this.props.price}</p>
           </div>
        </div>
      </div>
      
    )
  }
})

export {Clothing, Product};