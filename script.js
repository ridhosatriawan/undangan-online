const gate = document.querySelector('#gate');
const door = document.querySelector('#door');
const open = document.querySelector('#open');

open.addEventListener('click', () => {
  gate.classList.add('hidden');
  door.classList.remove('hidden');
});
