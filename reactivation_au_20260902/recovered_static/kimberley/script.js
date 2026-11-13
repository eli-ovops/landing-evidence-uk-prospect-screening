const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
