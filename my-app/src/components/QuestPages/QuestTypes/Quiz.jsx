// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import s from './Quiz.module.css'; // Создай этот файл для стилей

// const Quiz = ({ quest }) => {
//     const { questions, title, explanation } = quest;
  
//   const [answers, setAnswers] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleOptionChange = (questionIndex, selectedIndex) => {
//     setAnswers(prev => ({ ...prev, [questionIndex]: selectedIndex }));
//   };

//   const handleSubmit = () => {
//     setIsSubmitted(true);
//   };

//   const getScore = () => {
//     let score = 0;
//     questions.forEach((q, i) => {
//       if (answers[i] === q.correctIndex) score++;
//     });
//     return score;
//   };

//   return (
//     <div className={s.quizContainer}>
//       <h2>{title}</h2>

//       {questions.map((q, index) => (
//         <div key={index} className={s.questionBlock}>
//           <p className={s.questionText}>
//             {index + 1}. {q.question}
//           </p>
//           <ul className={s.optionsList}>
//             {q.options.map((option, i) => (
//               <li key={i}>
//                 <label className={s.optionLabel}>
//                   <input
//                     type="radio"
//                     name={`question-${index}`}
//                     value={i}
//                     disabled={isSubmitted}
//                     checked={answers[index] === i}
//                     onChange={() => handleOptionChange(index, i)}
//                   />
//                   {option}
//                   {isSubmitted && (
//                     <>
//                       {i === q.correctIndex ? (
//                         <span className={s.correct}>✔</span>
//                       ) : answers[index] === i ? (
//                         <span className={s.incorrect}>✖</span>
//                       ) : null}
//                     </>
//                   )}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       {!isSubmitted ? (
//         <button onClick={handleSubmit} className={s.submitBtn}>
//           Проверить
//         </button>
//       ) : (
//         <div className={s.resultBlock}>
//           <p>
//             Вы набрали {getScore()} из {questions.length} баллов.
//           </p>
//           {explanation && <p className={s.explanation}>{explanation}</p>}
//         </div>
//       )}

//       <button onClick={() => navigate(-1)} className={s.backBtn}>
//         ← Назад
//       </button>
//     </div>
//   );
// };

// export default Quiz;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Quiz.module.css';

const Quiz = ({ quest }) => {
  const { questions, title, era, description, explanation } = quest;
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
        <span className={s.era}>{era}</span>
        <h1 className={s.title}>{title}</h1>
        <p className={s.description}>{description}</p>
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
              {index + 1}. {q.question}
            </p>
            <ul className={s.optionsList}>
              {q.options.map((option, i) => (
                <li key={i}>
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
              <span>{getScore()}</span>
              <span>из {questions.length}</span>
            </div>
            <p className={s.scoreText}>
              {getScore() === questions.length
                ? 'Превосходно! Вы знаток истории!'
                : getScore() >= questions.length / 2
                ? 'Хороший результат!'
                : 'Попробуйте еще раз!'}
            </p>
            
            {explanation && <p className={s.explanation}>{explanation}</p>}
            
            <button onClick={tryAgain} className={s.tryAgainBtn}>
              Пройти тест снова
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;