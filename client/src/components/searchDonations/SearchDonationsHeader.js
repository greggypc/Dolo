import React from 'react';

const SearchDonationsHeader = props => (
   <React.Fragment>
      <div className="hero is-info is-mobile">
      <div className="container has-text-centered is-info" id="hero-margin">
      <h1 className="title">
            Donation Search
          </h1>
          <h2 className="subtitle">
              Search for donations posted in your local area.
          </h2>
      <div className="select is-medium">
        <form>
		<select value={props.item_categoryID} 
             onChange={props.handleInputChange}
             name="item_categoryID"
             id="categorySelect" 
             className="categorySelectStandard">
                <option value="">Select</option>
                <option value="1">Food</option>
                <option value="2">Clothes</option>
                <option value="3">Bedding</option>
                <option value="4">Services</option>
                <option value="5">Furniture</option>
                <option value="6">Electronics</option>
                <option value="7">Pet Supplies</option>
                <option value="9">Sports and Recreation</option>
                <option value="8">Misc</option>
		</select>
        </form>
	  </div>
      </div>
      </div>
      </React.Fragment>

);

export default SearchDonationsHeader;