import React from "react";
import List from "../list/List";
import ListItem from "../list/ListItem";

const cardTable = {
  maxHeight: 645,
  overflowy: "scroll",
  overflowx: "hidden"
  }

class UserNeeds extends React.Component {
  
    render() {
      return (
    
          <div className="card is-fullwidth ">
           <header className="card-header hero is-info">
            <p className="card-header-title has-text-white">
              Your Requests
            </p>
          </header>

             
           <div className="card-user card-content">
            {this.props.needs.length ? (
                <List>
                  {this.props.needs.map(need => (
                    <ListItem key={need.id}>

            <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="http://placehold.it/128x128" alt="Your Needs" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Item:</strong> <small>{need.name}</small>
                <br />
                <small>{need.description}</small>
              </p>
            </div>
            <nav className="level">
              <div className="level-left">
                <a className="level-item needEdit"  onClick={() => this.props.editNeed(need.id)}>
                  <span className="icon is-small"><i className="edit fa fa-edit" ></i></span>Edit
                </a>
              </div>

              <div className="level-right">
              <a className="level-item needDelete"  onClick={() => this.props.deleteNeed(need.id)}>
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

export default UserNeeds;


 