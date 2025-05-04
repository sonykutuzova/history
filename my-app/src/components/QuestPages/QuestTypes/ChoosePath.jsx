// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ChoosePath.module.css';

// const ChoosePath = ({ quest }) => {
//   const [currentNodeKey, setCurrentNodeKey] = useState(quest.story.start);
//   const navigate = useNavigate();

//   const currentNode = quest.story.nodes[currentNodeKey];

//   const handleOptionClick = (nextKey) => {
//     setCurrentNodeKey(nextKey);
//   };

//   return (
//     <div className="choose-path-container">
//       <button className="back-button" onClick={() => navigate(-1)}>← Назад</button>
//       <h2 className="quest-title">{quest.title}</h2>
//       <div className="quest-node">
//         <p className="quest-text">{currentNode.text}</p>

//         {currentNode.ending ? (
//           <div className="ending-text">{currentNode.ending}</div>
//         ) : (
//           <div className="options-container">
//             {currentNode.options.map((option, index) => (
//               <button
//                 key={index}
//                 className="option-button"
//                 onClick={() => handleOptionClick(option.next)}
//               >
//                 {option.text}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChoosePath;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './ChoosePath.module.css';

const ChoosePath = ({ quest }) => {
  const [currentNodeKey, setCurrentNodeKey] = useState(quest.story.start);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const currentNode = quest.story.nodes[currentNodeKey];

  const handleOptionClick = (nextKey) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentNodeKey(nextKey);
      setIsTransitioning(false);
    }, 300);
  };

  const restartQuest = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentNodeKey(quest.story.start);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className={s.container}>
      <button className={s.backButton} onClick={() => navigate(-1)}>
        ← Назад к квестам
      </button>
      
      <div className={s.header}>
        <span className={s.era}>{quest.era}</span>
        <h1 className={s.title}>{quest.title}</h1>
        <p className={s.description}>{quest.description}</p>
      </div>

      <div className={`${s.content} ${isTransitioning ? s.fadeOut : s.fadeIn}`}>
        {!isTransitioning && (
          <>
            <div className={s.nodeContent}>
              <p className={s.nodeText}>{currentNode.text}</p>
              
              {currentNode.image && (
                <div className={s.imageContainer}>
                  <img 
                    src={currentNode.image} 
                    alt={currentNode.imageAlt || 'Иллюстрация квеста'} 
                    className={s.nodeImage}
                  />
                </div>
              )}

              {currentNode.ending ? (
                <div className={s.endingContainer}>
                  <h3 className={s.endingTitle}>
                    {currentNode.isGoodEnding ? 'Успех!' : 'Конец пути'}
                  </h3>
                  <p className={s.endingText}>{currentNode.ending}</p>
                  <button onClick={restartQuest} className={s.restartButton}>
                    Начать заново
                  </button>
                </div>
              ) : (
                <div className={s.optionsContainer}>
                  {currentNode.options.map((option, index) => (
                    <button
                      key={index}
                      className={s.optionButton}
                      onClick={() => handleOptionClick(option.next)}
                    >
                      <span className={s.optionNumber}>{index + 1}.</span>
                      {option.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChoosePath;