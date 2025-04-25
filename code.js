// Анимация при скролле
document.addEventListener('DOMContentLoaded', function() {
    // Анимация элементов при появлении в viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.classList.add(element.getAttribute('data-animation'));
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запустить при загрузке
    
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Закрыть мобильное меню после клика
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
    
    // Анимация карточек возможностей
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.classList.add('animate__fadeInUp');
        card.setAttribute('data-animation', 'animate__fadeInUp');
    });
    
    // Анимация временной шкалы
    const items = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
    
    items.forEach(item => {
        const position = item.getBoundingClientRect().top;
        if (position < windowHeight * 0.8) {
            item.classList.add('visible');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    
    // Устанавливаем индекс для каждого элемента меню
    navItems.forEach((item, index) => {
      item.style.setProperty('--i', index);
    });
    
    // Переключение меню с анимацией
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
      
      // Анимация иконки меню
      this.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        menuBtn.innerHTML = '☰';
      });
    });
    
    // Закрытие меню при ресайзе
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        menuBtn.innerHTML = '☰';
      }
    });
  });