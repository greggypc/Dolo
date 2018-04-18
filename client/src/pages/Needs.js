import React from "react"; 
import UserProfile from "../components/UserProfile";
import NeedsContainer from "../components/userNeeds/NeedsContainer";
import Footer from "../components/main/Footer";


//
const containerStyle = {
  paddingTop:35
};

class Needs extends React.Component {

  render() {
    return (
    <div style={containerStyle} className="container">
      <div className="columns">
      <div className="column is-one-quarter">
        <UserProfile />
       </div>

      <NeedsContainer />
      </div> 
      <Footer />
    </div>
    )
  }
  
};
  

export default Needs;

