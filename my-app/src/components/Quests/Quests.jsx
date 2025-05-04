import React from 'react';
import { questsData } from './QuestsData';
import QuestCard from './QuestCard';
import s from './Quests.module.css';

const Quests = () => {
  return (

    <section id="quests" className={s.questsSection}>
      <div className={s.container}>
        <h2>Наши квесты</h2>
        <p className={s.sectionDescription}>Выберите один из увлекательных исторических маршрутов</p>
        
        <div className={s.questsScrollContainer}>
          <div className={s.questsContainer}>
            {questsData.map(quest => (
              <QuestCard 
                key={quest.id}
                id={quest.id}
                era={quest.era}
                title={quest.title}
                description={quest.description}
                duration={quest.duration}
                difficulty={quest.difficulty}
                isPopular={quest.isPopular}
                isNew={quest.isNew}
                isRecommended={quest.isRecommended}
                image={quest.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quests;



