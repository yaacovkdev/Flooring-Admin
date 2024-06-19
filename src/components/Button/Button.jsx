import React from "react";
import "./Button.scss";

export default function Button({ text, type }) {

  const button_color = [
    ".button-blue"
  ];

  return (
    <div className="default-button">
      <div className="default-shadow">
        
      </div>
      <button type="submit">
        {text}
      </button>
    </div>
  );
}
