import React from 'react';
import data from './data';
import {Link} from 'react-router';


var Front = React.createClass({
  render: function() {
    return (  
      <div>
        <div id="#front"> <h1>FRONT END!</h1> </div>
        <h2>We can make your web app pretty too look at with as little substance as possible!</h2>
          <div className="container">
             <div className="row">

                <div className='col-sm-4'> <img className='img-circle' src="http://www.chelseasmessyapron.com/wp-content/uploads/2016/02/FINAL00.png" width="400" height="400" />
                           <h3>Person 1 </h3>
                           <p>Quote</p>
                        
                </div> 

                <div className='col-sm-4'> <img className='img-circle' src="http://gorgeousingrey.com/wp-content/uploads/2015/08/Ty-Alexander-headshot-august-2015-circle.png" width="400" height="400" />
                           <h3>Person 2</h3>
                           <p>Quote</p>
                </div>

                <div className='col-sm-4'> <img className='img-circle' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4XjwVpW8U0krYVORekftCkDftF3oemOGjN22olK4TCg5y-LjQ" width="400" height="400" />
                           <h3>Person 3</h3>
                           <p>Quote</p>

                </div>

                
                


          </div>
        </div>
      </div>
    )
  }
}) 


export default Front;