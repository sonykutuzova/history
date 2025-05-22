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
import silverAgeQuest from '../../assets/images/image12.jpg'
import stalinQuest from '../../assets/images/stal.jpg'
import ninetiesQuest from '../../assets/images/school.jpg'


import a from '../../assets/images/a.jpg';
import aa from '../../assets/images/aa.jpg';
import aaa from '../../assets/images/aaa.jpg';
import aaaa from '../../assets/images/aaa.jpg';


import b from '../../assets/images/b.jpg';
import bb from '../../assets/images/bb.jpg';
import bbb from '../../assets/images/bbb.jpg';

import c from '../../assets/images/c.jpg';
import cc from '../../assets/images/cc.jpg';
import ccc from '../../assets/images/ccc.jpg';

import d from '../../assets/images/d.jpg';
import dd from '../../assets/images/dd.jpg';
import ddd from '../../assets/images/ddd.jpg';

import e from '../../assets/images/e.jpg';
import ee from '../../assets/images/ee.jpg';
import eee from '../../assets/images/eee.jpg';

import f from '../../assets/images/f.jpg';
import ff from '../../assets/images/ff.jpg';
import fff from '../../assets/images/fff.jpg';

import g from '../../assets/images/g.jpg';
import gg from '../../assets/images/gg.jpg';
import ggg from '../../assets/images/ggg.jpg';

import h from '../../assets/images/h.jpg';
import hh from '../../assets/images/hh.jpg';
import hhh from '../../assets/images/hhh.jpg';

import i from '../../assets/images/i.jpg';
import ii from '../../assets/images/ii.jpg';
import iii from '../../assets/images/iii.jpg';

import j from '../../assets/images/j.jpg';
import jj from '../../assets/images/jj.jpg';
import jjj from '../../assets/images/jjj.jpg';

import k from '../../assets/images/k.jpg';
import kk from '../../assets/images/kk.jpg';
import kkk from '../../assets/images/kkk.jpg';


import l from '../../assets/images/l.jpg';
import ll from '../../assets/images/ll.jpg';
import lll from '../../assets/images/lll.jpg';

import m from '../../assets/images/m.jpg';
import mm from '../../assets/images/mm.jpg';
import mmm from '../../assets/images/mmm.jpg';

import n from '../../assets/images/n.jpg';
import nn from '../../assets/images/nn.jpg';
import nnn from '../../assets/images/nnn.jpg';

import o from '../../assets/images/o.jpg';
import oo from '../../assets/images/oo.jpg';
import ooo from '../../assets/images/ooo.jpg';

import p from '../../assets/images/p.jpg';
import pp from '../../assets/images/pp.jpg';
import ppp from '../../assets/images/ppp.jpg';

import q from '../../assets/images/q.jpg';
import qq from '../../assets/images/qq.jpg';
import qqq from '../../assets/images/qqq.jpg';

import r from '../../assets/images/r.jpg';
import rr from '../../assets/images/rr.jpg';
import rrr from '../../assets/images/rrr.jpg';

import s from '../../assets/images/s.jpg';
import ss from '../../assets/images/ss.jpg';
import sss from '../../assets/images/sss.jpg';

import t from '../../assets/images/t.jpg';
import tt from '../../assets/images/tt.jpg';
import ttt from '../../assets/images/ttt.jpg';

// U
import u from '../../assets/images/u.jpg';
import uu from '../../assets/images/uu.jpg';
import uuu from '../../assets/images/uuu.jpg';

// V
import v from '../../assets/images/v.jpg';
import vv from '../../assets/images/vv.jpg';
import vvv from '../../assets/images/vvv.jpg';

// W
import w from '../../assets/images/w.jpg';
import ww from '../../assets/images/ww.jpg';
import www from '../../assets/images/www.jpg';

// X
import x from '../../assets/images/x.jpg';
import xx from '../../assets/images/xx.jpg';
import xxx from '../../assets/images/xxx.jpg';

// Y
import y from '../../assets/images/y.jpg';
import yy from '../../assets/images/yy.jpg';
import yyy from '../../assets/images/yyy.jpg';

// Z
import z from '../../assets/images/z.jpg';
import zz from '../../assets/images/zz.jpg';
import zzz from '../../assets/images/zzz.jpg';






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
    contentImage: a, 
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
    contentImage: b, 

    text: `В {1} году императрица Екатерина II предприняла грандиозное путешествие в только что присоединённые южные земли - {2} и {3}.\n
  
    Ваша задача - подготовить все детали поездки: \n
    
    1. Для передвижения выбрали {4} - роскошные кареты с {5} кабинетами, где императрица могла отдыхать.\n
    
    2. В свиту вошли {6}:, {7}, и {8}.
    
    3. Маршрут пролегал через ключевые города:
        {9} - "южная столица" Потёмкина,
        {10} - стратегическая крепость,
        {11} - главная цель путешествия,
    
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
        correctIndex: 2,
        image: c
      },
      {
        question: "Как звали архитектора Зимнего дворца?",
        options: ["Кваренги", "Растрелли", "Тон", "Баженов"],
        correctIndex: 1,
        image: d
      },
      {
        question: "Какой музей сейчас расположен в Зимнем дворце?",
        options: ["Русский музей", "Пушкинский музей", "Эрмитаж", "Третьяковская галерея"],
        correctIndex: 2,
        image: e
      },
      {
        question: "Когда начался пожар в Зимнем дворце?",
        options: ["1801", "1837", "1917", "1754"],
        correctIndex: 1,
        image: f
      },
      {
        question: "Какая общая площадь Зимнего дворца?",
        options: ["120000 м^2", "150000 м^2", "100 м^2", "60000 м^2"],
        correctIndex: 3,
        image: g
      }
    ],
    isNew: false,
    isPopular: false,
    isRecommended: false,
  },
  {
    id: 4,
    era: "XX век",
    eraForTimeline: "Советский период",
    title: "Небольшой тест на знание хронологии революции",
    description: "Проверьте свои знания ключевых дат Российской революции.",
    duration: "5 мин",
    difficulty: 2,
    type: "quiz",
    image: forthQuest, // Основное изображение квеста
    explanation: "Российская революция 1917 года изменила ход мировой истории. Февральская революция свергла монархию, а Октябрьская привела к власти большевиков.", // Добавлено пояснение
    isNew: true,
    isPopular: false,
    isRecommended: false,
    questions: [
      {
        question: "В каком году произошла Февральская революция в России?",
        options: ["1914", "1917", "1920", "1905"],
        correctIndex: 1,
        image: h // Добавлено изображение для вопроса
      },
      {
        question: "Когда было подписано отречение Николая II от престола?",
        options: ["1916", "1917", "1918", "1922"],
        correctIndex: 1,
        image: i // Добавлено изображение для вопроса
      },
      {
        question: "Какое событие произошло 25 октября 1917 года?",
        options: [
          "Октябрьская революция",
          "Февральская революция",
          "Подписание Брестского мира",
          "Отмена крепостного права"
        ],
        correctIndex: 0,
        image: j // Добавлено изображение для вопроса
      },
      {
        question: "Когда был создан Совет Народных Комиссаров?",
        options: ["1917", "1918", "1920", "1922"],
        correctIndex: 0,
        image: k // Добавлено изображение для вопроса
      },
      {
        question: "В каком году был создан СССР?",
        options: ["1917", "1920", "1922", "1924"],
        correctIndex: 2,
        image: l // Добавлено изображение для вопроса
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
          image: m, // Изображение для узла
        // imageAlt: "Императорский университет",
        // imageCaption: "Императорский Санкт-Петербургский университет в XIX веке",
          
          options: [
            { text: "Пойти в Академию наук", next: "academy" },
            { text: "Пойти в Публичную библиотеку", next: "library" }
          ]
        },
        academy: {
          
          text: "В Академии наук профессор не появлялся несколько дней. Сотрудники не знают о рукописи.",
          image: o,
          options: [
            { text: "Подождать здесь ещё", next: "deadEndAcademy" },
            { text: "Вернуться и пойти в библиотеку", next: "library" }
          ]
        },
        deadEndAcademy: {
          text: "Вы потратили часы в ожидании, но профессор так и не пришёл. Возможность найти рукопись утеряна.",
          image: n,
          options: [],
          ending: "Вы не смогли найти рукопись. Попробуйте начать заново и сделать другие выборы.",
          isGoodEnding: false
        },
        library: {
          text: "Библиотекарь подтверждает: профессор был здесь утром, затем отправился к Казанскому собору.",
          image: p,
          options: [
            { text: "Идти к Казанскому собору", next: "kazansky" },
            { text: "Игнорировать и отправиться в Эрмитаж", next: "hermitage" }
          ]
        },
        hermitage: {
          
          text: "Эрмитаж — великое место, но не имеет отношения к профессору. Вы тратите время в пустую.",
          image: r,
          options: [],
          ending: "След оказался ложным. Вы не нашли рукопись.",
          isGoodEnding: false
        },
        kazansky: {
          image: secondQuest, // Изображение для узла
        imageAlt: "Императорский университет",
        imageCaption: "Императорский Санкт-Петербургский университет в XIX веке",
          text: "У Казанского собора вы находите письмо в урне — профессор пишет, что направляется в Дом учёных.",
          image: s,
          options: [
            { text: "Направиться в Дом учёных", next: "scientificHouse" },
            { text: "Идти в Румянцевский музей потому что он вам нравится", next: "wrongMuseumVisit" }
          ]
        },
        wrongMuseumVisit: {
          text: "Вы приходите в музей слишком рано. Там ничего не знают о профессоре или рукописи.",
          image: t,
          options: [],
          ending: "Вы сделали поспешный вывод. След был недостаточно ясен.",
          isGoodEnding: false
        },
        scientificHouse: {
          image: u,
          text: "В Доме учёных вы находите профессора. Он сообщает, что передал рукопись в Румянцевский музей для хранения.",
          options: [
            { text: "Следовать в музей", next: "rumyantsev" },
            { text: "Сомневаться и остаться", next: "deadEndScientific" }
          ]
        },
        deadEndScientific: {
          image: v,
          text: "Вы остались в Доме учёных, надеясь на новую информацию. Однако профессор уехал. След утерян.",
          options: [],
          ending: "Вы упустили шанс получить рукопись.",
          isGoodEnding: false
        },
        rumyantsev: {
          image: t,
          text: "В музее вас проводят в архив. Среди документов — нужная рукопись. Она датирована и подписана профессором.",
          options: [],
          ending: "Поздравляем! Вы нашли историческую рукопись и успешно завершили квест!",
          isGoodEnding: false
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
    contentImage: w, 
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
      4: "Название ледового пути.",
      5: "Название озера.",
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
        correctIndex: 1,
        image: x
      },
      {
        question: "Какой европейский дворец вдохновил Петра I при создании Петергофа?",
        options: ["Версальский дворец", "Букингемский дворец", "Потсдам", "Эскориал"],
        correctIndex: 0,
        image: y
      },
      {
        question: "Как называется знаменитый каскад фонтанов у дворца?",
        options: ["Водопад Екатерины", "Большой каскад", "Царский каскад", "Львиный каскад"],
        correctIndex: 1,
        image: aa
      },
      {
        question: "Сколько фонтанов насчитывается в ансамбле Петергофа?",
        options: ["Около 50", "Около 100", "Более 150", "Более 300"],
        correctIndex: 2,
        image: z
      },
      {
        question: "Что произошло с фонтанами Петергофа в годы Великой Отечественной войны?",
        options: [
          "Они продолжали работать", 
          "Были вывезены в Германию", 
          "Были разрушены и восстановлены после войны", 
          "Были замурованы"
        ],
        correctIndex: 2,
        image: bb
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
    contentImage: cc,
    text: `Петропавловская крепость была заложена {1} мая {2} года на {3} острове. Высота со шпилем - {4} метра. В {5} году здесь начали содержать политических {6}. Самый известный узник - {7}. Сегодня в полдень с Нарышкина бастиона раздаётся {8}.`,
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
        image: dd
      },
      {
        question: "Какое объединение художников возникло в 1910 году?",
        options: ["«Мир искусства»", "«Бубновый валет»", "«Художники»"],
        correctIndex: 0,
        image: ee
      },
      {
        question: "Где проходили самые авангардные выставки 1910-х?",
        options: ["В Академии художеств", "В Таврическом дворце", "В салоне Дягилева", "На даче Матюшина"],
        correctIndex: 3,
        image: ff
      },
      {
        question: "Какой балет Дягилева вызвал скандал в 1913 году?",
        options: ["«Жар-птица»", "«Петрушка»", "«Весна священная»", "«Шехеразада»"],
        correctIndex: 2,
        image:gg
      },
      {
        question: "Кто проектировал станции Петербургского метро в стиле модерн?",
        options: ["Фёдор Лидваль", "Алексей Щусев", "Владимир Щуко", "Такого метро тогда не было"],
        correctIndex: 3,
        image:hh
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
        image:ii
      },
      {
        question: "Какое кафе было главным местом встреч поэтов в Петербурге?",
        options: ["«Подвал бродячей собаки»", "«Яр»", "«Метрополь»", "«Астория»"],
        correctIndex: 0,
        image: jj
      },
      {
        question: "Кто автор строк «Я научилась просто, мудро жить...»?",
        options: ["Марина Цветаева", "Зинаида Гиппиус", "Анна Ахматова", "Вера Инбер"],
        correctIndex: 2,
        image: kk
      },
      {
        question: "Кто из поэтов был расстрелен за участие в заговоре в 1921 году?",
        options: ["Сергей Есенин", "Николай Гумилёв", "Владимир Маяковский", "Борис Пастернак"],
        correctIndex: 1,
        image: ll
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
          text: "Февраль 1917 года. Вы - студент Петроградского университета. На улицах голодные очереди. Хлебный паёк сокращен до 300 грамм. В казармах недовольство. Что делать?",
          image: oo,
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
          image: pp,
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
          text: "Вы остаётесь в университете, но 25 февраля занятия отменяют. По городу стрельба, гарнизон переходит на сторону восставших.",
          image: mm,
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
          image: nn,
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
          image: rr,
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
          image: ss,
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
          image: tt,
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
          image: uu,
          options: [],
          ending: "Вы стали свидетелем падения монархии. Впереди - неизвестность Временного правительства."
        },
  
        agitator: {
          text: "Вы агитируете солдат за новый порядок. 1 марта издается Приказ №1, разрушающий армейскую дисциплину. Армия выходит из-под контроля.",
          image: vv,
          options: [],
          ending: "Ваши действия способствовали революции, но посеяли хаос в армии."
        },
  
        negotiate: {
          text: "Вам удаётся убедить юнкеров не стрелять. Вместе вы занимаете Главпочтамт. Это ключевая точка для контроля над городом.",
          image: ww,
          options: [],
          ending: "Благодаря вам революция в Петрограде прошла почти бескровно."
        },
  
        distribute: {
          text: "Вы успеваете раздать 2000 винтовок до подхода юнкеров. Начинается перестрелка. 15 человек погибает, но арсенал остаётся за восставшими.",
          image: xx,
          options: [],
          ending: "Кровавый эпизод революции. Вы выжили, но сомневаетесь в правильности выбора."
        },
  
        library: {
          text: "Вам удаётся спасти университетскую библиотеку. В марте вы становитесь очевидцем «двоевластия» - Советы против Временного правительства.",
          image: yy,
          options: [],
          ending: "Вы сохранили культурное достояние, но остались в стороне от главных событий."
        },
  
        hospital: {
          text: "В госпитале вы помогаете раненым с обеих сторон. Видите, как рушится старый мир. Осенью 1917 университет закроют «за контрреволюционность».",
          image: zz,
          options: [],
          ending: "Вы выбрали гуманизм, но не смогли избежать последствий революции."
        },
  
        meeting: {
          text: "Митинг перерастает в бесконечные споры. Университет превращается в политический клуб. К октябрю учиться будет уже негде.",
          image: aaa,
          options: [],
          ending: "Вы пытались сохранить нейтралитет, но волна событий захлестнула и университет."
        },
  
        confrontation: {
          text: "После вашего отказа Совет объявляет университет «оплотом реакции». 1 марта здание штурмуют. Несколько студентов арестованы.",
          image: bbb,
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
  era: "XX век",
  eraForTimeline: "Серебряный век",
  title: "Поэт в вихре эпохи",
  description: "Проживите судьбу поэта в бурлящей культурной жизни 1910-х",
  duration: "20 мин",
  difficulty: 4,
  type: "choose-path",
  image: silverAgeQuest,
  story: {
    start: "cafe",
    nodes: {
      cafe: {
        text: "1913 год. Вы - молодой поэт в кафе «Бродячая собака». Ахматова читает новые стихи, Маяковский скандалит с символистами. Ваши действия?",
        image: ccc,
        options: [
          { 
            text: "Присоединиться к футуристам с их эпатажем", 
            next: "futurists" 
          },
          { 
            text: "Искать вдохновение в классической традиции", 
            next: "symbolists" 
          }
        ]
      },
      futurists: {
        text: "Вы участвуете в скандальном вечере «Пощечина общественному вкусу». Бурлюк предлагает поехать с турне по провинции. Ваш выбор:",
        image: ddd,
        options: [
          { 
            text: "Отправиться с турне, раскрасив лицо", 
            next: "tour" 
          },
          { 
            text: "Остаться в Петербурге, готовя манифест", 
            next: "manifesto" 
          }
        ]
      },
      symbolists: {
        text: "Вы показываете стихи Вячеславу Иванову на «башне». Он хвалит вашу технику, но советует «пережить кризис символа». Что делать?",
        image: eee,
        options: [
          { 
            text: "Отказаться", 
            next: "zaum" 
          },
          { 
            text: "Бросить все и уйти на фронт", 
            next: "war" 
          }
        ]
      },
      tour: {
        image: fff,
        text: "Провинция встречает вас скандалом. В Казани местная газета называет ваши выступления «кощунством». Как реагировать?",
        options: [
          { 
            text: "Устроить еще более эпатажное выступление", 
            next: "scandal" 
          },
          { 
            text: "Написать философское оправдание футуризма", 
            next: "philosophy" 
          }
        ]
      },
      manifesto: {
        image: ggg,
        text: "1914 год. Война разделяет кружки. Маяковский пишет патриотические стихи, а Крученых уходит в заумь. Ваш путь:",
        options: [
          { 
            text: "Записаться добровольцем на фронт", 
            next: "war" 
          },
          { 
            text: "Углубиться в формальные эксперименты", 
            next: "zaum" 
          }
        ]
      },
      // Развязки
      scandal: {
        image: hhh,
        text: "Ваше новое выступление приводит к аресту за «оскорбление нравственности». В тюрьме вы пишете лучшие стихи.",
        options: [],
        ending: "Скандальная слава сделала вас заметной фигурой, но ограничила свободу."
      },
      philosophy: {
        image: iii,
        text: "Ваш трактат «Искусство будущего» вызывает дискуссии. После революции вы эмигрируете, сохранив архив эпохи.",
        options: [],
        ending: "Вы стали летописцем Серебряного века, но остались в тени великих."
      },
      war: {
        image: jjj,
        text: "На фронте вы получаете ранение. В госпитале 1917 года пишете цикл «Развалины империи». Октябрьскую революцию не принимаете.",
        options: [],
        ending: "Война сломала вашу судьбу, но дала подлинный трагический опыт."
      },
      zaum: {
        image: kkk,
        text: "К 1920 году ваши эксперименты становятся неактуальными. Вы пытаетесь адаптироваться к новому времени, но безуспешно.",
        options: [],
        ending: "Эпоха прошла, оставив ваши поиски на периферии литературы."
      }
    }
  },
  isNew: false,
  isPopular: false,
  isRecommended: false
},
{
  id: 13,
  era: "XX век",
  eraForTimeline: "Советский период",
  title: "Испытание 1937",
  description: "Примите решения подростка в эпоху Большого террора",
  duration: "30 мин",
  difficulty: 5,
  type: "choose-path",
  image: stalinQuest,
  story: {
    start: "school",
    nodes: {
      school: {
        image: lll,
        text: "1937 год. Вы - ученик 9 класса. На уроке истории учитель говорит: «Враги народа проникли везде, даже в школу». После урока ваш друг шепчет: «Отца забрали ночью». Ваши действия?",
        options: [
          { 
            text: "Доложить о разговоре классному руководителю", 
            next: "report" 
          },
          { 
            text: "Сделать вид, что не слышали", 
            next: "silence" 
          }
        ]
      },
      report: {
        image: mmm,
        text: "Через день ваш друг исчезает из школы. Директор хвалит вашу бдительность и предлагает вступить в комсомол активистом. Ваш выбор:",
        options: [
          { 
            text: "Согласиться и вести «воспитательную работу»", 
            next: "komsomol" 
          },
          { 
            text: "Отказаться, сославшись на учебу", 
            next: "transfer" 
          }
        ]
      },
      silence: {
        image: nnn,
        text: "Через неделю вас вызывает завуч: «Мы знаем о вашей неискренности. Но даем шанс исправиться» - и протягивает анкету для доноса. Ваше решение:",
        options: [
          { 
            text: "Написать донос на соседа-инженера", 
            next: "denunciation" 
          },
          { 
            text: "Отказаться, рискуя исключением", 
            next: "transfer" 
          }
        ]
      },
      komsomol: {
        image: ooo,
        text: "1938 год. Вы - секретарь комсомольской ячейки. На собрании требуют исключить ученика за «потерю бдительности» (его сестру арестовали). Ваши действия:",
        options: [
          { 
            text: "Поддержать исключение с «проработкой»", 
            next: "exclude" 
          },
          { 
            text: "Предложить дать шанс исправиться", 
            next: "chance" 
          }
        ]
      },
      denunciation: {
        image: ppp,
        text: "Ваш донос приводит к аресту соседа. В школе вас ставят в пример, но дома мать перестает с вами разговаривать. Что делать дальше?",
        options: [
          { 
            text: "Усилить «бдительность»", 
            next: "vigilance" 
          },
          { 
            text: "Попросить перевода в другую школу", 
            next: "transfer" 
          }
        ]
      },
      // Развязки
      exclude: {
        image: rrr,
        text: "К 1940 году вы делаете карьеру в партии. Но в 1953-м после смерти Сталина ваше рвение начинают ставить вам в вину.",
        options: [],
        ending: "Вы стали частью системы, которая в итоге отвергла крайности сталинизма."
      },
      chance: {
        image: sss,
        text: "Ваше «мягкотелие» замечают. Вам грозит исключение, но начинается война. Вы уходите добровольцем, искупая «вину» кровью.",
        options: [],
        ending: "Война стерла ваши компромиссы с совестью, дав шанс на искупление."
      },
      vigilance: {
        image: ttt,
        text: "К 1939 году вы попадаете в поле зрения НКВД как «слишком усердный». Вас отправляют на строительство БАМа.",
        options: [],
        ending: "Рвение обернулось против вас - система перемолола и бдительных."
      },
      transfer: {
        image: uuu,
        text: "Вы тепепрь учитесь в новой школе. Там вы держитесь нейтралитета. В 1941 году уходите на фронт, где ваше прошлое забывается.",
        options: [],
        ending: "Вам удалось выскользнуть из жерновов эпохи, сохранив человечность."
      }
    }
  },
  isNew: true,
  isPopular: false,
  isRecommended: false
},
{
  id: 14,
  era: "XX век",
  eraForTimeline: "Советский период",
  title: "Лихие 90-е: Выжить в школе",
  description: "Примите решения школьника в эпоху дикого капитализма",
  duration: "15 мин",
  difficulty: 3,
  type: "choose-path",
  image: ninetiesQuest,
  story: {
    start: "school_break",
    nodes: {
      school_break: {
        image: vvv,
        text: "1995 год. На перемене вам предлагают бизнес-схему: продавать Киндер-сюрпризы втридорога младшим классам. Ваши действия?",
        options: [
          {
            text: "Вложить все карманные деньги в Киндеры",
            next: "kinder_business"
          },
          {
            text: "Доложить завучу — это спекуляция!",
            next: "teacher_report"
          }
        ]
      },
      kinder_business: {
        image: www,
        text: "Ваш бизнес расцветает. Но вскоре появляется конкурент — Витя из 9 Б с дешёвыми жвачками Love is.... Что делать?",
        options: [
          {
            text: "Объединиться и монополизировать рынок",
            next: "monopoly"
          },
          {
            text: "Заказать крышу у старшеклассников",
            next: "roof"
          }
        ]
      },
      teacher_report: {
        image: xxx,
        text: "Завуч хвалит вашу бдительность, но на следующий день весь класс объявляет вам бойкот. Как реагируете?",
        options: [
          {
            text: "Начать продавать запрещённые жвачки с приколами",
            next: "book_stash"
          },
          {
            text: "Подкупить одноклассников чипсами Московский картофель",
            next: "book_stash"
          }
        ]
      },
      monopoly: {
        image: yyy,
        text: "Вы и Витя создаёте картель: жвачки + Киндеры + списывание домашних работ. Но тут в школу приходит Пепси с бесплатной раздачей напитков. Ваш ход:",
        options: [
          {
            text: "Саботировать акцию — пустить слух, что Пепси светится в темноте",
            next: "pepsi_panic"
          },
          {
            text: "Переключиться на продажу коллекционных вкладышей от Турбо",
            next: "turbo_stickers"
          }
        ]
      },
      roof: {
        image: zzz,
        text: "Старшеклассники берут 50% выручки, но мочат Витю — его жвачки теперь лежат в туалете. Ваши действия:",
        options: [
          {
            text: "Разорвать контракт и нанять охранника из кадетского класса",
            next: "cadet_protection"
          },
          {
            text: "Уйти в подполье — торговать через закладки в учебнике ботаники",
            next: "book_stash"
          }
        ]
      },
      // Развязки
      pepsi_panic: {
        image: q,
        text: "Слух срабатывает — директор запрещает Пепси, а ваш картель становится главным поставщиком радости. К концу года вы покупаете первый Телепузик на класс.",
        options: [],
        ending: "Вы стали королём школьного бизнеса, но так и не сдали математику."
      },
      turbo_stickers: {
        image: qq,
        text: "Вкладыши с гоночными машинами — хит! Но вскоре учительница конфискует весь товар и делает из них наглядные пособия по геометрии.",
        options: [],
        ending: "Ваш бизнес разорился, зато класс выиграл олимпиаду Занимательная геометрия."
      },
      cadet_protection: {
        image: qqq,
        text: "Кадет Игорь прогоняет старшеклассников, но требует плату натурой — все Киндеры с игрушками-солдатиками. Ваша прибыль падает.",
        options: [],
        ending: "Вы сохранили бизнес, но лишились лучшей части товара. Игорь же собрал армию из 50 солдатиков."
      },
      book_stash: {
        image: aaaa,
        text: "Торговля идёт вяло. Однажды вы забываете закладку, и учительница находит в учебнике 10 жвачек.",
        options: [],
        ending: "Ваша схема раскрыта. Учительница забрала себе все жвачки."
      }
    }
  },
  isNew: false,
  isPopular: true,
  isRecommended: false
}
  // {
  //   id: 12,
  //   era: "XVIII-XX века",
  //   title: "Архангельск: ворота в Арктику",
  //   description: "Проверьте знания о старинном портовом городе",
  //   duration: "12 мин",
  //   difficulty: 4,
  //   type: "quiz",
  //   image: arc,
  //   questions: [
  //     {
  //       question: "В каком году был основан Архангельск?",
  //       options: ["1584", "1613", "1703", "1497"],
  //       correctIndex: 0,
  //       fact: "Основан по   у Ивана Грозного как Новохолмогоры, с 1613 — Архангельск"
  //     },
  //     {
  //       question: "Какое прозвище получил город за свою архитектуру?",
  //       options: ["Северная Венеция", "Деревянные ворота России", "Город тысячи церквей", "Северный Иерусалим"],
  //       correctIndex: 1,
  //       fact: "До революции здесь было свыше 1000 деревянных зданий XVII-XIX веков"
  //     },
  //     {
  //       question: "Какой уникальный памятник сохранился с XVII века?",
  //       options: ["Гостиный двор", "Дом Сутягина", "Подворье Соловецкого монастыря", "Морской вокзал"],
  //       correctIndex: 0,
  //       fact: "Каменный Гостиный двор (1668-1684) — старейшее здание города"
  //     },
  //     {
  //       question: "Какое событие сделало Архангельск «арктической столицей» в XX веке?",
  //       options: ["Строительство Севморпути", "Открытие алмазных месторождений", "Создание атомного флота", "Все ответы верны"],
  //       correctIndex: 3,
  //       fact: "Все эти события связаны с освоением Арктики"
  //     },
  //     {
  //       question: "Какой музей расположен в здании старинного морского вокзала?",
  //       options: ["Музей Севморпути", "Музей деревянного зодчества", "Краеведческий музей", "Музей художественного освоения Арктики"],
  //       correctIndex: 0,
  //       fact: "Музей истории Севморпути открыт в 1976 году"
  //     },
  //     {
  //       question: "Какая традиция существует с 1930-х годов?",
  //       options: ["Фестиваль «Северные конвои»", "Праздник «День Севера»", "Гонки на оленях", "Карнавал полярников"],
  //       correctIndex: 1,
  //       fact: "«День Севера» отмечают в последнее воскресенье марта"
  //     }
  //   ],
  //   isNew: true,
  //   isPopular: false,
  //   isRecommended: false,
  // }

  ];