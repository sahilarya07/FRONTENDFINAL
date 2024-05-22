import React from 'react';
import './Advertisment.css'

const Advertisement = () => {
  return (
    <div className="adv-banner-wrap">
      <div className="adv-banner">
        <div className="s-advertisment">Advertisement</div>
        <div className="s-space">Space</div>
        <div className="s-size">250 x 250</div>
      </div>
      <div className="adv-banner">
        <div className="s-advertisment">Advertisement</div>
        <div className="s-space">Space</div>
        <div className="s-size">250 x 250</div>
      </div>
    </div>
  );
};

export default Advertisement;