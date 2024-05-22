import React from 'react';
import './Ringtone.css';
import arrowIcon from '/photos/arrow-icon.png';

const Ringtone = () => {
  return (
    <div className="ringtone-poll-wrapper">
      <div className="ringtone-wrap">
        <div className="heading-wrapper">
          <div className="heading-arrow">
            <img src={arrowIcon} alt="Arrow Icon" />
          </div>
          <div className="tab-heading">
            Get <span>Ringtones</span>
          </div>
        </div>
        <div className="ringtone-template">
          {[1, 2, 3].map((_, index) => (
            <div className="light-grey-card" key={index}>
              <div className="ringtone-name">
                Ringtone Name <span className="rn-black">In </span>
                <span className="rn-light-blue"> Hiphop</span>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, starIndex) => (
                  <svg viewBox="0 0 24 24" width="10" height="10" key={starIndex}>
                    <path
                      d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"
                    />
                  </svg>
                ))}
              </div>
              <div className="downloads-n-button">
                15,472 downloads
                <div className="play-button-wrap">
                  <button className="play-button">
                    <svg viewBox="0 0 24 24" width="25" height="10" fill="currentColor">
                      <path
                        d="M19.749,9.464,5,.048V23.989L19.743,14.54a3,3,0,0,0,.006-5.076Z"
                      />
                    </svg>
                  </button>
                  <button className="play-button">Download</button>
                </div>
              </div>
            </div>
          ))}
          <div className="view-all-button">
            <div className="button-arrow">
              <img src={arrowIcon} alt="Arrow Icon" />
            </div>
            <a href="#" className="view-all">View All</a>
          </div>
        </div>
      </div>
      <div className="poll-ques-wrap">
        <div className="heading-wrapper">
          <div className="heading-arrow">
            <img src={arrowIcon} alt="Arrow Icon" />
          </div>
          <div className="tab-heading">Poll <span>Question</span></div>
        </div>
        <div className="poll-template">
          <div className="light-grey-card">
            Whats your favourite Gadget ?
          </div>
          <div className="poll-radio-inputs">
            <div className="input-wrap">
              <input
                type="radio"
                name="gadget"
                id="camera"
                className="poll-input"
              />
              <label className="input-label" htmlFor="camera">Camera</label>
            </div>
            <div className="input-wrap">
              <input
                type="radio"
                name="gadget"
                id="laptop"
                className="poll-input"
              />
              <label className="input-label" htmlFor="laptop">Laptop</label>
            </div>
            <div className="input-wrap">
              <input
                type="radio"
                name="gadget"
                id="mpplayer"
                className="poll-input"
              />
              <label className="input-label" htmlFor="mpplayer">MP3 Player</label>
            </div>
            <div className="input-wrap">
              <input
                type="radio"
                name="gadget"
                id="mobile-cell"
                className="poll-input"
              />
              <label className="input-label" htmlFor="mobile-cell">Mobile/Cell</label>
            </div>
          </div>
          <div className="poll-submit-button">
            <div className="button-arrow">
              <img src={arrowIcon} alt="Arrow Icon" />
            </div>
            <button className="poll-submit">Submit</button>
            <a href="#" className="previous-poll"> Previous Polls</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ringtone;