import React, { useState } from 'react';
import s from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка подписки
    alert(`Спасибо за подписку! На ${email} будут приходить новости.`);
    setEmail('');
  };

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerContent}>
          <div className={s.footerSection}>
            <h3>Историквест</h3>
            <p>Интерактивные исторические квесты по Санкт-Петербургу</p>
          </div>
          
          <div className={s.footerSection}>
            <h3>Навигация</h3>
            <ul>
              <li><a href="#about">О проекте</a></li>
              <li><a href="#features">Возможности</a></li>
              <li><a href="#quests">Квесты</a></li>
              {/* <li><a href="#timeline">Эпохи</a></li> */}
            </ul>
          </div>
          
          
          <div className={s.footerSection}>
            <h3>Подписаться</h3>
            <form className={s.subscribeForm} onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Ваш email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">→</button>
            </form>
            <p>Получайте новости о новых квестах</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;