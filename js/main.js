// Theme toggle (persists where storage is available)
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
if (saved === 'dark' || saved === null) root.setAttribute('data-theme', 'dark');
themeBtn.addEventListener('click', () => {
  const dark = root.getAttribute('data-theme') === 'dark';
  if (dark) { root.removeAttribute('data-theme'); }
  else { root.setAttribute('data-theme', 'dark'); }
  try { localStorage.setItem('theme', dark ? 'light' : 'dark'); } catch (e) {}
});

const toggle = document.getElementById('navToggle');
const links = document.getElementById('navlinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
