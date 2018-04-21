import React from 'react';

const SearchNeedsHeader = props => (
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
                <option value="1">Animal Care and Services</option>
                <option value="2">Arts and Culture</option>
                <option value="3">Basic Needs</option>
                <option value="4">Community/Capacity Building</option>
                <option value="5">Education</option>
                <option value="6">Environment</option>
                <option value="7">Health Care</option>
                <option value="8">Human Services</option>
                <option value="9">Sports and Recreation</option>
		</select>
        </form>
	  </div>
      </div>
      </div>
      </React.Fragment>

);

export default SearchNeedsHeader;