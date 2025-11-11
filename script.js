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
