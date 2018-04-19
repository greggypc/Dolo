import React from "react";

const ListItem = props => (
  <div className="column is-one-third">
    {props.children}
  </div>
);

export default ListItem;