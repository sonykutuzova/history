import React from 'react';
import { Link } from 'react-router-dom';
import s from './Timeline.module.css';

const TimelineItem = ({ date, title, description }) => {
  return (
    <div className={`${s.timelineItem} timelineItem`}>
      <div className={s.timelineDate}>{date}</div>
      <div className={s.timelineContent}>
        <h3 className={s.timelineContentH}>{title}</h3>
        <p className={s.timelineContentDesc}>{description}</p>
        <a className={s.btnSmall}>
          Квесты периода
        </a>
      </div>
    </div>
  );
};

export default TimelineItem;