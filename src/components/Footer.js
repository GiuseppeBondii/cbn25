import React from 'react';
import './Footer.css';
import facebookLogo from '../files/assets/facebook.png'; 
import instagramLogo from '../files/assets/insta.png';
import ilTubo from '../files/assets/youtube.png';

// Import dei loghi sponsor
import agrinet from '../files/PNG_sponsor_2025/agrinet.png';
import aura from '../files/PNG_sponsor_2025/aura.png';
import bankToBe from '../files/PNG_sponsor_2025/bank to be.png';
import camplus from '../files/PNG_sponsor_2025/camplus.png';
import colligo_inverted_text from '../files/PNG_sponsor_2025/colligo_inverted_text.png';
import diGiovanni from '../files/PNG_sponsor_2025/di giovanni.png';
import illumia from '../files/PNG_sponsor_2025/illumia.png';
import instantDeveloper from '../files/PNG_sponsor_2025/instant developer.png';
import iuxteam from '../files/PNG_sponsor_2025/iuxteam.png';
import nier from '../files/PNG_sponsor_2025/nier.png';
import papylla from '../files/PNG_sponsor_2025/papylla.png';
import reabilita from '../files/PNG_sponsor_2025/reabilita.png';
import ricciParrulli from '../files/PNG_sponsor_2025/ricci parrulli.png';
import teddy from '../files/PNG_sponsor_2025/teddy.png';
import thResorts from '../files/PNG_sponsor_2025/th resorts.png';
import yomax from '../files/PNG_sponsor_2025/yomax.png';

const Footer = () => {
  const sponsorLogos = [
    { src: agrinet, alt: 'Agrinet' },
    { src: aura, alt: 'Aura' },
    { src: bankToBe, alt: 'Bank To Be' },
    { src: camplus, alt: 'Camplus' },
    { src: colligo_inverted_text, alt: 'Colligo' },
    { src: diGiovanni, alt: 'Di Giovanni' },
    { src: illumia, alt: 'Illumia' },
    { src: instantDeveloper, alt: 'Instant Developer' },
    { src: iuxteam, alt: 'IUX Team' },
    { src: nier, alt: 'Nier' },
    { src: papylla, alt: 'Papylla' },
    { src: reabilita, alt: 'Reabilita' },
    { src: ricciParrulli, alt: 'Ricci Parrulli' },
    { src: teddy, alt: 'Teddy' },
    { src: thResorts, alt: 'TH Resorts' },
    { src: yomax, alt: 'Yomax' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-text">
          <p>2025's Sponsor</p>
        </div>
        
        <div className="footer-logo-container">
          {sponsorLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="footer-logo" />
          ))}
        </div>

        <br/>
        <br/>
                <br/>
        <br/>

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

                <br/>
        <br/>        <br/>

        <div >
          <p>
            CBN Nightlife Team <br />
            yaGogihGoicorF S.P.A
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
