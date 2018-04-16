import React from "react";
//import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="box">
      <ul>
        {children}
      </ul>
    </div>
  );
};
