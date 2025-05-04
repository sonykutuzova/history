import React from 'react';
import FeatureCard from './FeatureCard';
import s from './Features.module.css';
import FeaturesData from './FeaturesData';

const Features = () => {
  return (
    <section id="features" className={`${s.section} ${s.featuresSection}`}>
        <div className={s.container}>
            <h2>Наши возможности</h2>
            
            <div className={s.featuresGrid}>
                {FeaturesData.map((feature, index) => (
                <FeatureCard 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;