import React from "react";

const DonationContainer = ({ fluid, children }) => (
   <div>
      <div className="box">
          <p className="has-text-centered is-info" id="title"><strong>Your Donations</strong></p>
          <div className="card-table">
        
          {children}
          </div>
      </div>
    </div>
);

export default DonationContainer;


 