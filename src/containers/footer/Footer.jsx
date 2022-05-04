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
          <h4>Last Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
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
          <p>Crechterwoord</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='react_footer-copyright'>
        <p>© 2022-Facundo Gomez. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
