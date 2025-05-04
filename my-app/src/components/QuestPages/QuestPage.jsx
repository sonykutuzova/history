import React from 'react';
import { useParams } from 'react-router-dom';
import { questsData } from '../Quests/QuestsData';

// Импортируем компоненты для разных типов
import FillInTheBlanks from './QuestTypes/FillInTheBlanks';
import Quiz from './QuestTypes/Quiz';
import ChoosePath from './QuestTypes/ChoosePath';
// ...и т.д.

const QuestPage = () => {
  const { id } = useParams();
  const quest = questsData.find(q => q.id === Number(id));

  if (!quest) {
    return <div>Квест не найден</div>;
  }

  const renderQuestComponent = () => {
    switch (quest.type) {
      case 'fill-blanks':
        return <FillInTheBlanks quest={quest} />;
      case 'quiz':
        return <Quiz quest={quest} />;
       case 'choose-path':
         return <ChoosePath quest={quest} />;
      default:
        return <div>Неизвестный тип квеста</div>;
    }
  };

  return (
    <div>
      {renderQuestComponent()}
    </div>
  );
};

export default QuestPage;
