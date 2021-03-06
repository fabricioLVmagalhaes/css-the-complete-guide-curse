const backdrop = document.querySelector('.backdrop');
const buttons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const posBtn = document.querySelector('a.modal__action');
const ngtBtn = document.querySelector('.modal__action.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

const hideModal = () => {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
};

for (let button of buttons) {
  button.addEventListener('click', () => {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  hideModal();
});
if (ngtBtn) {
  ngtBtn.addEventListener('click', hideModal);
}

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

ctaButton.addEventListener('animationstart', (event) => {
  console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', (event) => {
  console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', (event) => {
  console.log('Animation iteration', event);
})
