function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openCV() {
  document.getElementById("cv-overlay").style.display = "flex";
}

function closeCV() {
  document.getElementById("cv-overlay").style.display = "none";
}

// fermer avec ESC
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeCV();
  }
});

// fermer en cliquant en dehors
document.getElementById("cv-overlay").addEventListener("click", function(e) {
  if (e.target.id === "cv-overlay") {
    closeCV();
  }
});