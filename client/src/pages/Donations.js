import React from "react"; 
import UserProfile from "../components/UserProfile";
import DonationsContainer from "../components/userDonations/DonationsContainer";
import Footer from "../components/main/Footer";


//
const containerStyle = {
  paddingTop:35,
  paddingBottom:35
};

class Donations extends React.Component {

  render() {
    return (
    <React.Fragment>
    <div style={containerStyle} className="container">
      <div className="columns">
      <div className="column is-one-quarter">
        <UserProfile />
       </div>

      <DonationsContainer />

      </div> 
    </div>
    <Footer />
    </React.Fragment>
    )
  }
  
};
  

export default Donations;

