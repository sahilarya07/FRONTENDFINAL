import React, { useState } from 'react';
import './Section1.css';

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogItems = [
    {
      imgSrc: "./photos/blog-img.png",
      title: "The early breakfast with Gladys Gachanja",
      timing: "5 am - 6 am",
      about: "Wake up early with Gladys every morning and you're guaranteed inspiration.."
    },
    {
      imgSrc: "./photos/marcus.png",
      title: "Listen, laugh & learn with Marcus & Munene",
      timing: "6 am - 10 am",
      about: "It's fun, inspirational & motivational. With relationship advice from a qualified.."
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogItems.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blogItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="section-hero">
      <div className="container mid-wrapper">
        <div className="mid-left">
          <div className="banner-section">
            <div className="banner-img-grup">
              <img src="/photos/banner-img.png" alt="" className="banner-img" />
              <div className="banner-overlay">
                <div className="overlay-heading">
                  No one ever promised you an easy life.
                </div>
                <div className="overlay-info">
                  But there's one radio station that does promise you easy
                  listening. But there's one radio station that does promise
                  you easy listening. But there's one radio station that does
                  promise you easy listening.
                </div>
                <div className="overlay-viewall">
                  <a href="#" className="viewall-link">View all</a>
                </div>
              </div>
            </div>
            <div className="banner-blog">
              <div className="blog-arrow" onClick={handlePrevClick}>

              </div>
              <div className="blog-columns">
                <div className="blog-img-section">
                  <div className="blog-img">
                    <img src={blogItems[currentIndex].imgSrc} alt="" />
                  </div>
                </div>
                <div className="blog-info">
                  <div className="blog-title">
                    {blogItems[currentIndex].title}
                  </div>
                  <div className="blog-timing">{blogItems[currentIndex].timing}</div>
                  <div className="about-blog">
                    {blogItems[currentIndex].about}
                  </div>
                </div>
              </div>
              <div className="blog-arrow" onClick={handleNextClick}>
               
                <button  className="arrowbutton3">
                  Previous
                </button>
                <button className="arrowbutton2">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;