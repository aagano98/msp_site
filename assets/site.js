// Freehold site — shared behavior. Fail-open: nothing here is required to read the page.
(() => {
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) return;
  const els = [...document.querySelectorAll('.reveal')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already on screen -> never hide it
    el.classList.add('pre');
    io.observe(el);
  });
  // safety net: nothing stays hidden past 2s, whatever the observer does
  setTimeout(() => els.forEach(el => el.classList.remove('pre')), 2000);
})();
