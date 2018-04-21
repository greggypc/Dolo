import React from 'react';

const hidden = {
  visibility: hidden
}

const UserDonationForm = props => (

        <div className="card is-fullwidth" >
          <header className="card-header hero is-info">
             <p className="card-header-title has-text-white">
                Post New Donation
             </p>
          </header>
          <form id="donation-form"
                onSubmit={ event => props.handleFormSubmit(props.id, event)}>

           <div className="card-content">
              <div className="field">
                 <label className="label">Item</label>
                    <div className="control">
                       <input 
                         value={props.name}
                         onChange={props.handleInputChange} 
                         className="input"
                         name="name"  
                         type="text" 
                         id="donation-name" 
                         placeholder="Item Name"
                         />
                    </div>
               </div>

                <div className="field">
                   <label className="label">Category</label>
                   <div className="control">
                     <div className="select">
                       <select value={props.item_categoryID} 
                               onChange={props.handleInputChange}
                               className="form-control" 
                               id="donation-category"
                               name="item_categoryID">
                           <option value="">Select</option>
                           <option value="1">Food</option>
                           <option value="2">Clothes</option>
                           <option value="3">Bedding</option>
                           <option value="4">Services</option>
                           <option value="5">Furniture</option>
                           <option value="6">Electronics</option>
                           <option value="7">Pet Supplies</option>
                           <option value="8">Sports and Recreation</option>
                           <option value="9">Misc</option>

                       </select>
                     </div>
                   </div>
                 </div>
                           
                <div className="field">
                    <label className="label">Description</label>
                      <div className="control">
                        <textarea 
                          value={props.description}
                          onChange={props.handleInputChange}
                          name="description"
                          className="textarea" 
                          id="donation-description" 
                          placeholder="Item Description">
                        </textarea>
                      </div>
                  </div>
                         
                  <div className="field">
                      <label className="label">Upload Image</label>
                      <div className="file has-name is-small is-info">
                          <label className="file-label">
                            <input className="file-input" type="file" id="donation-image" name="resume" />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="fa fa-upload"></i>
                              </span>
                              <span className="file-label">
                                Choose a file…
                              </span>
                            </span>
                            <span className="file-name">
                              Screen Shot 2017-07-29 at 15.54.25.png
                            </span>
                          </label>
                        </div>
                  </div>
                            
                 <div className="level-right">

                 <a className="button is-info is-outlined is-small" href="">
                    <span className="icon">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                    <button className={props.updating === 0 ? "" : "hidden"} type="button" value="cancel" onClick={this.resetForm} >
                    {props.updating === 0 ? "Reset Form" : "Cancel Edit"}</button>
                  </a>
                  
                  <a className="button is-info is-outlined is-small" href="">
                    <span className="icon">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  <button type="submit" value="submit" >{props.updating === 0 ? "Post New Donation" : "Post Edited Donation"}</button>
                  </a>
              </div>
            </div>
           </form>
      </div>
      );

 export default UserDonationForm;