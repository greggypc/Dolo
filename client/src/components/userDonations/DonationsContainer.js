import React from "react";
//import { List, ListItem } from "../list";
import API from "../../utils/APIdonations";
import UserDonations from "./UserDonations";
import UserDonationForm from "./UserDonationForm";

const cardTable = {
  maxHeight: 470,
  overflowY: "scroll",
  overflowX: "hidden"
  }

class DonationsContainer extends React.Component {
    state = {
      donations: [],
      name: "",
      description: "",
      item_categoryID: "",
      type: "material",
      id: "",
      uid: "3",
      updating: false
    };
      
      componentDidMount() {
        this.loadDonations();
      }

    loadDonations = () => {
      // temporary hard coded to uid 3
      API.getDonations(3)
          .then(res =>
            this.setState({ donations: res.data, name: "", description: "", item_categoryID: "", type: "", id: "", uid: "" })
          )
      .catch(err => console.log(err));
    };

    // handle any changes to the input fields
    handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    console.log(this.state.donations);

    //Set the state for the appropriate input field
    this.setState({
    [name]: value
     });
     };

    handleFormSubmit = event => {
      console.log(this.state.name);
      console.log(this.state.item_categoryID);
      event.preventDefault();
  
      if (this.state.name && this.state.description) {
        API.saveDonation({
          name: this.state.name,
          description: this.state.description,
          item_categoryID: parseInt(this.state.item_categoryID),
          type: "material",
          uid: 3
        })
          .then(res => this.loadDonations())
          .catch(err => console.log(err));
      }
    };  

    editDonation = id => {
      API.editDonation(id)
        .then(res => this.handleInputChange())
        .catch(err => console.log(err));
    };

    deleteDonation = id => {
      API.deleteDonation(id)
        .then(res => this.loadDonations())
        .catch(err => console.log(err));
    };


      render() {
        return (
            <React.Fragment>
         
            <div className="column is-one-half" >
            <div className="card is-fullwidth ">
            <header className="card-header hero is-info">
            <p className="card-header-title has-text-white">
              Your Donations
            </p>
          </header>
          <div style={cardTable}>
              <UserDonations
              donations={this.state.donations}
              loadDonations={this.loadDonations}
              editDonations={this.editDonations} 
              deleteDonation={this.deleteDonation} 
            />
            </div>
            </div>
            </div>




             <div className="column is-one-quarter">
              <UserDonationForm 
              name={this.state.name}
              description={this.state.description}
              item_categoryID={this.state.item_categoryID}
              type={this.state.type}
              uid={this.state.uid}
              loadDonations={this.loadDonations}
              handleFormSubmit={this.handleFormSubmit}
              editDonations={this.editDonations} 
            />
            </div> 
            </React.Fragment>           
          
        )
  }
};

export default DonationsContainer;


 