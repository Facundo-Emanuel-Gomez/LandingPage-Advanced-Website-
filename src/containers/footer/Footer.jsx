import React from 'react'
import './footer.css';
import reactLogo from '../../assets/reactLogo.png'
const Footer = () => {
  return (
    <div className='react_footer section_padding'>
      <div className='react_footer-heading'>
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='react_footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='react_footer-links'>
        <div className='react_footer-links_logo'>
          <img src={reactLogo} alt="logo" />
          <p>Advanced React Website 2345, All Rights Reserved</p>
        </div>
        <div className='react_footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='react_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='react_footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>3512324702</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='react_footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
