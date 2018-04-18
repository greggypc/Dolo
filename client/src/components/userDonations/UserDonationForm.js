import React from 'react';

const UserDonationForm = props => (

     
        <div className="card is-fullwidth" >
          <header className="card-header hero is-info">
             <p className="card-header-title has-text-white">
                Post New Donation
             </p>
          </header>
          <form id="donation-form"
                onSubmit={ event => props.handleFormSubmit(props.id, event) }  >

           <div className="card-content">
              <div className="field">
                 <label className="label">Item</label>
                    <div className="control">
                       <input className="input"
                         name="name"  
                         type="text" 
                         id="donation-name" 
                         placeholder="Item Name"
                         defaultValue={props.name}
                         onChange={props.handleInputChange} />
                    </div>
               </div>

                <div className="field">
                   <label className="label">Category</label>
                   <div className="control">
                     <div className="select">
                       <select className="form-control" id="donation-category"
                         name="item_categoryID" 
                         defaultValue={props.item_categoryID} onChange={ props.handleInputChange}>
                           <option value="1">Clothes</option>
                           <option value="2">Food</option>
                           <option value="3">Furniture</option>
                           <option value="4">Containers</option>
                           <option value="5">Bedding</option>
                           <option value="6">Electronics</option>
                       </select>
                     </div>
                   </div>
                 </div>
                           
                <div className="field">
                    <label className="label">Description</label>
                      <div className="control">
                        <textarea 
                          name="description"
                          className="textarea" 
                          id="donation-description" 
                          placeholder="Textarea"
                          defaultValue={props.description}
                          onChange={props.handleInputChange}>
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
                  <button type="submit" value="submit" >Post</button>
                  </a>
              </div>
            </div>
           </form>
      </div>
      )

 export default UserDonationForm;