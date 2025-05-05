import React from 'react';
import { Link } from 'react-router-dom';
import s from './FeatureTimeline.module.css';

const FeatureTimeline = ({ quests }) => {
  // Группируем квесты по эпохам
  const eras = {
    'Петровская эпоха': [],
    'Екатерининская эпоха': [],
    'XIX век': [],
    'Серебряный век': [],
    'Советский период': []
  };

  // Заполняем квестами (предполагается, что у каждого квеста есть поле 'era')
  quests.forEach(quest => {
    if (eras[quest.eraForTimeline]) {
      eras[quest.eraForTimeline].push(quest);
    }
  });

//   return (
//     <div className={s.timeline}>
//       {Object.entries(eras).map(([era, eraQuests], index) => (
//         <div key={era} className={s.timelineEra}>
//           <div className={s.timelineMarker}></div>
//           <div className={s.timelineContent}>
//             <h3 className={s.eraTitle}>{era}</h3>
//             {eraQuests.length > 0 ? (
//               <div className={s.questsList}>
//                 {eraQuests.map(quest => (
//                   <Link 
//                     to={`/quest/${quest.id}`} 
//                     key={quest.id} 
//                     className={s.questLink}
//                   >
//                     <span className={s.questIcon}>🗺️</span>
//                     {quest.title}
//                   </Link>
//                 ))}
//               </div>
//             ) : (
//               <p className={s.noQuests}>Квесты в разработке</p>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
return (
    <div className={s.timeline}>
      {Object.entries(eras).map(([era, eraQuests]) => (
        <div key={era} className={s.eraBlock}>
          <h3 className={s.eraTitle}>{era}</h3>
          <div className={s.questsContainer}>
            {eraQuests.map(quest => (
              <Link 
                to={`/quest/${quest.id}`} 
                key={quest.id}
                className={s.questCard}
              >
                <span className={s.questIcon}>🗺️</span>
                <span className={s.questTitle}>{quest.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureTimeline;