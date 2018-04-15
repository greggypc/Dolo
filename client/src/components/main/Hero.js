import React from "react";
import '../../css/style.css'


const Hero = ({ children }) => (
  <div>
  <div className="">
    <div className="">
      <div className="container">
        <br /><br />
        <h1>We Make Donating Simple</h1>
        <div className="row center">
          <h5 className="header col s12 light">Welcome to Donation Location. 
            We inspire the people to make a difference in their community 
            by connecting them with local organizations on one easy-to-use platform 
            where they can donate items to charities in their neighborhood.
        </h5>
        </div>
        <button className="row center"
          href="#" 
             id="get-started-btn" 
             >Get Started
          
        </button>
        <br /><br />
      
      </div>
    </div>
  <div className=""><img src="../../images/dolo04.jpg" alt="Unsplashed background img 1" /></div>
  </div>
    {children}
  </div>
);

export default Hero;
