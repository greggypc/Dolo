import React from "react"; 
import UserProfile from "../components/UserProfile";
import DonationsContainer from "../components/userDonations/DonationsContainer";
import Footer from "../components/main/Footer";


//
const containerStyle = {
  paddingTop:35
};

class Donations extends React.Component {

  render() {
    return (
    <div style={containerStyle} className="container">
      <div className="columns">
      <div className="column is-one-quarter">
        <UserProfile />
       </div>

      <DonationsContainer />

      </div> 
      
      <Footer />
    </div>
    )
  }
  
};
  

export default Donations;

