function applyFaqLanguage(lang) {
  const selectedLanguage = window.FAQ_DATA.ui[lang] ? lang : "en";
  const selectedUi = window.FAQ_DATA.ui[selectedLanguage];

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-faq-i18n]").forEach((element) => {
    const key = element.getAttribute("data-faq-i18n");
    if (selectedUi[key]) {
      element.textContent = selectedUi[key];
    }
  });

  const faqList = document.getElementById("faq-list");
  faqList.innerHTML = "";

  window.FAQ_DATA.items.forEach((item) => {
    const localizedItem = item[selectedLanguage] || item.en;

    if (!localizedItem) {
      return;
    }

    const article = document.createElement("article");
    article.className = "faq-item";

    const question = document.createElement("h3");
    question.textContent = localizedItem.question;

    const answer = document.createElement("p");
    answer.textContent = localizedItem.answer;

    article.appendChild(question);
    article.appendChild(answer);
    faqList.appendChild(article);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.getAttribute("data-lang") === selectedLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  localStorage.setItem("preferred-language", selectedLanguage);
}

document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem("preferred-language");
  const initialLanguage = storedLanguage === "sv" ? "sv" : "en";

  applyFaqLanguage(initialLanguage);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      applyFaqLanguage(button.getAttribute("data-lang"));
    });
  });
});
