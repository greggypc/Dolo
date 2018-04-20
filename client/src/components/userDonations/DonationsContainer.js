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
      id: "",
      type: "material",
      uid: "3",
      updating: null
    };
    
      
      componentDidMount() {
        this.setState({
          updating: 0
           });
        this.loadDonations();
      }

    loadDonations = () => {
      // temporary hard coded to uid 3
      API.getDonations(this.state.uid)
          .then(res =>
            this.setState({ donations: res.data })
          )
      .catch(err => console.log(err));
    };

    // handle any changes to the input fields
    handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    //Set the state for the appropriate input field
    this.setState({
    [name]: value
     });
    //  console.log(this.state.name+this.state.description+this.state.id+this.state.item_categoryID);
     };

    handleFormSubmit = (id,event) => {
      console.log(this.state.name);
      console.log(this.state.item_categoryID);
      console.log("it editing, id is: " + this.state.id);
      console.log(this.state.description);
      
      event.currentTarget.reset();
      event.preventDefault();
     
      // if user provided a name abd desc
      if (this.state.name || this.state.description) {

        // if updaing is false - must be a new entry - write it to db and reload use donations
        if (!this.state.updating) {
        API.saveDonation({
          name: this.state.name,
          description: this.state.description,
          item_categoryID: parseInt(this.state.item_categoryID),
          type: "material",
          uid: 3
        })
          .then(res => this.loadDonations())
          .catch(err => console.log(err));          
      } else {
         // else set updating back to false 
        // and post updated donation to db and reload all user donations
        this.setState({updating: 0});
        API.updateDonation({
          id: this.state.id,
          name: this.state.name,
          description: this.state.description,
          item_categoryID: parseInt(this.state.item_categoryID),
        })
          .then (res => this.loadDonations())
      } return;
    };  
    {alert("fill in all data!");}
  };

    editDonation = id => {
      API.getDonation(id)
        .then(res => this.setState({name: res.data.name, description: res.data.description, 
                                    item_categoryID: res.data.item_categoryID, id: res.data.id, updating: 1}))
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
              editDonation={this.editDonation} 
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
              id={this.state.id}
              loadDonations={this.loadDonations}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              editDonations={this.editDonations} 
            />
            </div> 
            </React.Fragment>           
          
        )
  }
};

export default DonationsContainer;


 