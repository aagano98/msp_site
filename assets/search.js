/* Site search: opens the overlay and lazy-loads the self-hosted Pagefind UI
   bundle (/pagefind/, regenerated with: npx pagefind --site .). Fail-open:
   without the bundle the overlay reports search unavailable; the page works. */
(function () {
  var overlay = document.getElementById('search-overlay');
  var buttons = document.querySelectorAll('[data-search-open]');
  if (!overlay || !buttons.length) return;
  var loaded = false;
  function focusInput() {
    var inp = overlay.querySelector('input');
    if (inp) inp.focus();
  }
  function boot() {
    if (loaded) return;
    loaded = true;
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/pagefind/pagefind-ui.css';
    document.head.appendChild(css);
    var js = document.createElement('script');
    js.src = '/pagefind/pagefind-ui.js';
    js.onload = function () {
      try {
        new PagefindUI({ element: '#search-box', showImages: false });
        focusInput();
      } catch (e) { /* fail open */ }
    };
    js.onerror = function () {
      document.getElementById('search-box').textContent = 'Search is unavailable right now.';
    };
    document.head.appendChild(js);
  }
  function open() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    boot();
    focusInput();
  }
  function close() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }
  buttons.forEach(function (b) { b.addEventListener('click', open); });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
  });
})();
