import React from 'react';
import aboutUsPiter from '../../assets/images/about-us-piter.jpg';
import s from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`${s.section} animate__animated`} >
        <div className={s.container}>
            <h2>О проекте</h2>
            <div className={s.aboutContent}>
                <div className={s.aboutText}>
                    <p><strong>Историквест</strong> — это уникальная платформа, где история Санкт-Петербурга оживает через подлинные документы, фотографии и интерактивные задания.</p>
                    <p>Наш проект сочетает в себе историческую достоверность и увлекательный игровой формат, позволяя вам почувствовать себя настоящим исследователем прошлого.</p>
                    <p>Каждый квест создан при участии профессиональных историков и архивистов, чтобы обеспечить максимальную точность представленных материалов.</p>
                </div>
                <div className={s.aboutImage}>
                    <img src={aboutUsPiter} alt="Старый Петербург" className={s.vintageBorder}/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;