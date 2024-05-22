import React, { useState } from 'react';
import styles from './Header.module.css'; // Import the CSS file

function Header() {
  const [activeButton, setActiveButton] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.topHeader}>
      <img src="./photos/top-header-bg1.png" className={styles.back} alt="Background" />
      <div className={styles.navGreyBgPanel}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.brandLogo}
            src="./photos/Logo.png"
            alt="logo"
          />
          <div>
            <img
              className={styles.advertisementTop}
              src="./photos/Advertisment - Top.png"
              alt="advertisement-top"
            />
          </div>
        </div>
        <nav className={menuOpen ? styles.open : ''}>
          <ul id="top-nav-menu" className={styles.topNav}>
            <li className={styles.noSeparator}>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Home' ? styles.topNavLinkActive : ''}`}
                href="#"
                onClick={() => handleButtonClick('Home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Presenters' ? styles.topNavLinkActive : ''}`}
                href="#presenters"
                onClick={() => handleButtonClick('Presenters')}
              >
                Presenters
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Artists' ? styles.topNavLinkActive : ''}`}
                href="#downloads"
                onClick={() => handleButtonClick('Artists')}
              >
                Artists
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Blogs' ? styles.topNavLinkActive : ''}`}
                href="#blogs"
                onClick={() => handleButtonClick('Blogs')}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Relationships' ? styles.topNavLinkActive : ''}`}
                href="#relationships"
                onClick={() => handleButtonClick('Relationships')}
              >
                Relationships
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Events' ? styles.topNavLinkActive : ''}`}
                href="#events"
                onClick={() => handleButtonClick('Events')}
              >
                Events
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Contests' ? styles.topNavLinkActive : ''}`}
                href="#events"
                onClick={() => handleButtonClick('Contests')}
              >
                Contests
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Schedule' ? styles.topNavLinkActive : ''}`}
                href="#events"
                onClick={() => handleButtonClick('Schedule')}
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Downloads' ? styles.topNavLinkActive : ''}`}
                href="#downloads"
                onClick={() => handleButtonClick('Downloads')}
              >
                Downloads
              </a>
            </li>
            <li className={styles.noSeparator}>
              <a
                className={`${styles.topNavLink} ${activeButton === 'Photos' ? styles.topNavLinkActive : ''}`}
                href="#events"
                onClick={() => handleButtonClick('Photos')}
              >
                Photos
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;