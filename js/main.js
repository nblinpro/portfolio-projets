const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const siteNav = document.getElementById('siteNav');

if (hamburger && siteNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.acc-header').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.acc-item').classList.toggle('open');
  });
});