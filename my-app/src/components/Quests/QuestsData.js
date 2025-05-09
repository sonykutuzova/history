import firstQuest from '../../assets/images/first_quest.jpg'
import secondQuest from '../../assets/images/second_quest.jpg'
import thirdQuest from '../../assets/images/third_quest.jpg'
import forthQuest from '../../assets/images/forth_quest.jpg'
import fifthQuest from '../../assets/images/fifth_quest.jpg'
import sixImage from '../../assets/images/six_quest.jpg'
import sevenQuest from '../../assets/images/seven_image.jpg'
import eightQuest from '../../assets/images/eight_image.jpg'
import nineImage from '../../assets/images/nine_image.jpg'
import tenImage from '../../assets/images/ten_image.jpg'
import elevenQuest from '../../assets/images/eleven_image.jpg'
import arc from '../../assets/images/arc.jpg'





export const questsData = [
  {
    id: 1,
    era: "XIX век",
    eraForTimeline: "XIX век",
    title: "Раскрытие тайны Зимнего дворца",
    description: "Восстановите исторический документ, заполнив пропуски",
    duration: "15 мин",
    difficulty: 5,
    type: "fill-blanks",
    image: firstQuest,
    isPopular: true,
    isNew: false,
    isRecommended:false,
    text: `В {1} году императрица {2} приказала построить новый Зимний дворец. Архитектором стал {3}. Особенностью дворца стала {4} длиной {5} метров. Во время {6} года дворец {7}. Сегодня здесь находится {8}, где можно увидеть {9} и {10}.`,
    answers: {
      1: "1754", 2: "Елизавета", 3: "Растрелли", 4: "галерея", 
      5: "150", 6: "1837", 7: "горел", 8: "Эрмитаж", 
      9: "картины", 10: "скульптуры"
    },
    hints: {
      1: "Год начала строительства дворца",
      2: "Императрица, правившая до Екатерины II",
      4: "Архитектурный элемент с парадными залами",
      8: "Один из крупнейших музеев мира",
      11: "Тканевые произведения искусства на стенах",
      12: "Находки из античных времён"
    }
  },
  {
    id: 2,
    era: "XVIII век",
    eraForTimeline: "Екатерининская эпоха",
    title: "Путешествие Екатерины Великой",
    description: "Станьте организатором знаменитого крымского вояжа императрицы",
    duration: "30 мин",
    difficulty: 5,
    type: "fill-blanks",
    image: secondQuest,
    text: `В {1} году императрица Екатерина II предприняла грандиозное путешествие в только что присоединённые южные земли - {2} и {3}.\n
  
    Ваша задача - подготовить все детали поездки: \n
    
    1. Для передвижения выбрали {4} - роскошные кареты с {5} кабинетами, где императрица могла отдыхать.\n
    
    2. В свиту вошли: {6}, {7}, и {8}.
    
    3. Маршрут пролегал через ключевые города:
       - {9} - "южная столица" Потёмкина
       - {10} - стратегическая крепость
       - {11} - главная цель путешествия
    
    4. Для демонстрации успехов построили "{12}" - временные декорации процветания.
    
    5. В {13} состоялась знаменитая встреча с императором {14}, символизировавшая новый статус России.
    
    Итог: путешествие длилось {15} месяцев и укрепило позиции России на Чёрном море.`,
  
    answers: {
      1: "1787", 
      2: "Новороссию", 
      3: "Крым",
      4: "колымаги", 
      5: "походными", 
      6: "послы",
      7: "Григорий Потёмкин", 
      8: "Платон Зубов", 
      9: "Кременчуг",
      10: "Херсон", 
      11: "Севастополь", 
      12: "потемкинские деревни",
      13: "Бахчисарае", 
      14: "Иосифом II", 
      15: "6"
    },
  
    hints: {
      1: "Год начала путешествия",
      6:"Иностранные дипломаты",
      7:"Главный фаворит императрицы",
      8:"Организатор новых территорий",
      11: "База Черноморского флота",
      14: "Австрийский монарх"
    },
  
    isNew: true,
    isPopular: false,
    isRecommended: false,
  },
  {
    id: 3,
    era: "XIX век",
    eraForTimeline:"XIX век",
    title: "Небольшой тест на знание истории Петербурга",
    description: "Ответьте на вопросы по истории XVIII века",
    duration: "10 мин",
    difficulty: 3,
    type: "quiz", 
    image: thirdQuest,
    questions: [
      {
        question: "Кто начал строительство Зимнего дворца?",
        options: ["Екатерина II", "Петр I", "Елизавета Петровна", "Николай I"],
        correctIndex: 2
      },
      {
        question: "Как звали архитектора Зимнего дворца?",
        options: ["Кваренги", "Растрелли", "Тон", "Баженов"],
        correctIndex: 1
      },
      {
        question: "Какой музей сейчас расположен в Зимнем дворце?",
        options: ["Русский музей", "Пушкинский музей", "Эрмитаж", "Третьяковская галерея"],
        correctIndex: 2
      },
      {
        question: "Когда начался пожар в Зимнем дворце?",
        options: ["1801", "1837", "1917", "1754"],
        correctIndex: 1
      },
      {
        question: "Какая общая площадь Зимнего дворца?",
        options: ["120000 м^2", "150000 м^2", "100 м^2", "60000 м^2"],
        correctIndex: 3
      }
    ],
    isNew: false,
    isPopular: false,
    isRecommended: false,
  },
  {
    id: 4,
    era: "XX век",
    eraForTimeline:"Советский период",
    title: "Небольшой тест на знание хронологии революции",
    description: "Проверьте свои знания ключевых дат Российской революции.",
    duration: "5 мин",
    difficulty: 2,
    type: "quiz",
    image: forthQuest,
    isNew: true,
    isPopular: false,
    isRecommended: false,
    questions: [
      {
        question: "В каком году произошла Февральская революция в России?",
        options: ["1914", "1917", "1920", "1905"],
        correctIndex: 1
      },
      {
        
        question: "Когда было подписано отречение Николая II от престола?",
        options: ["1916", "1917", "1918", "1922"],
        correctIndex: 1
      },
      {
        
        question: "Какое событие произошло 25 октября 1917 года?",
        options: [
          "Октябрьская революция",
          "Февральская революция",
          "Подписание Брестского мира",
          "Отмена крепостного права"
        ],
        correctIndex: 0
      },
      {
       
        question: "Когда был создан Совет Народных Комиссаров?",
        options: ["1917", "1918", "1920", "1922"],
        correctIndex: 0
      },
      {
       
        question: "В каком году был создан СССР?",
        options: ["1917", "1920", "1922", "1924"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 5,
    era: "XIX век",
    eraForTimeline:"XIX век",
    title: "По следам имперской столицы",
    description:
      "Найдите историческую рукопись, проделайте правильный путь",
    duration: "15 мин",
    difficulty: 3,
    type: "choose-path",
    image: fifthQuest,
    isNew: false,
    isPopular: true,
    isRecommended: false,
    story: {
      start: "university",
      nodes: {
        university: {
          text: "Санкт-Петербург — центр российской культуры, науки и политики XIX века. Вы — студент Императорского университета, которому поручено найти редкую рукопись, затерянную в одном из старых зданий города. Ваш путь пройдёт через реальные исторические места. Сделайте верные выборы, чтобы восстановить ход событий.   Вы начинаете квест у Императорского Санкт-Петербургского университета. По слухам, профессор, владевший рукописью, недавно посещал Академию наук и Публичную библиотеку.",
          options: [
            { text: "Пойти в Академию наук", next: "academy" },
            { text: "Пойти в Публичную библиотеку", next: "library" }
          ]
        },
        academy: {
          text: "В Академии наук профессор не появлялся несколько дней. Сотрудники не знают о рукописи.",
          options: [
            { text: "Подождать здесь ещё", next: "deadEndAcademy" },
            { text: "Вернуться и пойти в библиотеку", next: "library" }
          ]
        },
        deadEndAcademy: {
          text: "Вы потратили часы в ожидании, но профессор так и не пришёл. Возможность найти рукопись утеряна.",
          options: [],
          ending: "Вы не смогли найти рукопись. Попробуйте начать заново и сделать другие выборы."
        },
        library: {
          text: "Библиотекарь подтверждает: профессор был здесь утром, затем отправился к Казанскому собору.",
          options: [
            { text: "Идти к Казанскому собору", next: "kazansky" },
            { text: "Игнорировать и отправиться в Эрмитаж", next: "hermitage" }
          ]
        },
        hermitage: {
          text: "Эрмитаж — великое место, но не имеет отношения к профессору. Вы тратите время в пустую.",
          options: [],
          ending: "След оказался ложным. Вы не нашли рукопись."
        },
        kazansky: {
          text: "У Казанского собора вы находите письмо в урне — профессор пишет, что направляется в Дом учёных.",
          options: [
            { text: "Направиться в Дом учёных", next: "scientificHouse" },
            { text: "Идти в Румянцевский музей напрямую", next: "wrongMuseumVisit" }
          ]
        },
        wrongMuseumVisit: {
          text: "Вы приходите в музей слишком рано. Там ничего не знают о профессоре или рукописи.",
          options: [],
          ending: "Вы сделали поспешный вывод. След был недостаточно ясен."
        },
        scientificHouse: {
          text: "В Доме учёных вы находите профессора. Он сообщает, что передал рукопись в Румянцевский музей для хранения.",
          options: [
            { text: "Следовать в музей", next: "rumyantsev" },
            { text: "Сомневаться и остаться", next: "deadEndScientific" }
          ]
        },
        deadEndScientific: {
          text: "Вы остались в Доме учёных, надеясь на новую информацию. Однако профессор уехал. След утерян.",
          options: [],
          ending: "Вы упустили шанс получить рукопись."
        },
        rumyantsev: {
          text: "В музее вас проводят в архив. Среди документов — нужная рукопись. Она датирована и подписана профессором.",
          options: [],
          ending: "Поздравляем! Вы нашли историческую рукопись и успешно завершили квест!"
        }
      }
    }
  },
  {
    id: 6,
    era: "XX век",
    eraForTimeline:"Советский период",
    title: "Небольшой тест: Блокада Ленинграда",
    description: "Заполните пропуски, чтобы восстановить факты о блокаде Ленинграда.",
    duration: "15 мин",
    difficulty: 4,
    type: "fill-blanks",
    image: sixImage,
    isPopular: false,
    isNew: true,
    isRecommended: false,
    text: `Блокада Ленинграда началась {1} сентября {2} года и длилась {3} дня. В это время основным маршрутом доставки продовольствия стала {4}, проходившая по льду {5} озера. В самые тяжёлые месяцы минимальная суточная норма хлеба составляла {6} граммов для рабочих и {7} граммов для остальных. Блокада была полностью снята {8} января {9} года.`,
    answers: {
      1: "8",
      2: "1941",
      3: "872",
      4: "Дорога жизни",
      5: "Ладожского",
      6: "250",
      7: "125",
      8: "27",
      9: "1944"
    },
    hints: {
      4: "Название ледового пути. Первая буква — заглавная.",
      5: "Название озера. Первое слово с заглавной буквы.",
    }
  },
  {
    id: 7,
    era: "XVIII–XX века",
    eraForTimeline:"Петровская эпоха",
    title: "Петергоф: история императорской резиденции",
    description: "Проверьте свои знания о дворцово-парковом ансамбле Петергоф.",
    duration: "5-7 мин",
    difficulty: 2,
    type: "quiz",
    image: sevenQuest,
    isNew: false,
    isPopular: false,
    isRecommended: true,
    questions: [
      {
        question: "Кто был инициатором строительства дворцово-паркового ансамбля в Петергофе?",
        options: ["Елизавета Петровна", "Пётр I", "Николай I", "Александр II"],
        correctIndex: 1
      },
      {
        question: "Какой европейский дворец вдохновил Петра I при создании Петергофа?",
        options: ["Версальский дворец", "Букингемский дворец", "Потсдам", "Эскориал"],
        correctIndex: 0
      },
      {
        question: "Как называется знаменитый каскад фонтанов у дворца?",
        options: ["Водопад Екатерины", "Большой каскад", "Царский каскад", "Львиный каскад"],
        correctIndex: 1
      },
      {
        question: "Сколько фонтанов насчитывается в ансамбле Петергофа?",
        options: ["Около 50", "Около 100", "Более 150", "Более 300"],
        correctIndex: 2 
      },
      {
        question: "Что произошло с фонтанами Петергофа в годы Великой Отечественной войны?",
        options: [
          "Они продолжали работать", 
          "Были вывезены в Германию", 
          "Были разрушены и восстановлены после войны", 
          "Были замурованы"
        ],
        correctIndex: 2
      }
    ]
  },
  {
    id: 8,
    era: "XVIII век",
    eraForTimeline: "Петровская эпоха",
    title: "Тайны Петропавловской крепости",
    description: "Расшифруйте записи первого коменданта крепости",
    duration: "5 мин",
    difficulty: 1,
    type: "fill-blanks",
    image: eightQuest,
    text: `Петропавловская крепость была заложена {1} мая {2} года на {3} острове. Высота шпиля собора - {4} метра. В {5} году здесь начали содержать политических {6}. Самый известный узник - {7}. Сегодня в полдень с Нарышкина бастиона раздаётся {8}.`,
    answers: {
      1: "27", 2: "1703", 3: "Заячьем", 
      4: "122", 5: "1718", 6: "заключённых", 
      7: "царевич Алексей", 8: "пушечный выстрел"
    },
    hints: {
      3: "Название связано с маленьким животным",
    },
    isNew: false,
    isPopular: false,
    isRecommended: false
  },
  {
    id: 9,
    era: "XIX-XX века",
    eraForTimeline: "Серебряный век",
    title: "Серебряный век: искусство и модерн",
    description: "Проверьте знания о художественной жизни Петербурга 1900-1910-х",
    duration: "12 мин",
    difficulty: 3,
    type: "quiz",
    image: nineImage,
    questions: [
      {
        question: "Какое здание стало символом петербургского модерна?",
        options: ["Дом компании «Зингер»", "Елисеевский магазин", "Особняк Кшесинской", "Все перечисленные"],
        correctIndex: 3,
      },
      {
        question: "Какое объединение художников возникло в 1910 году?",
        options: ["«Мир искусства»", "«Бубновый валет»", "«Художники»"],
        correctIndex: 0,
      },
      {
        question: "Где проходили самые авангардные выставки 1910-х?",
        options: ["В Академии художеств", "В Таврическом дворце", "В салоне Дягилева", "На даче Матюшина"],
        correctIndex: 3,
      },
      {
        question: "Какой балет Дягилева вызвал скандал в 1913 году?",
        options: ["«Жар-птица»", "«Петрушка»", "«Весна священная»", "«Шехеразада»"],
        correctIndex: 2,
      },
      {
        question: "Кто проектировал станции Петербургского метро в стиле модерн?",
        options: ["Фёдор Лидваль", "Алексей Щусев", "Владимир Щуко", "Такого метро тогда не было"],
        correctIndex: 3,
      }
    ],
    isNew: false,
    isPopular: true,
    isRecommended: false
  },
  {
    id: 10,
    era: "XIX-XX века",
    eraForTimeline: "Серебряный век",
    title: "Поэты Серебряного века",
    description: "Узнайте, насколько хорошо вы знаете главных поэтов эпохи",
    duration: "10 мин",
    difficulty: 4,
    type: "quiz",
    image: tenImage,
    questions: [
      {
        question: "Кто из этих поэтов НЕ принадлежал к акмеистам?",
        options: ["Анна Ахматова", "Осип Мандельштам", "Николай Гумилёв", "Велимир Хлебников"],
        correctIndex: 3,
      },
      {
        question: "Какое кафе было главным местом встреч поэтов в Петербурге?",
        options: ["«Подвал бродячей собаки»", "«Яр»", "«Метрополь»", "«Астория»"],
        correctIndex: 0,
      },
      {
        question: "Кто автор строк «Я научилась просто, мудро жить...»?",
        options: ["Марина Цветаева", "Зинаида Гиппиус", "Анна Ахматова", "Вера Инбер"],
        correctIndex: 2,
      },
      {
        question: "Кто из поэтов был расстрелен за участие в заговоре в 1921 году?",
        options: ["Сергей Есенин", "Николай Гумилёв", "Владимир Маяковский", "Борис Пастернак"],
        correctIndex: 1,
      }
    ],
    isNew: false,
    isPopular: false,
    isRecommended: true
  },
  {
    id: 11,
    era: "XX век",
    eraForTimeline: "Советский период",
    title: "Революционный 1917",
    description: "Примите решения как участник революционных событий",
    duration: "25 мин",
    difficulty: 5,
    type: "choose-path",
    image: elevenQuest,
    story: {
      start: "february",
      nodes: {
        february: {
          text: "Февраль 1917 года. Вы - студент Петроградского университета. На улицах голодные очереди, стачки. Хлебный паёк сокращен до 300 грамм. В казармах недовольство. Что делать?",
          options: [
            { 
              text: "Присоединиться к демонстрантам на Невском", 
              next: "demonstration" 
            },
            { 
              text: "Остаться в университете - политика не для студентов", 
              next: "university" 
            }
          ]
        },
  
        demonstration: {
          text: "23 февраля. Вы с однокурсниками на Невском проспекте. Толпа скандирует «Хлеба!». Вдруг казаки отказываются разгонять демонстрацию, а солдаты Волынского полка переходят на сторону восставших. Ваши действия?",
          options: [
            { 
              text: "Идти к Таврическому дворцу - центру политической активности", 
              next: "soviet" 
            },
            { 
              text: "Участвовать в захвате арсенала на Литейном", 
              next: "arsenal" 
            }
          ]
        },
  
        university: {
          text: "Вы остаётесь в университете, но 25 февраля занятия отменяют. По городу стрельба, гарнизон переходит на сторону восставших. Ректор просит студентов:",
          options: [
            { 
              text: "Организовать санитарный отряд для помощи раненым", 
              next: "medics" 
            },
            { 
              text: "Создать студенческую дружину для защиты здания", 
              next: "defense" 
            }
          ]
        },
  
        soviet: {
          text: "В Таврическом дворце хаос. Формируется Петроградский Совет. Вы видите, как меньшевик Чхеидзе объявляет о создании Временного комитета. Ваши действия:",
          options: [
            { 
              text: "Вступить в только что сформированную милицию", 
              next: "militia" 
            },
            { 
              text: "Записаться в агитаторы для работы с солдатами", 
              next: "agitator" 
            }
          ]
        },
  
        arsenal: {
          text: "Вы с толпой рабочих и солдат штурмуете Арсенал. Вам удаётся захватить 40 000 винтовок. Но появляется рота юнкеров. Что делать?",
          options: [
            { 
              text: "Попытаться уговорить юнкеров присоединиться", 
              next: "negotiate" 
            },
            { 
              text: "Быстро раздать оружие рабочим", 
              next: "distribute" 
            }
          ]
        },
  
        // Развилки для университетского пути
        medics: {
          text: "Вы организуете перевязочный пункт в здании университета. 27 февраля видите, как горят окружной суд и полицейские участки. Ваши действия:",
          options: [
            { 
              text: "Выйти с белым флагом защищать библиотеку от пожара", 
              next: "library" 
            },
            { 
              text: "Отправиться в госпиталь на Петроградской стороне", 
              next: "hospital" 
            }
          ]
        },
  
        defense: {
          text: "Вы создаёте дружину из 30 студентов. 28 февраля к вам приходит делегация от Совета с требованием открыть здание для митинга. Ваш ответ:",
          options: [
            { 
              text: "Разрешить митинг при условии сохранения порядка", 
              next: "meeting" 
            },
            { 
              text: "Отказать и усилить охрану", 
              next: "confrontation" 
            }
          ]
        },
  
        // Развязки
        militia: {
          text: "Вы патрулируете город в составе новой милиции. Старые власти бегут. 2 марта Николай II отрекается от престола. Наступает новая эпоха.",
          options: [],
          ending: "Вы стали свидетелем падения монархии. Впереди - неизвестность Временного правительства."
        },
  
        agitator: {
          text: "Вы агитируете солдат за новый порядок. 1 марта издается Приказ №1, разрушающий армейскую дисциплину. Армия выходит из-под контроля.",
          options: [],
          ending: "Ваши действия способствовали революции, но посеяли хаос в армии."
        },
  
        negotiate: {
          text: "Вам удаётся убедить юнкеров не стрелять. Вместе вы занимаете Главпочтамт. Это ключевая точка для контроля над городом.",
          options: [],
          ending: "Благодаря вам революция в Петрограде прошла почти бескровно."
        },
  
        distribute: {
          text: "Вы успеваете раздать 2000 винтовок до подхода юнкеров. Начинается перестрелка. 15 человек погибает, но арсенал остаётся за восставшими.",
          options: [],
          ending: "Кровавый эпизод революции. Вы выжили, но сомневаетесь в правильности выбора."
        },
  
        library: {
          text: "Вам удаётся спасти университетскую библиотеку. В марте вы становитесь очевидцем «двоевластия» - Советы против Временного правительства.",
          options: [],
          ending: "Вы сохранили культурное достояние, но остались в стороне от главных событий."
        },
  
        hospital: {
          text: "В госпитале вы помогаете раненым с обеих сторон. Видите, как рушится старый мир. Осенью 1917 университет закроют «за контрреволюционность».",
          options: [],
          ending: "Вы выбрали гуманизм, но не смогли избежать последствий революции."
        },
  
        meeting: {
          text: "Митинг перерастает в бесконечные споры. Университет превращается в политический клуб. К октябрю учиться будет уже негде.",
          options: [],
          ending: "Вы пытались сохранить нейтралитет, но волна событий захлестнула и университет."
        },
  
        confrontation: {
          text: "После вашего отказа Совет объявляет университет «оплотом реакции». 1 марта здание штурмуют. Несколько студентов арестованы.",
          options: [],
          ending: "Попытка сопротивления провалилась."
        }
      }
    },
    isNew: false,
    isPopular: false,
    isRecommended: true,
  },
  {
    id: 12,
    era: "XVIII-XX века",
    title: "Архангельск: ворота в Арктику",
    description: "Проверьте знания о старинном портовом городе",
    duration: "12 мин",
    difficulty: 4,
    type: "quiz",
    image: arc,
    questions: [
      {
        question: "В каком году был основан Архангельск?",
        options: ["1584", "1613", "1703", "1497"],
        correctIndex: 0,
        fact: "Основан по указу Ивана Грозного как Новохолмогоры, с 1613 — Архангельск"
      },
      {
        question: "Какое прозвище получил город за свою архитектуру?",
        options: ["Северная Венеция", "Деревянные ворота России", "Город тысячи церквей", "Северный Иерусалим"],
        correctIndex: 1,
        fact: "До революции здесь было свыше 1000 деревянных зданий XVII-XIX веков"
      },
      {
        question: "Какой уникальный памятник сохранился с XVII века?",
        options: ["Гостиный двор", "Дом Сутягина", "Подворье Соловецкого монастыря", "Морской вокзал"],
        correctIndex: 0,
        fact: "Каменный Гостиный двор (1668-1684) — старейшее здание города"
      },
      {
        question: "Какое событие сделало Архангельск «арктической столицей» в XX веке?",
        options: ["Строительство Севморпути", "Открытие алмазных месторождений", "Создание атомного флота", "Все ответы верны"],
        correctIndex: 3,
        fact: "Все эти события связаны с освоением Арктики"
      },
      {
        question: "Какой музей расположен в здании старинного морского вокзала?",
        options: ["Музей Севморпути", "Музей деревянного зодчества", "Краеведческий музей", "Музей художественного освоения Арктики"],
        correctIndex: 0,
        fact: "Музей истории Севморпути открыт в 1976 году"
      },
      {
        question: "Какая традиция существует с 1930-х годов?",
        options: ["Фестиваль «Северные конвои»", "Праздник «День Севера»", "Гонки на оленях", "Карнавал полярников"],
        correctIndex: 1,
        fact: "«День Севера» отмечают в последнее воскресенье марта"
      }
    ],
    isNew: true,
    isPopular: false,
    isRecommended: false,
  }

  ];