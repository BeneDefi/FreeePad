const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

// Function to store the dark mode preference
function store(value) {
  localStorage.setItem('darkmode', value);
}

// Function to load the saved theme preference
function load() {
  const darkmode = localStorage.getItem('darkmode');

  // If the dark mode was never activated
  if (!darkmode) {
    store(false);
    icon.classList.add('fa-sun');
  } else if (darkmode == 'true') { // If dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if (darkmode == 'false') { // If dark mode is disabled
    icon.classList.add('fa-sun');
  }
}

load();

btn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  // Save the dark mode preference
  store(body.classList.contains('darkmode'));

  if (body.classList.contains('darkmode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  // Remove the animation class after 500ms
  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});
