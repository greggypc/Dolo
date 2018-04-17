import React from "react";
import List from "../list/List";
import ListItem from "../list/ListItem";

const cardTable = {
  maxHeight: 645,
  overflowy: "scroll",
  overflowx: "hidden"
  }

class UserDonations extends React.Component {
  
    render() {
      return (
    
          <div className="card is-fullwidth ">
           <header className="card-header hero is-info">
            <p className="card-header-title has-text-white">
              Your Donations
            </p>
          </header>

             
           <div className="card-user card-content">
            {this.props.donations.length ? (
                <List>
                  {this.props.donations.map(donation => (
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
                <strong>Item:</strong> <small>{donation.name}</small>
                <br />
                <small>{donation.description}</small>
              </p>
            </div>
            <nav className="level">
              <div className="level-left">
                <a className="level-item donationEdit"  onClick={() => this.props.editDonation(donation.id)}>
                  <span className="icon is-small"><i className="edit fa fa-edit" ></i></span>Edit
                </a>
              </div>

              <div className="level-right">
              <a className="level-item donationDelete"  onClick={() => this.props.deleteDonation(donation.id)}>
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

export default UserDonations;


 