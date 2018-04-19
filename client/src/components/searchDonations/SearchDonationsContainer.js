import React from 'react';
import API from "../../utils/APIsearchDonations";
import ListSearch from "../list/ListSearch";
import ListSearchItem from "../list/ListSearchItem";

class SearchDonationsContainer extends React.Component {
  state = {
    needs: [],
    name: "",
    description: "",
    item_categoryID: "6",
    id: "",
    uid: "3"
  };

  componentDidMount() {
    this.loadNeeds();
  }


  loadNeeds = () => {
    // temporary hard coded to item_categoryID 6
    API.getDonations(6)
        .then(res =>
          this.setState({ needs: res.data })
        )
    .catch(err => console.log(err));
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    console.log(this.state.needs);

    //Set the state for the appropriate input field
    this.setState({
    [name]: value
     });
     };
  
  
  render() {
    return (
      <div>
      <div className="select is-medium">
			    <select id='categorySelect' className='categorySelectStandard'>
            <option value=''>All Categories</option>
            <option  value='1'>Animal Care and Services</option>
            <option  value='2'>Arts and Culture</option>
            <option  value='3'>Basic Needs</option>
            <option  value='4'>Community/Capacity Building</option>
            <option  value='5'>Education</option>
            <option  value='6'>Environment</option>
            <option  value='7'>Health Care</option>
            <option  value='8'>Human Services</option>
            <option  value='9'>Sports and Recreation</option>
			    </select>
			</div>
    <br /><br />
    <div className="columns">
    {/* <div className="column is-one-fifth"> */}
    {this.state.needs.length ? (
                <ListSearch>
                  {this.needs.map(need => (
                    <ListSearchItem key={need.id}>

<div className="card">
 <div className="card-image">
   <figure className="image is-4by3">
     <img src="https://re-mm-assets.s3.amazonaws.com/product_photo/23242/large_Product6406216_1471502516.jpg?1524069837714"  alt="Placeholder image" />
   </figure>
 </div>
 <div className="card-content">
  
   </div>
   <div className="content">
     <h3>{need.name}</h3>
     {need.description} <a>@username</a>.
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
              <h1>No Results to Display</h1>
            )}
            
    </div>

   </div>
      

    )
  }
};

export default SearchDonationsContainer;