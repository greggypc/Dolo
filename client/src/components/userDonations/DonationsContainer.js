import React from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";
import { List, ListItem } from "../list";
import API from "../../utils/APIdonations";


class DonationsContainer extends React.Component {
    state = {
      donations: [],
      name: "",
      description: "",
      category: "",
      type: "",
      id: "",
      uid: ""
    };
      
      componentDidMount() {
        this.loadDonations();
      }
    
      loadDonations = () => {
        // temporary hard coded to uid 3
        API.getDonations(3)
            .then(res =>
              this.setState({ donations: res.data, name: "", description: "", category: "" })
            )
        .catch(err => console.log(err));
      };

      deleteDonation = id => {
        API.deleteDonation(id)
          .then(res => this.loadDonations())
          .catch(err => console.log(err));
      };




    //   loadDonations = () => {
    //     // temporary hard coded to uid 3
    //     axios.get('/api/donations/3')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   };



      render() {
        return (
            
            <div className="card is-fullwidth ">
           <header className="card-header hero is-info">
               <p className="card-header-title has-text-white">
                   Your Donations
               </p>
             </header>

             
           <div className="card-user card-content">
            {this.state.donations.length ? (
                <List>
                {this.state.donations.map(donation => (
                  <ListItem key={donation.id}>

            <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="http://placehold.it/128x128" alt="Your Donation" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Item:</strong> <small>{donation.name}</small><small >1m</small>
                <br />
                <small>{donation.description}</small>
              </p>
            </div>
            <nav className="level">
              <div className="level-left">
                <a className="level-item donationEdit"  onClick={() => this.editDonation(donation.id)}>
                  <span className="icon is-small"><i className="edit fa fa-edit" ></i></span>Edit
                </a>
              </div>

              <div className="level-right">
              <a className="level-item donationDelete"  onClick={() => this.deleteDonation(donation.id)}>
                <span className="icon is-small"><i className="fa fa-trash"></i></span>Delete
              </a>
              </div>
            </nav>
          </div>
        </article>

        </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
        </div>
        
        )
  }
};

export default DonationsContainer;


 