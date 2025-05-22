import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Quiz.module.css';

const Quiz = ({ quest }) => {
  const { questions, title, era, description, explanation, image } = quest;
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (questionIndex, selectedIndex) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: selectedIndex }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setShowScore(true), 500);
  };

  const getScore = () => {
    return questions.reduce((score, q, i) => 
      answers[i] === q.correctIndex ? score + 1 : score, 0);
  };

  const tryAgain = () => {
    setAnswers({});
    setIsSubmitted(false);
    setShowScore(false);
  };

  return (
    <div className={s.container}>
      <button className={s.backButton} onClick={() => navigate(-1)}>
        ← Назад к квестам
      </button>
      
      <div className={s.header}>
        <div className={s.headerContent}>
          <span className={s.era}>{era}</span>
          <h1 className={s.title}>{title}</h1>
          <p className={s.description}>{description}</p>
        </div>
        
        {image && (
          <div className={s.imageContainer}>
            <img 
              src={image} 
              alt={title} 
              className={s.quizImage}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      <div className={s.quizContent}>
        {questions.map((q, index) => (
          <div 
            key={index} 
            className={`${s.questionBlock} ${
              isSubmitted && answers[index] === q.correctIndex ? s.correctQuestion : ''
            } ${
              isSubmitted && answers[index] !== undefined && answers[index] !== q.correctIndex 
                ? s.incorrectQuestion 
                : ''
            }`}
          >
            <p className={s.questionText}>
              <span className={s.questionNumber}>{index + 1}.</span> {q.question}
            </p>
            
            {/* Добавлено изображение для вопроса, если оно есть */}
            {q.image && (
              <div className={s.questionImageContainer}>
                <img 
                  src={q.image} 
                  alt={`Иллюстрация к вопросу ${index + 1}`} 
                  className={s.questionImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            <ul className={s.optionsList}>
              {q.options.map((option, i) => (
                <li key={i} className={s.optionItem}>
                  <label className={s.optionLabel}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      disabled={isSubmitted}
                      checked={answers[index] === i}
                      onChange={() => handleOptionChange(index, i)}
                      className={s.radioInput}
                    />
                    <span className={s.customRadio}></span>
                    <span className={s.optionText}>{option}</span>
                    {isSubmitted && i === q.correctIndex && (
                      <span className={s.correctMarker}>✓</span>
                    )}
                    {isSubmitted && answers[index] === i && answers[index] !== q.correctIndex && (
                      <span className={s.incorrectMarker}>✕</span>
                    )}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {!isSubmitted ? (
          <button 
            onClick={handleSubmit} 
            className={s.submitBtn}
            disabled={Object.keys(answers).length < questions.length}
          >
            Проверить ответы
          </button>
        ) : (
          <div className={`${s.resultBlock} ${showScore ? s.visible : ''}`}>
            <h3>Результаты теста</h3>
            <div className={s.scoreCircle}>
              <span className={s.score}>{getScore()}</span>
              <span className={s.total}>из {questions.length}</span>
            </div>
            <p className={s.scoreText}>
              {getScore() === questions.length
                ? 'Превосходно! Вы знаток истории!'
                : getScore() >= questions.length / 2
                ? 'Хороший результат!'
                : 'Попробуйте еще раз!'}
            </p>
            
            {explanation && (
              <div className={s.explanationBlock}>
                <h4>Пояснение:</h4>
                <p>{explanation}</p>
                {/* Можно добавить изображение в пояснение, если нужно */}
                {image && (
                  <img 
                    src={image} 
                    alt="Пояснение" 
                    className={s.explanationImage}
                  />
                )}
              </div>
            )}
            
            <div className={s.resultButtons}>
              <button onClick={tryAgain} className={s.tryAgainBtn}>
                Пройти тест снова
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;