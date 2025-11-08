// Темная тема
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Показ/скрытие ссылки
const toggleButton = document.getElementById('toggle-button');
const hiddenLink = document.getElementById('hidden-link');

toggleButton.addEventListener('click', () => {
  if (hiddenLink.style.display === 'none' || hiddenLink.style.display === '') {
    hiddenLink.style.display = 'block';
    toggleButton.textContent = 'Скрыть ссылку';
  } else {
    hiddenLink.style.display = 'none';
    toggleButton.textContent = 'Показать ссылку';
  }
});

// Загружаем тему из памяти
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Переключатель темы
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Переключатель языка
function setLanguage(lang) {
  alert('Dil değiştirildi: ' + lang.toUpperCase());
}

// Форма
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mesaj gönderildi!');
    form.reset();
  });
}


// DOM READY действия
window.addEventListener('DOMContentLoaded', () => {
  // Кнопки темы (если есть дополнительные)
  document.querySelectorAll('.theme-toggle button')
    .forEach(btn => btn.addEventListener('click', () => themeToggleBtn.click()));

  // Кнопки языков
  document.querySelectorAll('.languages button')
    .forEach(btn => btn.addEventListener('click', () => setLanguage(btn.textContent.trim())));
});
// Рабочий аккордеон "Ofis Hizmetlerimiz"
const accBtn = document.querySelector('.accordion-btn');
const accContent = document.querySelector('.accordion-content');

accBtn.addEventListener('click', () => {
  if (accContent.style.display === 'block') {
    accContent.style.display = 'none';
  } else {
    accContent.style.display = 'block';
  }
});

