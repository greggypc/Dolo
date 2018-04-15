import React from "react";

const UserProfile = ({ children }) => (
  <div>
       <div className="card is-fullwidth ">
           <header className="card-header hero is-info">
               <p className="card-header-title has-text-white">
                   Welcome Friend!
               </p>
             </header>
         <div className="card-content">
           <a className="card-avatar">
             <img src="assets/img/user.png" className="card-avatar-img" id="avatar" />
           </a>
           <br />
           <div className="card-user">
             <div className="card-user-name" id="name">
               <a className="user-name"></a>
             </div>
             <div className="card-user-city" id="city">
                 <a className="user-city"></a>
               </div>
               <div className="card-user-state" id="state" placeholder="TX">
                   <a className="user-state" placeholder="TX"></a>
                 </div>
           </div>
         </div>
       </div>
       <br />
       <div className="spacer"></div>
       <div className="card is-fullwidth">
         <header className="card-header hero is-info">
           <p className="card-header-title has-text-white">
             <strong>Contact: </strong>
           </p>
         </header>
         <div className="card-content">
         <p><a href="#">Email: </a><small><span className="user-email"></span></small></p>
         <p><a href="#">Phone: </a><small><span className="user-phone"></span></small></p>
         <p><a href="#">Street: </a><small><span className="user-street"></span></small></p>
         <p><a href="#">City: </a><small><span className="user-city"></span></small></p>
         <p><a href="#">State: </a><small><span className="user-state"></span></small></p>
         <p><a href="#">Zip: </a><small><span className="user-zip"></span></small></p>
         <p><a href="#">Social: </a><small>facebook.com</small></p>
         </div>
       </div>
     </div>

  )

export default UserProfile;
