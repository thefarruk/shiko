function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

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
