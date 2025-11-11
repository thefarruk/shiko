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

const LANG = {
  tr: {
    srv1_title: "1. Eğitim Danışmanlığı",
    srv1_1: "Yurtdışı eğitim kurumlarının seçimi",
    srv1_2: "Öğrencinin hedef ve imkanlarına göre analiz",
    srv1_3: "Eğitim yol haritası oluşturma",

    srv2_title: "2. Üniversite ve Okul Kayıtları",
    srv2_1: "Belge hazırlama ve başvuru işlemleri",
    srv2_2: "Başvuru sürecinin tam takibi",
    srv2_3: "Okulların gereksinim ve tarihlerinin kontrolü",

    srv3_title: "3. Vize Danışmanlığı",
    srv3_1: "Öğrenci vizesi için belge hazırlama",
    srv3_2: "Vize gereksинimleri ile ilgili danışmanlık",
    srv3_3: "Başvuru sürecinde tam rehberlik",

    srv4_title: "4. İkamet ve Çalışma İzni",
    srv4_1: "İkamet izni başvurularında destek",
    srv4_2: "Çalışma izni işlemlerinde rehberlik",
    srv4_3: "Ülke yasaları ve gereksинimlerine uygun danışманlık",

    srv5_title: "5. Kişisel Danışmanlık",
    srv5_1: "Bireysel danışmanlık görüşmeleri",
    srv5_2: "Ülke seçimi ve uyum sürecinde destek",
    srv5_3: "Yeni yaşam kurma sürecinde rehberlik",

    srv6_title: "6. Bilgilendirme Desteği",
    srv6_1: "Sürecin düzenli bilgilendirilmesi",
    srv6_2: "Her adım için detaylı talimatlar",
    srv6_3: "Her zaman soru-cevap desteği",

    srv7_title: "7. A’dan Z’ye Tam Paket",
    srv7_1: "Göç ve yerleşim planlaması",
    srv7_2: "Kabul + vize + ikamet + uyum süreci",
    srv7_3: "Yurtdışı eğitim ve yaşam için tam destek",
  },

  tm: {
    srv1_title: "1. Bilim Maslahaty",
    srv1_1: "Daşary ýurt okuw ýerleriniň saýlanmagy",
    srv1_2: "Talyp maksadyna görä analiz",
    srv1_3: "Okuw ýol kartasynyň döredilmegi",

    srv2_title: "2. Uniwersitet we Mekdep Ýazgylary",
    srv2_1: "Resminamalar taýýarlamak",
    srv2_2: "Ýazga alnyş prosesiniň doly gözegçiligi",
    srv2_3: "Mekdepleriň talaplarynyň barlanmagy",

    srv3_title: "3. Wiza Maslahaty",
    srv3_1: "Talyp wizasy üçin resminamalar",
    srv3_2: "Wiza talaplary barada maslahat",
    srv3_3: "Doly ýol görkezme",

    srv4_title: "4. Ýaşaýyş we Iş Rugsady",
    srv4_1: "Ýaşaýyş rugsady üçin goldaw",
    srv4_2: "Iş rugsady boýunça maslahat",
    srv4_3: "Kanunlara laýyk ýol görkezme",

    srv5_title: "5. Şahsy Maslahat",
    srv5_1: "Şahsy duşuşyklar",
    srv5_2: "Ýurt saýlamakda goldaw",
    srv5_3: "Täze durmuşa uýgunlaşmak boýunça kömek",

    srv6_title: "6. Maglumat Goldawy",
    srv6_1: "Proses boýunça yzygider maglumat",
    srv6_2: "Her ädim üçin görkezme",
    srv6_3: "Hemişe sorag-jogap goldawy",

    srv7_title: "7. A-dan Z-e Dolulyk Paketi",
    srv7_1: "Göç we ýerleşmek meýilnamasy",
    srv7_2: "Kabul + wiza + ýaşaýyş rugsady",
    srv7_3: "Daşary ýurt bilim we ýaşamak üçin goldaw",
  },

  ru: {
    srv1_title: "1. Образовательная консультация",
    srv1_1: "Выбор зарубежных учебных заведений",
    srv1_2: "Анализ целей и возможностей студента",
    srv1_3: "Составление образовательного маршрута",

    srv2_title: "2. Регистрация в университеты и школы",
    srv2_1: "Подготовка документов",
    srv2_2: "Полное сопровождение процесса",
    srv2_3: "Контроль требований учебных заведений",

    srv3_title: "3. Визовая поддержка",
    srv3_1: "Подготовка документов на студенческую визу",
    srv3_2: "Консультация по визовым требованиям",
    srv3_3: "Полное сопровождение при подаче",

    srv4_title: "4. Вид на жительство и разрешение на работу",
    srv4_1: "Поддержка в оформлении ВНЖ",
    srv4_2: "Помощь с разрешением на работу",
    srv4_3: "Консультации в соответствии с законами страны",

    srv5_title: "5. Персональная консультация",
    srv5_1: "Индивидуальные консультации",
    srv5_2: "Помощь с выбором страны",
    srv5_3: "Поддержка при адаптации",

    srv6_title: "6. Информационная поддержка",
    srv6_1: "Регулярное информирование о процессе",
    srv6_2: "Подробные инструкции к каждому шагу",
    srv6_3: "Ответы на вопросы в любое время",

    srv7_title: "7. Полный пакет A–Z",
    srv7_1: "Планирование переезда",
    srv7_2: "Поступление + виза + ВНЖ",
    srv7_3: "Полная поддержка для жизни и учёбы за границей",
  }
};
function applyLanguage(lang) {
  const t = LANG[lang];
  if (!t) return;

  // Меняем ВСЕ элементы с переводом
  for (const id in t) {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  }
}

document.querySelectorAll(".languages button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.textContent.trim().toLowerCase();
    applyLanguage(lang);
  });
});
