import React from "react";

export default function Risk(props) {
  return (
    <div className="risk-container">
      <div className="risk-name">{props.name}</div>
      <div className="risk-desc">{props.desc}</div>
    </div>
  );
}
