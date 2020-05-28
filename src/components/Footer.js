import React from 'react';
import '../styles/components/Footer.styl';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="Footer-logo LOGO">
        <Logo klass="footer" />
        <p>@ 2018 Deck</p>
        <p>Component based UI Kit</p>
      </div>
      <div className="Footer-links LINKS">
        <a href="https://github.com/Razielini" className="TECH">
          TECHNOLOGY
        </a>
        <a href="https://github.com/Razielini" className="IDEA">
          IDEAS
        </a>
        <a href="https://github.com/Razielini" className="LEADER">
          LEADERSHIP
        </a>
        <a href="https://github.com/Razielini" className="VIDEO">
          VIDEO
        </a>
        <a href="https://github.com/Razielini" className="NEW">
          NEWS
        </a>
        <a href="https://github.com/Razielini" className="FINAN">
          FINANCE
        </a>
        <a href="https://github.com/Razielini" className="ENTER">
          ENTERTAINMENT
        </a>
      </div>
      <div className="Footer-newsletter NEWSLETTER">
        <p>
          Follow Us:
          <span>
            <img alt="facebook" src="../resources/imgs/facebook.png" />
          </span>
          <span>
            <img alt="instagram" src="../resources/imgs/instagram.png" />
          </span>
          <span>
            <img alt="pinterest" src="../resources/imgs/pinterest.png" />
          </span>
          <span>
            <img alt="twitter" src="../resources/imgs/twitter.png" />
          </span>
        </p>
        <div>
          <input placeholder="Your Email" />
          <button type="button">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
