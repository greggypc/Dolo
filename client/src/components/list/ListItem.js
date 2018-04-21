import React from "react";

const boxShadow = {
  boxShadow: "0 5px 8px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)"
}

const ListItem = props => (
  <li className="box" style={boxShadow}>
    {props.children}
  </li>
);

export default ListItem;