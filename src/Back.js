import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Back = React.createClass({
  render: function() {
    return (  
      <div>
        <div id="#backend"> <h1>BACKEND!</h1> </div>
        <h2>Using the duct tape programming method we implement in our coders the motto “It may not be pretty but it works!</h2>
          <div className="container">
             <div className="row">
                <div className='col-lg-4'> <img className='img-circle' src="#" width="400" height="400" />
                   <h3>Person 1 </h3>
                   <p>Quote</p>      
                </div> 
                <div className='col-lg-4'> <img className='img-circle' src="#" width="400" height="400" />
                   <h3>Person 2</h3>
                   <p>Quote</p>
                </div>
                <div className='col-lg-4'> <img className='img-circle' src="#" width="400" height="400" />
                   <h3>Person 3</h3>
                   <p>Quote</p>
                </div>
          </div>
        </div>
      </div>
    )
  }
}) 

export default Back;