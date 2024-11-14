"use strict";

// JavaScript code to inject the header
document.addEventListener("DOMContentLoaded", function () {
  const navBar = `
<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <h2 class="text-white">ACAWRA</h2>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">STEM Program</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="volunteer.html">Volunteer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="parent.html">Register</a>
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
