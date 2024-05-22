import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-advertisement">
        <div className="advertisement-copy">Advertisement</div>
        <div className="advertisement-banner">Advertisement Space</div>
      </div>
      <nav className="footer-navbar">
        <ul className="footer-nav-inner">
          <li><a href="#">Home</a></li>
          <li><a href="#presenters">Presenters</a></li>
          <li><a href="#downloads">Artists</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#relationships">Relationships</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contests">Contests</a></li>
          <li><a href="#show">Show</a></li>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#downloads">Downloads</a></li>
          <li><a href="#photos">Photos</a></li>
        </ul>
      </nav>
      <div className="copyright-n-creator-outer">
        <div className="copyright-n-creator-inner">
          <div className="copy-right">
            Copyrights © FMBLOG 2013. All rights Reserved.
          </div>
          <div className="created-by">
            <div className="freebies">
              Developed by: Sahil Arya. For Chitkara University Academic Project.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;