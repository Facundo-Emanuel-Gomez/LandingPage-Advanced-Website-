import React from "react";
import {Footer, Blog, Possibility,Features,WhatReact,Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatReact/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
