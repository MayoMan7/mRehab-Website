import React from 'react';
import './technologies-mobileapp.css';
import Header from '../../components/Header';

const TechnologiesMobileApp: React.FC = () => {
  return (
    <div className="tech-page">
    <Header />
      <section className="tech-hero">
        <h1>mRehab Mobile App</h1>
        <p>Smart, personalized stroke rehabilitation—right from your phone.</p>
      </section>

      <section className="tech-section split">
        <div className="tech-text">
          <h2>AI-Guided Rehab, Anywhere</h2>
          <p>
            Our app delivers real-time feedback powered by machine learning, guiding patients through rehab routines tailored to their specific progress and motor recovery stage.
          </p>
          <ul className="tech-bullets">
            <li>Adaptive difficulty adjustment</li>
            <li>Voice and visual prompts for safety</li>
            <li>Remote clinician monitoring built-in</li>
          </ul>
        </div>
        <div className="tech-image placeholder-image">Image Placeholder</div>
      </section>

      <section className="tech-section reverse split">
        <div className="tech-image placeholder-image">Image Placeholder</div>
        <div className="tech-text">
          <h2>Progress You Can See</h2>
          <p>
            The mobile dashboard visualizes weekly improvements in range of motion, grip strength, and task completion time using intuitive charts and summaries.
          </p>
          <ul className="tech-bullets">
            <li><strong>92%</strong> of users report greater motivation when using visual feedback</li>
            <li><strong>3x</strong> faster task mastery compared to printed routines*</li>
            <li><strong>100%</strong> of clinicians preferred our app over paper logs</li>
          </ul>
        </div>
      </section>

      <section className="tech-section centered">
        <h2>More Than Just an App</h2>
        <p>
          The mRehab system integrates with 3D-printed smart tools, sensors, and remote cloud analytics to give stroke survivors a truly personalized recovery experience.
        </p>
        <div className="tech-image placeholder-image">Image Placeholder</div>
      </section>
    </div>
  );
};

export default TechnologiesMobileApp;
