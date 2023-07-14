const mainDirectory = document.getElementById("mainDirectory");
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");

gridButton.addEventListener("click", () => {
  localStorage.setItem("viewType", "grid");
  displayMembersAsGrid();
});

listButton.addEventListener("click", () => {
  localStorage.setItem("viewType", "list");
  displayMembersAsList();
});

function displayMembersAsGrid() {
  mainDirectory.classList.remove("list-view");
  mainDirectory.classList.add("grid-view");
}

function displayMembersAsList() {
  mainDirectory.classList.remove("grid-view");
  mainDirectory.classList.add("list-view");
}

// Verificar si se debe mostrar la vista de grilla o lista
const viewType = localStorage.getItem("viewType") || "grid";

if (viewType === "grid") {
  displayMembersAsGrid();
} else {
  displayMembersAsList();
}
