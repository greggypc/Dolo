import React from 'react';
import ListSearch from "../list/ListSearch";
import ListSearchItem from "../list/ListSearchItem";

const cardSize = {
  width: 350,
  marginTop: 50
  }

const cardContent = {
padding: 10
}

const wrapCards = {

  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
}


const SearchDonationsBody = props => (
   <React.Fragment>
   <div className="container" >

<div style={wrapCards}>
{props.donationsByCategory.length ? (
   <ListSearch>
     {props.donationsByCategory.map(donation => (
       <ListSearchItem key={donation.id}>

<div style={cardSize} className="card">
<div className="card-image">
<figure className="image is-4by3">
 <img src="http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/9/42476429-1-f.jpg"  alt="Placeholder image" />
</figure>
</div>
<div className="card-content">

</div>
<div style={cardContent} className="content">
 <h3>{donation.name}</h3>
 {donation.description} <a>@username</a>
 <a href="#">#css</a> <a href="#">#responsive</a>
 <br />
 <strong>createdAt</strong>
</div>
<footer className="card-footer">
<a href="#" className="card-footer-item">Request Info</a>
<a href="#" className="card-footer-item">Claim</a>
</footer>


</div>
</ListSearchItem>
))}
          </ListSearch>
        ) : (
    <div className="hero is-light is-mobile">
      <div className="container has-text-centered is-info" id="hero-margin">
      <h1 class="title">
        What do you need?
      </h1>
      <h2 class="subtitle">
        Select a Category above to search for available donations.
      </h2>
        </div>
      </div>
        )}
        
</div>


</div>
      </React.Fragment>

);

export default SearchDonationsBody;