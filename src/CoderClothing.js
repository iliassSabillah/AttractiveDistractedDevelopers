import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';


var CoderClothing = React.createClass({
  render: function() {
    return (  
      <div id="coderclothing"> <h1>CODER CLOTHING</h1>
          <p>Clodes to code in! View our coder closet for some coder clothes to add to your coder cache.</p>
          <div className="container">
            <div className="row">
               <div className='col-md-12'> <Link to="Clothing"><img src="http://www.betterthanpants.com/media/catalog/product/i/-/i-know-html-funny-nerd-tshirt-mens-regular-white_2_1.png" width="250" height="300" alt="front-end-dev" /></Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
}) 

export default CoderClothing;