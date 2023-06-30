const lastModifiedElement = document.getElementById('lastModified');
const yearElement = document.getElementById('year');

// To get the date of last modification
const lastModified = new Date(document.lastModified).toLocaleString();

// To get the current year
const currentYear = new Date().getFullYear();

// Update the content of elements 
lastModifiedElement.textContent = `Last modified: ${lastModified}` ;

// Menu hamburger
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navigation-header');

menuBtn.addEventListener('click', () => {
  console.log("click");
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});



// Obtener el elemento del sidebar

var sidebar = document.getElementById('sidebar-box6');

// Obtener la fecha actual
var currentDate = new Date();

// Obtener la última fecha de visita almacenada en localStorage
var lastVisitDate = localStorage.getItem('lastVisitDate');

if (lastVisitDate) {
  // Calcular la diferencia de tiempo entre la última visita y la fecha actual
  var timeDiff = currentDate.getTime() - new Date(lastVisitDate).getTime();

  // Convertir la diferencia de tiempo a días
  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    // Mostrar mensaje si la última visita fue hoy
    sidebar.innerHTML = ' 📅 Back so soon! Awesome!  🚀';
  } else {
    // Mostrar mensaje con la cantidad de días desde la última visita
    var message = (daysDiff === 1) ? 'day' : 'days';
    sidebar.innerHTML = 'You last visited ' + daysDiff + ' ' + message + ' ago. 😊';
  }
} else {
  // Mostrar mensaje si es la primera visita del usuario
  sidebar.innerHTML = ' 📅 Welcome! Let us know if you have any questions. 🎉';
}

// Guardar la fecha de visita actual en localStorage
localStorage.setItem('lastVisitDate', currentDate);



// Esperar a que el contenido del formulario esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el elemento span por su id
  var forumDateTimeElement = document.getElementById("forumDateTime");

  // Obtener la fecha y hora actual
  var currentDateTime = new Date();

  // Formatear la fecha y hora como desees
  var formattedDateTime = currentDateTime.toLocaleString();

  // Actualizar el contenido del elemento span con la fecha y hora formateadas
  forumDateTimeElement.textContent = formattedDateTime;
});
