import React from "react";
import "./square.css";

const Square = props => (
  <div className="square btn btn-primary" onClick={props.onClick}>
    <div className="content">
      {props.value}
    </div>
  </div>
);

export default Square;
