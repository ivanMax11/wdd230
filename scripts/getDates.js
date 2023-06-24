// To get DOM element
const lastModifiedElement = document.getElementById('lastModified');
const yearElement = document.getElementById('year');

// To get the date of last modification
const lastModified = new Date(document.lastModified).toLocaleString();

// To get the current year
const currentYear = new Date().getFullYear();

// Update the content of elements
lastModifiedElement.textContent = `Last modified: ${lastModified}`;

// Menu hamburger
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

// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

