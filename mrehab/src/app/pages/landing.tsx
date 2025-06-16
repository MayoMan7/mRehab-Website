import React from 'react';
import './landing.css'; // Make sure this CSS file is in the same directory as Landing.tsx
import ExpandableText from '../../components/ExpandableText';

const Landing: React.FC = () => {
  return (
    <>
      {/* This div will serve as your full-screen hero section */}
      <div className="carousel"> {/* Renamed from .carasoul to .carousel for consistency, you can stick to .carasoul if you prefer */}
        {/* The background image */}
        <img
          className="carousel-image"
          src="/landing_slideshow/stroke-rehab-1024x683.jpg" // Ensure this path is correct
          alt="Rehabilitation Scene" // Use a more descriptive alt text for accessibility
        />

        {/* Content overlaid on the image */}
        <div className="carousel-content">
          <h1 className="carousel-title">In-Home Stroke Rehabilitation</h1>
          <p className="carousel-subtitle">
           combining AI and 3D printing to deliver personalized rehabilitation solutions
          </p>
          {/* Optional: Add a scroll-down indicator like the arrow */}
          <div className="scroll-down-indicator">
            &#x2193; {/* Unicode down arrow */}
          </div>
        </div>
      </div>

      {/* The rest of your website content starts here, below the full-screen hero */}
      <div className="main-page-content">
        <div className='prod-info-container'>
            <div className='prod-info-text'></div>
                <h2 className='prod-info-title'>mRehab in home rehab system</h2>
                <ExpandableText
                title="Smart Phone App"
                content="mRehab leverages cutting-edge AI and 3D printing to provide personalized, in-home rehabilitation solutions for stroke survivors."
                 />
                <ExpandableText
                title="Individualzied Hardware"
                content="mRehab leverages cutting-edge AI and 3D printing to provide personalized, in-home rehabilitation solutions for stroke survivors."
                />
                <ExpandableText
                title="AI Powered Feedback"
                content="mRehab leverages cutting-edge AI and 3D printing to provide personalized, in-home rehabilitation solutions for stroke survivors."
                />

            <div className='prod-info-image'></div>
        </div>
      </div>
    </>
  );
};

export default Landing;