const backdrop = document.querySelector('.backdrop');
const buttons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');

for (let button of buttons) {
  button.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
}
