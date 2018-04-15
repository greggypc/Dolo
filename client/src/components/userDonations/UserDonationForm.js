import React from 'react';
import Row from "../grid/Row";
import Col from "../grid/Col";


class UserDonationForm extends React.Component {


  render() {
    return (
     
     <div >
                <div className="card is-fullwidth" >
                  <form id="donation-form">
                    <header className="card-header hero is-info">
                      <p className="card-header-title has-text-white">
                          Post New Donation
                      </p>
                    </header>
                      <div className="card-content">
                       
                          <div className="field">
                              <label className="label">Item</label>
                              <div className="control">

                                <input className="input" type="text" id="donation-name" placeholder="Item Name" />

                              </div>
                            </div>

                           <div className="field">
                                    <label className="label">Category</label>
                                    <div className="control">
                                      <div className="select">
                                        <select className="form-control" id="donation-category">
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
                                      <textarea className="textarea" id="donation-description" placeholder="Textarea"></textarea>
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
                            <button  id="submit">Post</button>
                          </a>
                        </div>
                      </div>
                    </form>
                </div>
              </div>
 
    );
  }
  
 }

 export default UserDonationForm;