import React from "react";
//import "./List.css";

const cardTable = {
  maxHeight: 645,
  overflowy: "scroll",
  overflowx: "hidden"
  }

const List = ({ children }) => {
  return (
   <React.Fragment >

      {children}

    </React.Fragment>
  );
};

export default List;
