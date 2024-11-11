"use strict";

// JavaScript code to inject the header
document.addEventListener("DOMContentLoaded", function () {
  const navBar = `
<nav class="navbar navbar-expand navbar-dark bg-dark fixed-top" aria-label="navbar">
  <div class="container-fluid">
    <h2 class="text-white">ACAWRA</h2>
    <div class="collapse navbar-collapse" id="navbarLinks">
      <ul class="navbar-nav me-auto" style="overflow-x:scroll">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="index.html"
            >STEM Program</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="volunteer.html"
            >Volunteer</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="parent.html"
            >Register</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
  // Inject header content into the body
  document.body.insertAdjacentHTML("afterbegin", navBar);
});

// Changing active navigation link based on page in view
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    console.log(link.getAttribute("href"));
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
