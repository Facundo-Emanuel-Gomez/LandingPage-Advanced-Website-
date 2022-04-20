import React from "react";
import "./header.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="react_header section_padding" id="home">
      <div className="react_header-content">
        <h1 className="gradient_text">
          Let's build something amazing with REACT library
        </h1>
        <p>React helps you easily create interactive user interfaces. Design simple views for each state in your app, and React will efficiently update and render the right components when data changes.</p>
        <div className="react_header-content_input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started</button>
        </div>
        <div className="react_header-content_people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="react_header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
