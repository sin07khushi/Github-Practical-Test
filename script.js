
// Contact Button Functionality
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
    alert("Hello! Thanks for visiting.");
});

// Mobile Navbar Functionality
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

    menuToggle.textContent = isExpanded ? "✕" : "☰";
});

// Close Navbar After Clicking a Link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// Automatic Copyright Year
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
