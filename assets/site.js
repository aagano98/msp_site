// Freehold site — shared behavior. Kept deliberately small: the footer year only.
(() => {
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
