/* ============================================================
   David Moura — Portfolio behaviour
   Theme persistence · scroll reveals · nav state · live metrics
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Theme ---- */
  var saved = null;
  try { saved = localStorage.getItem("dm-theme"); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);

  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("dm-theme", next); } catch (e) {}
    });
  }

  /* ---- Nav scrolled state ---- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Scroll reveals ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Live metrics flicker (subtle, tasteful) ---- */
  if (!reduce) {
    var latencyEl = document.querySelector('[data-live="latency"]');
    var throughputEl = document.querySelector('[data-live="throughput"]');

    function jitter(base, spread, decimals) {
      var v = base + (Math.random() - 0.5) * 2 * spread;
      return v.toFixed(decimals);
    }
    // Update the leading text node of latency without clobbering the <small>.
    function tickLatency() {
      if (!latencyEl) return;
      // latencyEl content is "0.92<small>ms</small>" — replace first text node.
      var node = latencyEl.childNodes[0];
      if (node && node.nodeType === 3) node.nodeValue = jitter(0.92, 0.14, 2);
    }
    setInterval(function () {
      tickLatency();
      if (throughputEl) throughputEl.textContent = jitter(11.8, 0.7, 1);
    }, 2200);
  }

  /* ---- Project repo carousels ---- */
  document.querySelectorAll(".proj-repos").forEach(function (block) {
    var carousel = block.querySelector(".carousel");
    var track = block.querySelector(".carousel-track");
    var prev = block.querySelector(".cnav.prev");
    var next = block.querySelector(".cnav.next");
    if (!carousel || !track) return;

    function step() {
      var chip = track.querySelector(".repo-chip");
      var w = chip ? chip.getBoundingClientRect().width : 230;
      return w + 14; // chip + gap
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth - 1;
      var x = track.scrollLeft;
      var atStart = x <= 1;
      var atEnd = x >= max;
      carousel.classList.toggle("at-start", atStart);
      carousel.classList.toggle("at-end", atEnd);
      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd;
    }
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step() * 2, behavior: reduce ? "auto" : "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step() * 2, behavior: reduce ? "auto" : "smooth" }); });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  /* ---- Smooth-scroll offset for fixed nav (native smooth handles rest) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id === "#top") {
        if (id === "#top") { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }
        return;
      }
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
    });
  });
})();
