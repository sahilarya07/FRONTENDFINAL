import React from 'react';
import './Bottomright.css'

const BottomRight = () => {
  return (
    <div className="bottom-right">
      <div className="large-adv-banner">
        <div className="adv-label">advertisment</div>
        <div className="large-banner-img">
          <img className="large-img" src="/photos/large-banner.png" alt="" />
          <div className="adv-overlay-1"><span>Advertisement</span></div>
          <div className="adv-overlay-2"><span>Space 300 * 250</span></div>
        </div>
      </div>
    </div>
  );
};

export default BottomRight;