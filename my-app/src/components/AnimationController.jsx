import { useEffect } from 'react';

const AnimationController = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate__animated');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.classList.add(element.getAttribute('data-animation'));
        }
      });

      // Анимация временной шкалы
      const timelineItems = document.querySelectorAll('.timelineItem');
      const windowHeight = window.innerHeight;

      timelineItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        if (position < windowHeight * 0.8) {
          item.classList.add('visible');
        }
      });
    };

    const smoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      e.preventDefault();

      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });

        //Закрытие бургер-меню, если активно
        const burgerCheckbox = document.getElementById('burger-toggle');
        if (burgerCheckbox && burgerCheckbox.checked) {
          burgerCheckbox.checked = false;
        }
      }
    };

    window.addEventListener('scroll', animateOnScroll);
    document.addEventListener('click', smoothScroll);
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      document.removeEventListener('click', smoothScroll);
    };
  }, []);

  return null;
};

export default AnimationController;
