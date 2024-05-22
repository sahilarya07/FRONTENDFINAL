import React, { useState } from 'react';
import './BottomSection.css'

const BottomSection = () => {
  const [activeButton, setActiveButton] = useState('Music');

  const [cards, setCards] = useState([
    {
      img: "/images/news1.png",
      content: "Three strikes net rule has been proposed in a front against illegal music file sharing."
    },
    {
      img: "/images/church.png",
      content: "The Catholic Church opens its door in the Vatican, to a flood of discontented Anglicans."
    },
    {
      img: "/images/increase-in-game.png",
      content: "An increase in game addiction is attributed to a wide spread break down in social interaction."
    },
    {
      img: "/images/jenson-bond.png",
      content: "Jenson Button triumphant in Formula 1 after what can only be described as a shaky start."
    },
    {
      img: "/images/bi-cycle.png",
      content: "iTunes for theatre service marks a pivotal switch for an otherwise, traditional profession."
    },
    {
      img: "/images/big-idea.png",
      content: "Professor jailed for stealing and selling skulls from a series of burial grounds in China."
    }
  ]);

  const handleTabClick = (index, tabName) => {
    const newCards = [...cards];
    const temp = newCards[0];
    newCards[0] = newCards[index];
    newCards[index] = temp;
    setCards(newCards);
    setActiveButton(tabName);
  };

  return (
    <section className="bottom-section">
      <div className="bottom-inner">
        <div className="bottom-left">
          <div id="events" className="content-tabs-wrapper">
            <div className="heading-wrapper">
              <div className="tab-heading">Latest</div>
              <div className="heading-arrow">
                <img src="/photos/arrow-icon.png" alt="" />
              </div>
            
            </div>
            <div className="album-tabs-wrap">
              <div className="tabs-buttons">
                <button 
                  className={`tab-btn ${activeButton === 'Showbiz' ? 'active-tab-btn' : ''}`} 
                  onClick={() => handleTabClick(1, 'Showbiz')}
                >
                  Showbiz
                </button>
                <button 
                  className={`tab-btn ${activeButton === 'Music' ? 'active-tab-btn' : ''}`} 
                  onClick={() => handleTabClick(0, 'Music')}
                >
                  Music
                </button>
                <button 
                  className={`tab-btn ${activeButton === 'Funny' ? 'active-tab-btn' : ''}`} 
                  onClick={() => handleTabClick(2, 'Funny')}
                >
                  Funny
                </button>
              </div>
              <div className="tabs-content">
  {cards.map((card, index) => (
    <div className="tabs-content-card" key={index}>
      <div className="tab-img-div">
        {index === 0 && <img src="/photos/image1.png" alt="" className="card-img" />}
        {index === 1 && <img src="/photos/image2.png" alt="" className="card-img" />}
        {index === 2 && <img src="/photos/image3.png" alt="" className="card-img" />}
        {index === 3 && <img src="/photos/image4.png" alt="" className="card-img" />}
        {index === 4 && <img src="/photos/image5.png" alt="" className="card-img" />}
        {index === 5 && <img src="/photos/image6.png" alt="" className="card-img" />}
      </div>
      <div className="tab-card-content">
        <span>{card.content}</span>
      </div>
      <div className="tab-card-button-wrap">
        <div className="button-arrow">
          <img src="/photos/arrow-icon.png" alt="" />
        </div>
        <button className="tab-card-button">read more</button>
         </div>
         </div>
         ))}
        </div>
               
        </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default BottomSection;