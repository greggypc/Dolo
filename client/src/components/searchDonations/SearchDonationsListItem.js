import React from "react";
import List from "../list/List";
import ListItem from "../list/ListItem";

export const SearchDonationsListItem = props=> {
  return (
  <div>
  
  {props.needs.length ? (
    <List>
      {props.donations.map(donation => (
        <ListItem key={donation.id}>



<div class="card">
 <div class="card-image">
   <figure class="image is-4by3">
     <img src="https://re-mm-assets.s3.amazonaws.com/product_photo/23242/large_Product6406216_1471502516.jpg?1524069837714"  alt="Placeholder image" />
   </figure>
 </div>
 <div class="card-content">
   
   </div>

   <div class="content">
     <h3>{props.name}</h3>
     {props.description} <a>@username</a>.
     <a href="#">#css</a> <a href="#">#responsive</a>
     <br />
     <strong>createdAt</strong>
   </div>
   <footer class="card-footer">
   <a href="#" class="card-footer-item">Request Info</a>
   <a href="#" class="card-footer-item">Claim</a>
 </footer>
 </div>

      </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

    </div>
    )
  };

export default SearchDonationsListItem;