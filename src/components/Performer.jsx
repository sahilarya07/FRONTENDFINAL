import React, { useState } from 'react';
import './Performer.css';

const Performer = () => {
  const performers = [
    {
      image: '/photos/presenter-img.png',
      title: 'Performer of the month heading text',
      content: 'iTunes for theatre service marks a pivotal switch for an otherwise, traditional profession. iTunes for theatre service marks a pivotal switch for an otherwise, traditional profession.',
    },
    {
      image: '/photos/large-banner.png',
      title: 'Alternate Performer of the month heading text',
      content: 'Alternate content for the performer of the month. This is another description for the alternate performer.',
    },
  ];

  const [currentPerformer, setCurrentPerformer] = useState(0);

  const nextPerformer = () => {
    setCurrentPerformer((prev) => (prev + 1) % performers.length);
  };

  return (
    <div className="performer-container">
      <div className="horizontal-separator">
        <img src="/photos/drop-shadow-img.png" alt="Separator" />
      </div>
      <div id="performers" className="performer-section">
        <div className="heading-wrapper">
          <div className="heading-arrow">
            <img src="/photos/arrow-icon.png" alt="Arrow Icon" />
          </div>
          <div className="tab-heading">
            Performer <span> of the Month</span>
          </div>
        </div>
        <div className="performer-wrapper-outer">
          <div className="performer-wrapper-inner">
            <div className="performer-image">
              <img
                src={performers[currentPerformer].image}
                alt="Performer"
                className="performer-img"
              />
            </div>
            <div className="performer-info">
              <div className="performer-title">
                {performers[currentPerformer].title}
              </div>
              <div className="performer-content">
                {performers[currentPerformer].content}
              </div>
            </div>
          </div>
          <div className="arrow-button">
  <button onClick={nextPerformer}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#ffffff" transform="rotate(180 12 12)" d="M14 7l-5 5 5 5V7z"/>
  <path d="M0 0h24v24H0z" fill="none"/>
</svg>
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default Performer;