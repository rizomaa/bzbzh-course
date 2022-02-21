let navMain = document.querySelector('.page-nav__container');
let navToggle = document.querySelector('.page-nav__toggle');
let menuItem = document.querySelectorAll('.menu-list__item');

  navMain.classList.remove('page-nav__container--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('page-nav__container--closed')) {
      navMain.classList.remove('page-nav__container--closed');
      navMain.classList.add('page-nav__container--opened');
    } else {
      navMain.classList.add('page-nav__container--closed');
      navMain.classList.remove('page-nav__container--opened');
    }
  });

  menuItem.forEach(el => {
    el.addEventListener('click', function() {
      console.log('close menu');
      navMain.classList.add('page-nav__container--closed');
      navMain.classList.remove('page-nav__container--opened');
    })
  });