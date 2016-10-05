import React from 'react';


var ServicesIcon = React.createClass({
  render: function() {
    return (  
      <div id="services"> 
        <h1>SERVICES</h1>
        <div className="container">
          <div className="row">
            <div className='col-sm-4'><a >Front</a>
               <p>Beautifully implement visual elements that users see and interact with in a web application. Our web designers work with the support of the back-end developers. </p>
            </div>
            <div className='col-sm-4'><a ><img src="https://cdn1.iconfinder.com/data/icons/express-your-creativity/60/web-development-512.png" width="150" height="100" alt="back-end-dev" /></a>
                <p>Our back end developers
                are experts in being responsible for server-side web application logic, APIs, and integration with front end web developers.</p>
            </div>
            <div className='col-sm-4'><a ><img src="http://i1.wp.com/connectedresearchers.com/wp-content/uploads/2014/11/icon_26055.png" width="150" height="100" alt="program-management" /></a>
                <p>From concept to post production all aspects of your project will be in good hands with our professional project and product managers.</p>
            </div>
          </div>    
       </div>
    </div>
    )
  }
})    

export default ServicesIcon;