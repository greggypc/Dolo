import React from "react";
//import "./List.css";

const cardTable = {
  maxHeight: 645,
  overflowy: "scroll",
  overflowx: "hidden"
  }

export const List = ({ children }) => {
  return (
    <div style={cardTable}>
      <ul>
        {children}
      </ul>
    </div>
  );
};
