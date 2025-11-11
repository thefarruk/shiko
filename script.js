// ==== DARK MODE ====
const body = document.body;
const themeToggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") body.classList.add("dark-mode");

themeToggleBtn?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// ==== LANGUAGE SWITCH ====
document.querySelectorAll(".languages button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Dil değiştirildi: " + btn.textContent.trim());
  });
});

// ==== ACCORDIONS (MAIN) ====
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-toggle");
    const section = document.getElementById(id);
    if (!section) return;

    const isOpen = section.classList.contains("show");
    section.classList.toggle("show", !isOpen);

    const icon = btn.querySelector("i");
    if (icon) icon.style.transform = isOpen ? "" : "rotate(180deg)";
  });
});

// ==== ACCOUNT ACCORDIONS ====
document.querySelectorAll(".account-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const body = toggle.nextElementSibling;
    const expanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!expanded));
    body.hidden = expanded;

    const icon = toggle.querySelector("i");
    if (icon) icon.style.transform = expanded ? "" : "rotate(90deg)";
  });
});

// ==== COPY BUTTONS ====
document.addEventListener("click", e => {
  if (e.target.classList.contains("copy-btn")) {
    const value = e.target.dataset.copy;
    navigator.clipboard.writeText(value).then(() => {
      e.target.textContent = "Kopyalandı ✔";
      setTimeout(() => (e.target.textContent = "Kopyala"), 1500);
    });
  }
});

// ==== FORM ====
document.querySelector("form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Mesaj gönderildi!");
  e.target.reset();
});

// ===== СЛОВАРЬ =====
const translations = {
  tr: {
    form_title: "İletişim Formu",
    name_placeholder: "Adınız Soyadınız",
    email_placeholder: "Email Adresiniz",
    msg_placeholder: "Mesajınız",
    send_btn: "Gönder",

    bank_title: "Banka Hesapları",
    office_title: "Ofis Hizmetlerimiz",
    transfer_title: "Ülke Dışı Para Gönderme"
  },

  tm: {
    form_title: "Habarlaşmak Formy",
    name_placeholder: "Adyňyz Familiýaňyz",
    email_placeholder: "Email Salgyňyz",
    msg_placeholder: "Habaryňyz",
    send_btn: "Ugrat",

    bank_title: "Bank Hasaplary",
    office_title: "Ofis Hyzmatlary",
    transfer_title: "Ýurt Daşyna Pul Ugratmak"
  },

  ru: {
    form_title: "Форма Связи",
    name_placeholder: "Ваше имя и фамилия",
    email_placeholder: "Ваш email",
    msg_placeholder: "Ваше сообщение",
    send_btn: "Отправить",

    bank_title: "Банковские Счета",
    office_title: "Офисные Услуги",
    transfer_title: "Международный Перевод Денег"
  }
};

// ===== ФУНКЦИЯ ПЕРЕВОДА =====
function setLanguage(lang) {
  const t = translations[lang];

  // Заголовки
  document.querySelector("#form_title").textContent = t.form_title;
  document.querySelector("#bank_title").textContent = t.bank_title;
  document.querySelector("#office_title").textContent = t.office_title;
  document.querySelector("#transfer_title").textContent = t.transfer_title;

  // Плейсхолдеры
  document.querySelector("#name_input").placeholder = t.name_placeholder;
  document.querySelector("#email_input").placeholder = t.email_placeholder;
  document.querySelector("#msg_input").placeholder = t.msg_placeholder;

  // Кнопка
  document.querySelector("#send_btn").textContent = t.send_btn;
}

// ===== ОБРАБОТКА КНОПОК =====
document.querySelectorAll(".languages button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.textContent.trim().toLowerCase();
    setLanguage(lang);
  });
});
