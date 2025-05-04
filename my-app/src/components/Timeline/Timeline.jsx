import React from 'react';
import { timelineData } from './TimelineData';
import TimelineItem from './TimelineItem';
import s from './Timeline.module.css';

const Timeline = () => {
  return (
    <section id="timeline" className={s.timelineSection}>
      <div className={s.container}>
        <h2>Исторические эпохи</h2>
        <p className={s.sectionDescription}>Выберите период, который вас интересует</p>
        
        <div className={s.timeline}>
          {timelineData.map((item) => (
            <TimelineItem
              key={item.id}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;