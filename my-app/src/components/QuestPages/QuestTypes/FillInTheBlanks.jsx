import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './FillInTheBlanks.module.css';

const FillInTheBlanks = ({ quest }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e, blankIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [blankIndex]: e.target.value,
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const goBack = () => {
    navigate(-1);
  };

  const toggleHints = () => {
    setShowHints(!showHints);
  };

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const renderedText = quest.text.split(/({\d+})/g).map((part, index) => {
    const match = part.match(/{(\d+)}/);
    if (match) {
      const blankIndex = match[1];
      return (
        <span key={index} className={s.inputWrapper}>
          {showHints && quest.hints?.[blankIndex] && (
            <div className={s.hintBubble}>
              {quest.hints[blankIndex]}
            </div>
          )}
          <input
            type="text"
            value={userAnswers[blankIndex] || ''}
            onChange={(e) => handleInputChange(e, blankIndex)}
            className={`${s.blankInput} ${
              showResults 
                ? userAnswers[blankIndex]?.toLowerCase().trim() === quest.answers[blankIndex]?.toLowerCase().trim()
                  ? s.correct
                  : s.incorrect
                : ''
            }`}
            disabled={showResults}
            placeholder={`${blankIndex}`}
          />
          {showAnswers && (
            <div className={s.answerBubble}>
              {quest.answers[blankIndex]}
            </div>
          )}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });

  return (
    <div className={s.container}>
      <button className={s.backButton} onClick={goBack}>
        ← Назад к квестам
      </button>
      
      <div className={s.header}>
        <span className={s.era}>{quest.era}</span>
        <h1 className={s.title}>{quest.title}</h1>
        <p className={s.description}>{quest.description}</p>
      </div>

      <div className={s.controls}>
        <button 
          className={`${s.controlButton} ${showHints ? s.active : ''}`}
          onClick={toggleHints}
        >
          {showHints ? 'Скрыть подсказки' : 'Показать подсказки'}
        </button>
        <button 
          className={`${s.controlButton} ${showAnswers ? s.active : ''}`}
          onClick={toggleAnswers}
          disabled={!showResults}
        >
          {showAnswers ? 'Скрыть ответы' : 'Показать ответы'}
        </button>
      </div>

      <div className={s.questContent}>
        <div className={s.textBlock}>
          {renderedText}
        </div>

        {!showResults ? (
          <button 
            className={s.checkButton}
            onClick={checkAnswers}
            disabled={Object.keys(userAnswers).length < Object.keys(quest.answers).length}
          >
            Проверить ответы
          </button>
        ) : (
          <div className={s.results}>
            <h3>Результаты:</h3>
            <div className={s.score}>
              Правильных ответов: {Object.keys(quest.answers).filter(
                 key => userAnswers[key]?.toLowerCase().trim() === quest.answers[key]?.toLowerCase().trim()
                ).length} из {Object.keys(quest.answers).length}
            </div>
            <button 
              className={s.tryAgainButton}
              onClick={() => {
                setUserAnswers({});
                setShowResults(false);
                setShowAnswers(false);
              }}
            >
              Попробовать снова
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FillInTheBlanks;