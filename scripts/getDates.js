// To get DOM element
const lastModifiedElement = document.getElementById('lastModified');
const yearElement = document.getElementById('year');

// To get the date of last modification
const lastModified = new Date(document.lastModified).toLocaleString();

// To get the current year
const currentYear = new Date().getFullYear();

// Update the content of elements
lastModifiedElement.textContent = `Last modified: ${lastModified}`;

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  console.log("click");
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

const modeToggleBtn = document.getElementById('mode-toggle-btn');
modeToggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}


