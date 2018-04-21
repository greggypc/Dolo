import React from 'react';

const message = {
    position: "absolute",
    zIndex: 101,
    top: 0,
    left: 0,
    right: 0,
    background: "#fde073",
    textAlign: "center",
    lineHeight: 2.5,
    overflow: "hidden"
    // -webkit-box-shadow: 0 0 5px black
    // -moz-box-shadow:    0 0 5px black
    // box-shadow:         0 0 5px black
}

const hidden = {
  visibility: hidden
}

const Message = props => (
  <div className="message">
    {props.name} has been added to your donations!<a id="close">[close]</a>
  </div>
      
);

 export default Message;