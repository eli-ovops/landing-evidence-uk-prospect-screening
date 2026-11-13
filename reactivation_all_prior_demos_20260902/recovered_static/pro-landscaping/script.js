const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Close' : 'Menu';
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = 'Menu';
  });
});
