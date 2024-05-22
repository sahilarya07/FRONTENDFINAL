import React from 'react';
import './Box.css'

const Box = () => {
  return (
    <div id="blogs" className="listen-fmblog-wrapper">
      <div className="listen-heading">Listen to <span>FM</span>BLOG</div>
      <div className="listen-inner-wrapper">
        <div className="mike-icon">
          <img className="mike-img" src="./photos/mike-img.png" alt="" />
        </div>
        <div className="about-listen-wrap">
          {"Easy fm is giving you the chance to become a radio presenter for a day! Listen to 'real radio' between 2 & 4pm on easy fm to find out how other people are their impressing the nation with their talents! To participate, text the words 'Real Radio' and your name to 5474 on Safaricom or Zain."}
        </div>
      </div>
    </div>
  );
};

export default Box;