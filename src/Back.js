import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Back = React.createClass({
  render: function() {
    return (  
      <div id="backend">
        <h1>BACKEND!</h1>
        <h2>Using the duct tape programming method we implement in our coders the motto “It may not be pretty but it works!</h2>
          <div className="container">
             <div className="row">
                <div className='col-sm-4'> <img className='img-circle' src="http://peytoncrump.com/wp-content/uploads/2015/07/PC-Avatar-Circle.jpg" width="400" height="400" />
                           <h3>Person 1 </h3>
                           <p>"I have extensive experience in developing websites from scaffoldings that were provided by the instructor. As long as I have them I can do anything."</p>
                        
                </div> 
                <div className='col-sm-4'> <img className='img-circle' src="http://peytoncrump.com/wp-content/uploads/2015/07/PC-Avatar-Circle.jpg" width="400" height="400" />
                           <h3>Person 2</h3>
                           <p>"When the servers go down that’s God telling me to “take a break”."</p>
                </div>
                <div className='col-sm-4'> <img className='img-circle' src="http://qvik.fi/wp-content/uploads/2015/01/staff_rounded_profile_Niko.png" width="400" height="400" />
                           <h3>Person 3</h3>
                           <p>"I have skills that are diverse and range in variety."</p>
                </div>
                
                
          </div>
        </div>
      </div>
    )
  }
}) 

export default Back;