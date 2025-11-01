const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

function setLanguage(lang) {
  alert('Dil değiştirildi: ' + lang.toUpperCase());
}

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mesaj gönderildi!');
    form.reset();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.theme-toggle button').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  document.querySelectorAll('.languages button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.textContent.trim()));
  });
});
