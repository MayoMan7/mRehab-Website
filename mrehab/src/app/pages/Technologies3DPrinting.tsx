import React from 'react';
import './Technologies3DPrinting.css';

const Technologies3DPrinting: React.FC = () => {
  return (
    <div className="tech3d-page">
      <section className="tech3d-hero">
        <h1>3D Printing for Personalized Rehabilitation</h1>
        <p>Custom tools. Lower cost. Designed for real life.</p>
      </section>

      <section className="tech3d-section split">
        <div className="tech3d-text">
          <h2>Tailored to Each Patient</h2>
          <p>
            Every stroke recovery is different. That’s why our 3D-printed rehab devices are made to fit each individual’s grip, range of motion, and task-specific needs.
          </p>
          <ul className="tech3d-bullets">
            <li>Adapted to hand size, dexterity, and goals</li>
            <li>Iterated quickly with digital modeling</li>
            <li>Delivered alongside app-based training</li>
          </ul>
        </div>
        <div className="tech3d-image placeholder-image">Image Placeholder</div>
      </section>

      <section className="tech3d-section reverse split">
        <div className="tech3d-image placeholder-image">Image Placeholder</div>
        <div className="tech3d-text">
          <h2>A Fraction of the Cost</h2>
          <p>
            Traditional rehabilitation devices often cost hundreds of dollars. Our 3D-printed tools cost just <strong>$10–15</strong> to produce.
          </p>
          <ul className="tech3d-bullets">
            <li><strong>93% cheaper</strong> than comparable commercial rehab tools*</li>
            <li>Designed for low-cost mass or on-demand printing</li>
            <li>Shipped flat-packed or printed locally</li>
          </ul>
        </div>
      </section>

      <section className="tech3d-section split">
        <div className="tech3d-text">
          <h2>Inspired by Daily Objects</h2>
          <p>
            Rehab shouldn’t feel foreign. Our tools are based on real-life tasks—like opening a jar, using a cup, or grabbing a handle—making therapy practical and relatable.
          </p>
          <ul className="tech3d-bullets">
            <li>Builds confidence through familiar shapes</li>
            <li>Encourages repetition with purpose</li>
            <li>Helps transfer skills into everyday living</li>
          </ul>
        </div>
        <div className="tech3d-image placeholder-image">Image Placeholder</div>
      </section>

      <section className="tech3d-section centered">
        <h2>Rehab, Reimagined</h2>
        <p>
          3D printing gives us speed, flexibility, and creativity. From prototyping to production, mRehab uses additive manufacturing to turn recovery into something personal—and possible—for everyone.
        </p>
        <div className="tech3d-image placeholder-image">Image Placeholder</div>
      </section>
    </div>
  );
};

export default Technologies3DPrinting;
