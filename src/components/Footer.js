import React from 'react';
import './Footer.css';
import facebookLogo from '../files/assets/facebook.png'; 
import instagramLogo from '../files/assets/insta.png';
import ilTubo from '../files/assets/youtube.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-text">
          
          <p>Piazza San Domenico</p>
          <p>Bologna</p>
        </div>
        
        <div className="footer-logo-container"> 
          <a href="https://www.facebook.com/CampusByNight" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="footer-logo" />
          </a>
          <a href="https://www.instagram.com/_campusbynight_" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="footer-logo" />
          </a>
          <a href="https://www.youtube.com/c/CampusByNight" target="_blank" rel="noopener noreferrer">
              <img src={ilTubo} alt="Youtube" className="footer-logo" />
          </a>
      </div>
        <br></br>
        <br></br>

        <div>
        <p>CBN Nightlife Team</p>
        <p>44°29'23.7"N 11°20'39.9"E</p>

        

        </div>
      </div>
    </footer>
  );
};

export default Footer;