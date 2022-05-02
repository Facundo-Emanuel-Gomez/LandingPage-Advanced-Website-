/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Feature } from '../../components';
import './whatReact.css';

const WhatREACT = () => {
  return (
    <div className='react_whatreact section_margin' id='wreact'>
      <div className='react_whatreact-feature'>
       <Feature title='What is React' text="It is an open source JavaScript library for developing user interfaces. It was launched in 2013 and developed by Facebook, who also currently maintain it alongside a community of independent developers and companies"/>
      </div>
      <div className='react_whatreact-heading'>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p><a href='https://es.reactjs.org'>Explore The Library</a></p>
      </div>
      <div className='react_whatreact-container'>
        <Feature title="Chatbots" text="With react you can create chatbots that interact with the user and improve your skills with the library."/>
        <Feature title="Knowledgebase" text="Learn the basics of react to be able to develop platforms and websites in more complex and dynamic ways."/>
        <Feature title="Education" text="The most important element of React is the component, which is, in essence, a piece of the user interface. As a general rule, when designing an application with React, what we are doing is creating independent and reusable components to gradually create more complex user interfaces."/>
      </div>
    </div>
  )
}

export default WhatREACT
