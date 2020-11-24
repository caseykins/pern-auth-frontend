import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className="footerHead">SATIRE</h1>
      <div className="footerNav">
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Get Involved</a>
        <a>Privacy Policy</a>
        <a>The Problem</a>
        <a>The Solution</a>
      </div>
      <div className="socials">
        <img id="fb" src="https://i.imgur.com/ozH7a5D.png" alt="" />
        <img id="ig" src="https://i.imgur.com/ieto9uW.png" alt="" />
        <img id="twitter" src="https://i.imgur.com/qb0vRvP.png" alt="" />
      </div>
    </div>
  )
} 

export default Footer;
