import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './ChoosePath.module.css';

const ChoosePath = ({ quest }) => {
  const [currentNodeKey, setCurrentNodeKey] = useState(quest.story.start);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState(new Set([quest.story.start]));
  const navigate = useNavigate();

  const currentNode = quest.story.nodes[currentNodeKey];

  const handleOptionClick = (nextKey) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentNodeKey(nextKey);
      setVisitedNodes(prev => new Set([...prev, nextKey]));
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
        <div className={s.headerContent}>
          <span className={s.era}>{quest.era}</span>
          <h1 className={s.title}>{quest.title}</h1>
          <p className={s.description}>{quest.description}</p>
        </div>
      </div>

      <div className={`${s.content} ${isTransitioning ? s.fadeOut : s.fadeIn}`}>
        {!isTransitioning && (
          <div className={s.nodeContainer}>
            {/* Прогресс-бар */}
            <div className={s.progressBar}>
              <div 
                className={s.progressFill} 
                style={{ width: `${(visitedNodes.size / Object.keys(quest.story.nodes).length) * 100}%` }}
              ></div>
            </div>

            {/* Основное содержимое узла */}
            <div className={s.nodeContent}>
              <p className={s.nodeText}>{currentNode.text}</p>
              
              {currentNode.image && (
                <div className={s.imageContainer}>
                  <img 
                    src={currentNode.image} 
                    alt={currentNode.imageAlt || 'Иллюстрация квеста'} 
                    className={s.nodeImage}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.style.display = 'none';
                    }}
                  />
                  {/* {currentNode.imageCaption && (
                    <p className={s.imageCaption}>{currentNode.imageCaption}</p>
                  )} */}
                </div>
              )}

              {currentNode.ending ? (
                <div className={`${s.endingContainer} ${
                  currentNode.isGoodEnding ? s.goodEnding : s.badEnding
                }`}>
                  <h3 className={s.endingTitle}>
                    {currentNode.isGoodEnding ? 'Успех!' : 'Конец пути'}
                  </h3>
                  <p className={s.endingText}>{currentNode.ending}</p>
                  <div className={s.endingButtons}>
                    <button onClick={restartQuest} className={s.restartButton}>
                      Начать заново
                    </button>
                  
                  </div>
                </div>
              ) : (
                <div className={s.optionsContainer}>
                  {currentNode.options.map((option, index) => (
                    <button
                      key={index}
                      className={`${s.optionButton} ${
                        option.image ? s.withImage : ''
                      }`}
                      onClick={() => handleOptionClick(option.next)}
                    >
                      {option.image && (
                        <div className={s.optionImageContainer}>
                          <img 
                            src={option.image} 
                            alt={option.imageAlt || ''} 
                            className={s.optionImage}
                          />
                        </div>
                      )}
                      <div className={s.optionTextContainer}>
                        <span className={s.optionNumber}>{index + 1}.</span>
                        <span className={s.optionText}>{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoosePath;