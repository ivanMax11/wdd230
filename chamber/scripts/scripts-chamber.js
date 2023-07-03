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



// To get the Sidebar element

var sidebar = document.getElementById('sidebar-box6');

// To get the current Date
var currentDate = new Date();

// To get the last visit in localStorage
var lastVisitDate = localStorage.getItem('lastVisitDate');

if (lastVisitDate) {
  // Calculate the difference of time between the last visit and  current Date
  var timeDiff = currentDate.getTime() - new Date(lastVisitDate).getTime();

  //  Convert the difference of  time in days 
  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    // Show the message if the last visit was today 
    sidebar.innerHTML = ' 📅 Back so soon! Awesome!  🚀';
  } else {
    //  Show the message with the ammount of days from the last visit 
    var message = (daysDiff === 1) ? 'day' : 'days';
    sidebar.innerHTML = 'You last visited ' + daysDiff + ' ' + message + ' ago. 😊';
  }
} else {
  //  Show the message if it´s the first visit of user  
  sidebar.innerHTML = ' 📅 Welcome! Let us know if you have any questions. 🎉';
}

// Save the Date of current visit in localStorage   
localStorage.setItem('lastVisitDate', currentDate);



// To wait that the form content it´s completly charged
document.addEventListener("DOMContentLoaded", function() {
  //  Select the span elemment for your id Seleccionar el elemento span por su id
  var forumDateTimeElement = document.getElementById("forumDateTime");

  // To get the current Date and hour 
  var currentDateTime = new Date();

  // To format the Date and hour how you wish  
  var formattedDateTime = currentDateTime.toLocaleString();

  // Actualize the elemment of span content with the formated Date and hour 
  forumDateTimeElement.textContent = formattedDateTime;
});
