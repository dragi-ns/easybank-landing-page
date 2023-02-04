import './style.css';

const toggleButton = document.getElementById('toggle-button');
const menu = document.getElementById(
  toggleButton.getAttribute('aria-controls')
);
toggleButton.addEventListener('click', () => {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    menu.dataset.open = false;
    toggleButton.setAttribute('aria-expanded', false);
  } else {
    menu.dataset.open = true;
    toggleButton.setAttribute('aria-expanded', true);
  }
});
