import React, { useEffect, useState } from 'react';
import './landing.css'; // Make sure this CSS file is in the same directory as Landing.tsx
import ExpandableText from '../../components/ExpandableText';
import Header from '../../components/Header';

const Landing: React.FC = () => {

  const carouselImages = [
    "/landing_slideshow/stroke-rehab-1024x683.jpg",
    "/landing_slideshow/images.jpeg",
    "/landing_slideshow/FEVYQkbb-aFr7tOnSgYFQTmgxun_W7-g.gif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 19000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
            <Header />

      {/* This div will serve as your full-screen hero section */}
      <div className="carousel">
        {carouselImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}

        <div className="carousel-content">
          <h1 className="carousel-title">In-Home Stroke Rehabilitation</h1>
          <p className="carousel-subtitle">
            combining AI and 3D printing to deliver personalized rehabilitation solutions
          </p>
        </div>
      </div>

      {/* The rest of your website content starts here, below the full-screen hero */}
      <div className="main-page-content">
        <div className='prod-info-container'>
          <div className='prod-info-text'>
            <h2 className='prod-info-title'>mRehab in home rehab system</h2>
            <ExpandableText title="Smart Phone App" content="mRehab leverages cutting-edge AI and 3D printing to provide personalized, in-home rehabilitation solutions for stroke survivors." />
            <ExpandableText title="Individualized Hardware" content="mRehab leverages cutting-edge AI and 3D printing to provide personalized, in-home rehabilitation solutions for stroke survivors." />
            <ExpandableText title="AI Powered Feedback" content="mRehab leverages cutting-edge AI and 3D printing to provide personalized, in-home rehabilitation solutions for stroke survivors." />
          </div>

          <div className='prod-info-image'>
            <img src='/kupa11.png' alt='mRehab Hardware' />
          </div>
        </div>

        <div className='effectivity-claim'> 
          <h1>Improves Motor Control By 30%</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;