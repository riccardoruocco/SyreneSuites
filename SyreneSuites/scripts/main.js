// main.js - Basic JS for Syrene Suites

document.addEventListener('DOMContentLoaded', function() {
  console.log('Syrene Suites website loaded.');
});

function toggleMenu() {
  const hamIcon = document.querySelector('.header-ham-icon');
  if (hamIcon) {
    if (hamIcon.classList.contains('fa-bars')) {
      // Switch to X
      hamIcon.classList.remove('fa-bars');
      hamIcon.classList.add('fa-times');
    } else {
      // Switch back to hamburger
      hamIcon.classList.remove('fa-times');
      hamIcon.classList.add('fa-bars');
    }
  }
}

function setLang(lang) {
  const it = document.getElementById('lang-it');
  const en = document.getElementById('lang-en');
  if (lang === 'it') {
    it.classList.add('lang-active');
    en.classList.remove('lang-active');
  } else {
    en.classList.add('lang-active');
    it.classList.remove('lang-active');
  }
}