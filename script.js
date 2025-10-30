function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function setLanguage(lang) {
    alert('Dil değiştirildi: ' + lang.toUpperCase() + '\n(Not: Çoklu dil desteği sadece örnek olarak çalışır.)');
}

// Form gönderildiğinde mesaj
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mesaj gönderildi! Teşekkür ederiz.');
        form.reset();
    });
}
