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

                <div className='col-sm-4'> <img className='img-circle' src="http://hsblco.com/wp-content/uploads/2015/11/%5E5C7794AB84ADEE720CFB2DCF5E721DA68EEDA5D4C9721AEE6E%5Epimgpsh_fullsize_distr.png" width="400" height="400" />
                           <h3>Person 1 </h3>
                           <p>Quote</p>
                        
                </div> 

                <div className='col-sm-4'> <img className='img-circle' src="http://xenrisefitnesscenter.108pixels.com/wp-content/themes/custom-xen-108pixels/images/testaut3.png" width="400" height="400" />
                           <h3>Person 2</h3>
                           <p>Quote</p>
                </div>

                <div className='col-sm-4'> <img className='img-circle' src="http://www.ekenmagazine.com/wp-content/uploads/2014/06/Julian_stubbs_rounded.png" width="400" height="400" />
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