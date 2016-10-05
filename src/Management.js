import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Management = React.createClass({
  render: function() {
    return (  
      <div>
        <div id="#management"> <h1>MANAGEMENT!</h1> </div>
        <h2>We dont actually have a plan; we play it by ear.</h2>
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

export default Management;