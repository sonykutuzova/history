import React, { useState } from 'react';
import FeaturesData from './FeaturesData';
import s from './Features.module.css';
import HistoricalMap from './HistoricalMap';
import FeatureTimeline from './FeatureTimeline';
import { questsData } from '../Quests/QuestsData';
import InterestingMaterials from './Materials';


const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const renderFeatureContent = () => {
    switch(activeFeature) {
      case 'Интерактивная карта':
        return (
          <div className={s.featureContent}>
            <h3>Интерактивная карта</h3>
            <div className={s.mapPlaceholder}>
              <HistoricalMap />
            </div>
          </div>
        );
      case 'Временная шкала':
        return (
          <div className={s.featureContent}>
            <h3>Временная шкала</h3>
            <FeatureTimeline quests={questsData} /> {/* Передаем массив квестов */}
          </div>
        );
      case 'Интересные материалы':
        return (
          <div className={s.featureContent}>
            <h3>Интересные материалы</h3>
            <InterestingMaterials />
          </div>
        );
        
      case 'Достижения':
        return (
          <div className={s.featureContent}>
            <h3>Система достижений</h3>
            <div className={s.achievements}>
            <p className={s.achievement}>В награду за прохождение квестов вы получаете от нас уважение и благодарность</p>
            </div>
          </div>
        );
      default:
        return (
          <div className={s.defaultContent}>
            <h3>Выберите интересующую вас возможность</h3>
            <p>Нажмите на одну из карточек слева, чтобы увидеть подробности</p>
          </div>
        );
    }
  };

   return (
    <section id="features" className={s.featuresSection}>
      <div className={s.container}>
        <h2>Наши возможности</h2>
        <div className={s.featuresWrapper}>
          <div className={s.featuresGrid}>
            {FeaturesData.map((feature, index) => (
              <div 
                key={index}
                className={`${s.featureCard} ${activeFeature === feature.title ? s.active : ''}`}
                onClick={() => setActiveFeature(feature.title)}
              >
                <span className={s.featureIcon}>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className={s.contentArea}>
            <div className={s.contentScrollWrapper}>
              {renderFeatureContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;