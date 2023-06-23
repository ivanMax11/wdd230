const lastModifiedElement = document.getElementById('lastModified');
const yearElement = document.getElementById('year');

const lastModified = new Date(document.lastModified).toLocaleString();

const currentYear = new Date().getFullYear();

lastModifiedElement.textContent = `Last modified: ${lastModified}`;


