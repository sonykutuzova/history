import React from 'react';
import s from './Hero.module.css';

const Hero = () => {
    return (
        <header className={`${s.hero} ${s.animate}`} >
            <div className={s.heroContent}>
                <h1 className={s.heroH1}>Откройте Петербург заново</h1>
                <p className={s.subtitle}>Интерактивные исторические квесты по следам прошлого</p>
                <a href="#quests" className={`${s.btn} ${s.pulse}`}>Начать путешествие</a>
            </div>
            <div className={s.scrollDown}>
                <span>↓</span>
            </div>
        </header>
    )
}

export default Hero;