import React from 'react';
import API from "../../utils/APIsearchDonations";

import SearchDonationsHeader from "./SearchDonationsHeader";
import SearchDonationsBody from './SearchDonationsBody';



class SearchDonationsContainer extends React.Component {
  state = {
    donationsByCategory: [],
    item_categoryID: "",
    id: "",
    uid: "3"
  };

  // componentDidMount() {
  //   this.loadDonationByCategory();
  // }


  loadDonationByCategory = (id) => {
    API.getDonationsByCategory(id)
        .then(res =>
          this.setState({ needs: res.data })
        )
    .catch(err => console.log(err));
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    console.log(this.state.item_categoryID);

    //Set the state for the appropriate input field
    this.setState({
    [name]: value
     });
     const id = this.state.item_categoryID;
     this.loadDonationByCategory(id);
     };
  
  
  render() {
    return (
      <React.Fragment>
      <SearchDonationsHeader   
        handleInputChange={this.handleInputChange}
      />

      <SearchDonationsBody 
        donationsByCategory={this.state.donationsByCategory}
        item_categoryID={this.state.item_categoryID}
        id={this.state.id}
        uid={this.state.uid}
        loadNeeds={this.loadNeeds}
        handleInputChange={this.handleInputChange}
      />
  
   </React.Fragment>
 

    )
  }
};

export default SearchDonationsContainer;