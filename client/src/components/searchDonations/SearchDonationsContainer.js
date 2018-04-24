import React from 'react';
import API from "../../utils/APIsearchDonations";
import SearchDonationsHeader from "./SearchDonationsHeader";
import SearchDonationsBody from './SearchDonationsBody';


class SearchDonationsContainer extends React.Component {
  state = {
    donationsByCategory: [],
    name: "",
    description: "",
    item_categoryID: null,
    currentCategory: "",
    id: "",
    uid: ""
  };

  // componentDidMount() {
  //   this.loadDonationsByCategory();
  // }

    // handle any changes to the input fields
    handleInputChange = event => {
      // Pull the name and value properties off of the event.target (the element which triggered the event)
      const { name, value } = event.target;
      console.log(this.state.item_categoryID + " anything?");
  
      //Set the state for the appropriate input field
      this.setState({ item_categoryID: parseInt(value), currrentCategory:parseInt(value)}, this.loadDonationsByCategory);
       console.log(this.state.item_categoryID); 
       };

    loadDonationsByCategory = () => {
      API.getDonationsByCategory(this.state.item_categoryID)
          .then(res =>
            this.setState({ donationsByCategory: res.data }, this.resetSelect)
          )
      .catch(err => console.log(err));
    };
  
  
    resetSelect = () => {
     this.setState({
       item_categoryID: ""
     });
     }
  
  
  render() {
    return (
      <React.Fragment>
      <SearchDonationsHeader 
        item_categoryID={this.state.item_categoryID}  
        handleInputChange={this.handleInputChange}
      />

      <SearchDonationsBody 
        donationsByCategory={this.state.donationsByCategory}
        name={this.state.name}
        description={this.state.description}
        item_categoryID={this.state.item_categoryID}
        currrentCategory={this.state.currrentCategory}
        id={this.state.id}
        loadDonationsByCategory={this.loadDonationsByCategory}
        handleInputChange={this.handleInputChange}
      />
      
  
   </React.Fragment>
 

    )
  }
};

export default SearchDonationsContainer;