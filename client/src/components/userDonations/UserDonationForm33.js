import React from 'react';
import API from "../../utils/APIdonations";
import DonationsContainer from "./DonationsContainer";

class UserDonationForm extends React.Component {

  state = {
    name: "",
    description: "",
    item_categoryID: "1",
    type: "material",
    uid: "3"
  };

  // handle any changes to the input fields
  handleInputChange = event => {
  // Pull the name and value properties off of the event.target (the element which triggered the event)
  const { name, value } = event.target;

  //Set the state for the appropriate input field
  this.setState({
  [name]: value
   });
   };

   componentDidMount() {
    console.log(this.state.uid);
    console.log(this.state.item_categoryID);
  }

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

  render() {
    return (
     
     <div >
        <div className="card is-fullwidth" >
         <form id="donation-form">
          <header className="card-header hero is-info">
             <p className="card-header-title has-text-white">
                Post New Donation
             </p>
          </header>
           <div className="card-content">
              <div className="field">
                 <label className="label">Item</label>
                    <div className="control">
                       <input className="input"
                         name="name"  
                         type="text" 
                         id="donation-name" 
                         placeholder="Item Name"
                         value={this.state.name}
                         onChange={this.handleInputChange} />
                     </div>
               </div>

                <div className="field">
                   <label className="label">Category</label>
                   <div className="control">
                     <div className="select">
                       <select className="form-control" id="donation-category"
                         ref="selectCategory" name="item_categoryID" 
                         value={this.state.item_categoryID} onChange={ event => this.handleInputChange(event)}>
                           <option value="1">Clothes</option>
                           <option value="2">Food</option>
                           <option value="3">Furniture</option>
                           <option value="4">Containers</option>
                           <option value="5">Bedding</option>
                           <option value="6">Electronics</option>
                       </select>
                     </div>
                   </div>
                 </div>
                           
                <div className="field">
                    <label className="label">Description</label>
                      <div className="control">
                        <textarea 
                          name="description"
                          className="textarea" 
                          id="donation-description" 
                          placeholder="Textarea"
                          value={this.state.description}
                          onChange={this.handleInputChange}>
                        </textarea>
                      </div>
                  </div>
                         
                  <div className="field">
                      <label className="label">Upload Image</label>
                      <div className="file has-name is-small is-info">
                          <label className="file-label">
                            <input className="file-input" type="file" id="donation-image" name="resume" />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="fa fa-upload"></i>
                              </span>
                              <span className="file-label">
                                Choose a file…
                              </span>
                            </span>
                            <span className="file-name">
                              Screen Shot 2017-07-29 at 15.54.25.png
                            </span>
                          </label>
                        </div>
                  </div>
                            
                 <div className="level-right">
                  <a className="button is-info is-outlined is-small" href="">
                    <span className="icon">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  <button onClick={ this.handleFormSubmit }  id="submit">Post</button>
                  </a>
              </div>
            </div>
           </form>
         </div>
       </div>
 
    );
  }
  
 }

 export default UserDonationForm;