import React from 'react';
import './Twitter.css';

const Twitter = () => {
  return (
    <div className="twitter-blog-wrapper">
      <div className="twitter-logo">
        <img src="/photos/twitter-logo.png" alt="" />
      </div>
      <div className="twitter-info-links">
        Mobile Boilerplate: a best practice baseline for your mobile Web app - <a href="http://bit.ly/dRJO9f">http://bit.ly/dRJO9f</a>
      </div>
      <div className="twitter-info-links">
        Dummy text dropdo: a quick and simple file viewer online - <a href="http://dropdo.com">http://dropdo.com</a>
      </div>
      <div className="follow-us-logo">
        <img src="/photos/follow-us-logo.png" alt="" />
      </div>
    </div>
  );
};

export default Twitter;