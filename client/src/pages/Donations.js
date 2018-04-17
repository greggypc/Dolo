import React from "react"; 

//import API from "../utils/APIdonations";
// import Container from "../components/grid/Container";
// import Row from "../components/grid/Row";
// import Col from "../components/grid/Col";
import UserProfile from "../components/UserProfile";
import DonationsContainer from "../components/userDonations/DonationsContainer";
import UserDonationForm from "../components/userDonations/UserDonationForm";
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

      <div className="column is-one-half">
       <DonationsContainer/>
      </div>
      

       <div className="column is-one-quarter">
          <UserDonationForm />
        </div>
      </div>
      
      <Footer />
    </div>
    )
  }
  
};
  

export default Donations;

