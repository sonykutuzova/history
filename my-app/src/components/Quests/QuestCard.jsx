import React from 'react';
import s from './Quests.module.css';
import { Link } from 'react-router-dom';


const QuestCard = ({id, era, title, description, duration, difficulty, isPopular, image, isNew, isRecommended }) => {
  return (
    <div className={s.questCard}>
      <div className={s.questImg} style={{ 
          backgroundImage: `url(${image})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}> 
        <span className={s.questEra}>{era}</span>
        {isPopular && <div className={s.questBadge}>Популярный</div>}
        {isNew && <div className={s.questBadge}>Новый</div>}
        {isRecommended && <div className={s.questBadge}>Рекомендуем</div>}
      </div>
      <div className={s.questContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={s.questMeta}>
          <span className={s.questDuration}>⏱️ {duration}</span>
          <span className={s.questDifficulty}>{'★'.repeat(difficulty)}{'☆'.repeat(5-difficulty)}</span>
        </div>
        {/* <button className={s.btnSmall}>Начать квест</button> */}
        <Link to={`/quest/${id}`} className={s.btnSmall}>Начать квест</Link>
      </div>
    </div>
  );
};

export default QuestCard;