// language switcher: toggles Spanish (default, content already in the HTML)
// vs English (read from data-en-* attributes) and remembers the choice.
(function () {
  var STORAGE_KEY = "mt-lang";
  var FLAGS = { en: "🇬🇧", es: "🇪🇸" };

  function closeAllMenus() {
    document.querySelectorAll(".lang-switch.open").forEach(function (el) {
      el.classList.remove("open");
      var toggle = el.querySelector(".lang-switch__toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (!el.hasAttribute("data-es")) {
        el.setAttribute("data-es", el.textContent);
      }
      el.textContent = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-es");
    });

    document.querySelectorAll("[data-en-html]").forEach(function (el) {
      if (!el.hasAttribute("data-es-html")) {
        el.setAttribute("data-es-html", el.innerHTML);
      }
      el.innerHTML = lang === "en" ? el.getAttribute("data-en-html") : el.getAttribute("data-es-html");
    });

    document.querySelectorAll("[data-en-placeholder]").forEach(function (el) {
      if (!el.hasAttribute("data-es-placeholder")) {
        el.setAttribute("data-es-placeholder", el.getAttribute("placeholder") || "");
      }
      el.setAttribute(
        "placeholder",
        lang === "en" ? el.getAttribute("data-en-placeholder") : el.getAttribute("data-es-placeholder")
      );
    });

    document.querySelectorAll("[data-en-alt]").forEach(function (el) {
      if (!el.hasAttribute("data-es-alt")) {
        el.setAttribute("data-es-alt", el.getAttribute("alt") || "");
      }
      el.setAttribute("alt", lang === "en" ? el.getAttribute("data-en-alt") : el.getAttribute("data-es-alt"));
    });

    var titleEl = document.querySelector("title[data-en]");
    if (titleEl) {
      if (!titleEl.hasAttribute("data-es")) {
        titleEl.setAttribute("data-es", titleEl.textContent);
      }
      titleEl.textContent = lang === "en" ? titleEl.getAttribute("data-en") : titleEl.getAttribute("data-es");
    }

    document.querySelectorAll(".lang-switch").forEach(function (root) {
      var flagEl = root.querySelector("[data-lang-flag]");
      if (flagEl) flagEl.textContent = FLAGS[lang];
      root.querySelectorAll(".lang-switch__option").forEach(function (opt) {
        opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
      });
    });
  }

  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  function initSwitcher(root) {
    var toggle = root.querySelector(".lang-switch__toggle");
    var options = root.querySelectorAll(".lang-switch__option");
    if (!toggle) return;

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = !root.classList.contains("open");
      closeAllMenus();
      if (willOpen) {
        root.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    options.forEach(function (opt) {
      opt.addEventListener("click", function () {
        setLanguage(opt.getAttribute("data-lang"));
        closeAllMenus();
      });
    });
  }

  document.addEventListener("click", closeAllMenus);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllMenus();
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-switch").forEach(initSwitcher);
    var saved = localStorage.getItem(STORAGE_KEY) || "es";
    applyLanguage(saved);
  });
})();
