import React from "react";
import List from "../list/List";
import ListItem from "../list/ListItem";


const UserDonations = props => {
  
  return (
           
           <div className="card-user card-content">
            {props.donations.length ? (
                <List>
                  {props.donations.map(donation => (
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
                <a className="level-item donationEdit"  onClick={() => props.editDonation(donation.id)}>
                  <span className="icon is-small"><i className="edit fa fa-edit" ></i></span>Edit
                </a>
              </div>

              <div className="level-right">
              <a className="level-item donationDelete"  onClick={() => props.deleteDonation(donation.id)}>
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
    )
  };

export default UserDonations;


 