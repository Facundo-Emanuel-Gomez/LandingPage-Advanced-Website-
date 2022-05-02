import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="react_cta">
      <div className="react_cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="react_cta-btn">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://es.reactjs.org/docs/getting-started.html";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
