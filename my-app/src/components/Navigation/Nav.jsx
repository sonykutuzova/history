import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={`${s.nav} animate__animated`}>

            <div className={`${s.container} ${s.navContainer}`}>
                <a href="#" className={s.logo}>ИСТОРИКВЕСТ</a>
                
                <div className={s.bigMenu}>
                    <ul className={s.navLinks}>
                        <li className={s.navLinksLi}><a href="#about" className={s.menuLinksA}>О проекте</a></li>
                        <li className={s.navLinksLi}><a href="#features" className={s.menuLinksA}>Возможности</a></li>
                        <li className={s.navLinksLi}><a href="#quests" className={s.menuLinksA}>Квесты</a></li>
                        {/* <li className={s.navLinksLi}><a href="#timeline" className={s.menuLinksA}>Эпохи</a></li> */}
                        <li className={s.navLinksLi}><a href="#contacts" className={s.menuLinksA}>Контакты</a></li>
                    </ul>
                </div>
                
                <div className={s.mobileMenuBtn}>
                    <input type="checkbox" className={s.burgerToggle} id="burger-toggle"/>
                    <label htmlFor="burger-toggle" className={s.burgerButton}>
                        <span className={s.burgerLine}></span>
                    </label>
                    <ul className={s.burgerLinks}>
                        <li className={s.burgerLinksLi}><a href="#about" className={s.menuLinksA}>О проекте</a></li>
                        <li className={s.burgerLinksLi}><a href="#features" className={s.menuLinksA}>Возможности</a></li>
                        <li className={s.burgerLinksLi}><a href="#quests" className={s.menuLinksA}>Квесты</a></li>
                        {/* <li className={s.burgerLinksLi}><a href="#timeline" className={s.menuLinksA}>Эпохи</a></li> */}
                        <li className={s.burgerLinksLi}><a href="#contacts" className={s.menuLinksA}>Контакты</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;