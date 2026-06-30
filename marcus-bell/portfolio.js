// Lean portfolio runtime: theme toggle, scroll progress, back-to-top.
// No tabs or scrollspy (single-scroll layout). Anchor scrolling is native CSS.
(function () {
  "use strict";

  // Theme. Per-portfolio key so multiple portfolios on one host don't share state.
  var THEME_KEY = "portfolio-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  }
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) apply(saved);
  } catch (e) {}
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  // Scroll progress bar.
  var bar = document.getElementById("scrollProgress");
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop || window.pageYOffset) / max : 0;
      bar.style.width = (pct * 100).toFixed(2) + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Back to top.
  var top = document.getElementById("backToTop");
  if (top) {
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
