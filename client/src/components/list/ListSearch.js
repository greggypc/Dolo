import React from "react";
//import "./List.css";

const cardTable = {
  maxHeight: 645,
  overflowy: "scroll",
  overflowx: "hidden"
  }

const List = ({ children }) => {
  return (
   <div class="column is-one-fifth">

      {children}

    </div>
  );
};

export default List;
