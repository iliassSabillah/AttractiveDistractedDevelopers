import React from 'react';
import data from './data2';

var Contact = React.createClass({
  render: function() {
    return (  
      <div>
        <div id="#contact"> <h1>Get in touch with us!</h1> </div>
          <div className="container">
             <div className="row">

                <div className='col-md-3'> <img className='img-circle' src="#" width="200" height="200" />
                           <h3>Iliass </h3>
                           <p>Quote quote quote</p>
                           <a href="#">LinkedIn</a><br></br>
                           <a href="#">Social Media</a><br></br>
                           <a href="#">GitHub</a>
                </div> 

                <div className='col-md-3'> <img className='img-circle' src="#" width="200" height="200" />
                           <h3>Lisa</h3>
                           <p>Lalalala</p>
                           <a href="#">LinkedIn</a><br></br>
                           <a href="#">Social Media</a><br></br>
                           <a href="#">GitHub</a>
                </div>

                <div className='col-md-3'> <img className='img-circle' src="#" width="200" height="200" />
                           <h3>Michael</h3>
                           <p>blah blah blah</p>
                           <a href="#">LinkedIn</a> <br></br>
                           <a href="#">Social Media</a><br></br>
                           <a href="#">GitHub</a>
                </div>

                <div className='col-md-3'> <img className='img-circle' src="#" width="200" height="200" />
                           <h3>Shazia</h3>
                           <p>ho hum di dum</p>
                           <a href="#">LinkedIn</a><br></br>
                           <a href="#">Social Media</a><br></br>
                           <a href="#">GitHub</a>
                </div>
          </div>
        </div>
      </div>
    )
  }
}) 

export default Contact;