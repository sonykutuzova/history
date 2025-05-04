import React from 'react';
import s from './Features.module.css';
import 'animate.css'; // подключаем библиотеку анимаций

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={`${s.featureCard} animate__animated`} >
      <div className={s.featureIcon}>{icon}</div>
      <h3 className={s.featureTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;