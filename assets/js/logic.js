// Access toggle switch HTML element
const themeSwitcher = document.getElementById('theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    themeSwitcher.textContent = '🌞';
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    themeSwitcher.textContent = '🌒';
  }
});


