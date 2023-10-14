const mobileMenu = document.querySelector('.js-mobile-menu');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const openMenu = ()=> {
  window.addEventListener('keydown', handleEscKeyPress);
  mobileMenu.classList.add('is-open');
}

const closeMenu = ()=> {
  window.removeEventListener('keydown', handleEscKeyPress);
  mobileMenu.classList.remove('is-open');
}

const handleEscKeyPress = (evt)=> {
  const isEsc = evt.code === 'Escape';
  if (isEsc) {
    closeMenu();
    document.body.classList.remove('is-open');
  }
}

const handleBackDropClick =(evt)=> {
  if (evt.target === mobileMenu) {
   closeMenu()
    document.body.classList.remove('is-open');
  }
}

window.addEventListener('click', handleBackDropClick);
openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

