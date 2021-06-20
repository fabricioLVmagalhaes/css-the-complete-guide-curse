const backdrop = document.querySelector('.backdrop');
const buttons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const posBtn = document.querySelector('a.modal__action');
const ngtBtn = document.querySelector(
  '.modal__action.modal__action--negative'
);

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

backdrop.addEventListener('click', hideModal);
ngtBtn.addEventListener('click', hideModal);

