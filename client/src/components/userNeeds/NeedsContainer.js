import React from "react";
//import { List, ListItem } from "../list";
import API from "../../utils/APIneeds";
import UserNeeds from "./UserNeeds";
import UserNeedForm from "./UserNeedForm";



class NeedsContainer extends React.Component {
    state = {
      needs: [],
      name: "",
      description: "",
      item_categoryID: "",
      type: "material",
      id: "",
      uid: "3",
      updating: false
    };
      
      componentDidMount() {
        this.loadNeeds();
      }

    loadNeeds = () => {
      // temporary hard coded to uid 3
      API.getNeeds(3)
          .then(res =>
            this.setState({ needs: res.data, name: "", description: "", item_categoryID: "", type: "", id: "", uid: "" })
          )
      .catch(err => console.log(err));
    };

    // handle any changes to the input fields
    handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    console.log(this.state.needs);

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
        API.saveNeed({
          name: this.state.name,
          description: this.state.description,
          item_categoryID: parseInt(this.state.item_categoryID),
          type: "material",
          uid: 3
        })
          .then(res => this.loadNeeds())
          .catch(err => console.log(err));
      }
    };  

    editNeeds = id => {
      API.editNeed(id)
        .then(res => this.handleInputChange())
        .catch(err => console.log(err));
    };

    deleteNeed = id => {
      API.deleteNeed(id)
        .then(res => this.loadNeeds())
        .catch(err => console.log(err));
    };


      render() {
        return (
            <React.Fragment>
            <div className="column is-one-half">
              <UserNeeds
              needs={this.state.needs}
              loadNeeds={this.loadNeeds}
              editNeeds={this.editNeeds} 
              deleteNeed={this.deleteNeed} 
            />
            </div>

             <div className="column is-one-quarter">
              <UserNeedForm 
              name={this.state.name}
              description={this.state.description}
              item_categoryID={this.state.item_categoryID}
              type={this.state.type}
              uid={this.state.uid}
              loadNeeds={this.loadNeeds}
              handleFormSubmit={this.handleFormSubmit}
              editNeeds={this.editNeeds} 
            />
            </div> 
            </React.Fragment>           
          
        )
  }
};

export default NeedsContainer;


 