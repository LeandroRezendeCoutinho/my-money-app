import React from "react";

export default props => (
  <li style={{ color: "white" }}>
    <a href={props.path}>
      <i className={`fa fa-${props.icon}`}></i>{props.label}
    </a>
  </li>
)