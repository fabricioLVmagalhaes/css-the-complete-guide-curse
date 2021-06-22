const backdrop = document.querySelector('.backdrop');
const buttons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const posBtn = document.querySelector('a.modal__action');
const ngtBtn = document.querySelector(
  '.modal__action.modal__action--negative'
);
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const hideModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
};

for (let button of buttons) {
  button.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
}

backdrop.addEventListener('click', ()=> {
  mobileNav.style.display = 'none';
  hideModal();
});
ngtBtn.addEventListener('click', hideModal);

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
})

