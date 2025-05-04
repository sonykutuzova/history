import React from 'react';
import s from './Contacts.module.css';

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
    alert('Сообщение отправлено!');
  };

  return (
    <section id="contacts" className={s.contactsSection}>
      <div className={s.container}>
        <h2>Свяжитесь с нами</h2>
        <div className={s.contactsGrid}>
          <div className={s.contactsInfo}>
            <h3>Мы всегда рады вашим вопросам и предложениям</h3>
            <p>Присоединяйтесь к нашему сообществу любителей истории Петербурга!</p>
            
            <div className={s.contactItem}>
              <a href="https://t.me/sonyakutuzova" className={s.socialIcon}>TG</a>
              <p>@sonyakutuzova</p>
              <a href="https://t.me/FedorBegun" className={s.socialIcon}>TG</a>
              <p>@FedorBegun</p>
            </div>
            
            <div className={s.contactItem}>
              <span>🏛️</span>
              <p>Санкт-Петербург, Университет ИТМО</p>
            </div>

              
              
          </div>
          
          <div className={s.contactForm}>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Ваше имя" 
                required 
                className={s.formInput}
              />
              <input 
                type="email" 
                placeholder="Ваш email" 
                required 
                className={s.formInput}
              />
              <textarea 
                placeholder="Ваше сообщение" 
                rows="5" 
                required 
                className={s.formTextarea}
              ></textarea>
              <button type="submit" className={s.btn}>
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;