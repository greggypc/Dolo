import React from 'react';
import ListSearch from "../list/ListSearch";
import ListSearchItem from "../list/ListSearchItem";

const cardSize = {
  width: 350,
  marginTop: 50,
  boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.3)"
  }

const cardContent = {
padding: 10
}

const wrapCards = {

  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
}


const SearchDonationsBody = props => {
  return (
   <React.Fragment>
   <div className="container">
          <p class="title is-3 has-text-info is-centered">Search Category: {props.currrentCategory}</p>
          <p class="subtitle is-5 is-centered"> There are {props.donationsByCategory.length} items available.</p>
     <div style={wrapCards}>
  
    {props.donationsByCategory.length ? (
     
       <ListSearch>
         {props.donationsByCategory.map(donation => (
           <ListSearchItem key={donation.id}>
     
    <div style={cardSize} className="card">
    <div className="card-image">
    <figure className="image is-4by3">
     <img src="https://www.givingtuesday.org/sites/default/files/2017-12/MyGivingStory_logo_1920x1080_white-letter.jpg"  alt="Placeholder image" />
    </figure>
    </div>
    <div className="card-content">
        
    </div>
    <div style={cardContent} className="content">
     <h3>{donation.name}</h3>
     {donation.description} <a>@username</a>
     <a href="#"> | Metro</a> <a href="#">| Zip Code</a>
     <br />
     <strong>Posted: {donation.createdAt}</strong>
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
      <h1 className="title">
        What do you need?
      </h1>
      <h2 className="subtitle">
        Select a Category above to search for available donations.
      </h2>
      
        </div>
      </div>
      
        )}
        
</div>

<br /> <br /> <br /> <br />
<br /> <br />
</div>
      </React.Fragment>

)
};

export default SearchDonationsBody;