import React from 'react';
import './FeatureSection.css';

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // flip image/text order
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = '',
  reverse = false
}) => {
  return (
    <section className={`feature-section ${reverse ? 'reverse' : ''}`}>
      <div className="feature-text">
        <h2 className="feature-title">{title}</h2>
        {subtitle && <h3 className="feature-subtitle">{subtitle}</h3>}
        <p className="feature-description">{description}</p>
      </div>
      {imageSrc && (
        <div className="feature-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
