// To get the Banner 
const banner = document.getElementById("banner");
const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
  banner.innerHTML = `
  <h2>🤝🏼 Come join us for the chamber meet and greet Wednesday at 07:00 PM</h2>
  <button onclick="closeBanner()">Close</button>
  `;

} else {
  banner.style.display = "none";
}

function closeBanner() {
  banner.style.display = "none";
}