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
             <img src="https://i1.wp.com/cdn.auth0.com/avatars/gr.png?ssl=1" className="card-avatar-img" alt="Profile Pic" id="avatar" />
           </a>
           <br />
           <div className="card-user">
             <div className="card-user-name" id="name">
               <a className="user-name">Hi Greg!</a>
             </div>
             
           </div>
         </div>
       </div>
       <br />
       <div className="spacer"></div>
       <div className="card is-fullwidth">
         <header className="card-header hero is-info">
           <p className="card-header-title has-text-white">
             <strong>Your Information</strong>
           </p>
         </header>
         <div className="card-content">
         <p><a href="">Email: </a><small><span className="user-email">greg@gmail.com</span></small></p>
         <p><a href="">Phone: </a><small><span className="user-phone">(512) 963-5050</span></small></p>
         <p><a href="">Street: </a><small><span className="user-street">1234 Main St</span></small></p>
         <p><a href="">City: </a><small><span className="user-city">Austin</span></small></p>
         <p><a href="">State: </a><small><span className="user-state">TX</span></small></p>
         <p><a href="">Zip: </a><small><span className="user-zip">78701</span></small></p>
         <p><a href="">Total Giving: </a>$86.75</p>
         </div>
       </div>
     </div>

  )

export default UserProfile;
