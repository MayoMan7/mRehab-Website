import React from 'react';
import Header from '../../components/Header';
import './WhyItMatters.css';

const WhyItMatters: React.FC = () => {
  return (
    <div className="why-page">
      <Header />

      {/* Hero Section */}
      <section className="why-hero">
        <h1>Why mRehab Matters</h1>
        <p>Revolutionizing recovery. Restoring independence. Reaching everyone.</p>
      </section>

      {/* Problem Overview */}
      <section className="why-section split">
        <div className="why-text">
          <h2>Stroke Recovery Is Broken</h2>
          <p>
            Every year, millions of stroke survivors are discharged with generic rehab plans and little follow-up. 
            Physical therapy sessions are expensive, hard to access, and rarely personalized.
          </p>
          <ul className="why-facts">
            <li>Only <strong>30%</strong> of stroke patients complete full outpatient therapy</li>
            <li><strong>1 in 4</strong> suffer another stroke due to incomplete recovery</li>
            <li><strong>$17B+</strong> is lost annually due to poor rehab outcomes</li>
          </ul>
        </div>
        <div className="problem-image">
            <img src="/why-it-matters/problem.png" alt="Problem Overview" />
        </div>
      </section>

      {/* Our Mission */}
      <section className="why-section reverse split">
        <div className="mission-image">
            <img src="/why-it-matters/mission.png" alt="Mission Overview" />
        </div>
        <div className="why-text">
          <h2>Our Mission: Equity Through Innovation</h2>
          <p>
            mRehab was created to make recovery accessible, affordable, and intelligent. 
            By combining mobile technology, AI, and 3D-printed smart tools, we bring effective therapy directly into the hands of those who need it most.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="why-section centered">
        <h2>What Makes mRehab Different</h2>
        <div className="feature-grid">
          <div className="feature-block">
            <h3>Precision Rehab</h3>
            <p>AI adapts each session to the user's recovery curve in real time.</p>
          </div>
          <div className="feature-block">
            <h3>Ultra-Affordable Tools</h3>
            <p>Our 3D-printed devices cost under <strong>$15</strong>, a fraction of traditional rehab tools.</p>
          </div>
          <div className="feature-block">
            <h3>Remote Monitoring</h3>
            <p>Clinicians can view patient data and adjust routines from anywhere.</p>
          </div>
          <div className="feature-block">
            <h3>Inclusive by Design</h3>
            <p>Our tools are modeled after everyday objects to remove learning barriers.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="why-cta">
        <h2>We’re not just building an app. We’re rebuilding access to recovery.</h2>
        <p>Join us in making stroke rehab smarter, cheaper, and more human.</p>
      </section>
    </div>
  );
};

export default WhyItMatters;
