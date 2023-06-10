
// Obtener elementos del DOM
const lastModifiedElement = document.getElementById('lastModified');
const yearElement = document.getElementById('year');

// Obtener la fecha y hora de la última modificación
const lastModified = new Date(document.lastModified).toLocaleString();

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Actualizar el contenido de los elementos
lastModifiedElement.textContent = `Last modified: ${lastModified}`;
yearElement.textContent = currentYear;


// Obtener el elemento por su ID
const flagIconElement = document.getElementById('flagIcon');

// Asignar el contenido o estilo deseado al elemento
flagIconElement.innerHTML = '🇦🇷'; // Puedes usar el código del emoji de la bandera de Argentina

// Opcionalmente, puedes aplicar estilos al elemento
flagIconElement.style.fontSize = '24px';
