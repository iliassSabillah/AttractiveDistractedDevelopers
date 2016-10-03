import React from 'react';
import data from './data';

var Contact = React.createClass({
  getInitialState(){
    return (
      {contact: null}
      )
    
  },
  componentWillMount(){
    {this.setState({contact: data.getAbout()})}
  },
  render: function() {
    return (
      <div>  
        <h1>Contact</h1>
          <p>{this.state.contact.store}</p> 
          <p>{this.state.contact.store_email}</p>
          <p>{this.state.contact.store_phone}</p>
      </div>
    )
  }
})

export default Contact;