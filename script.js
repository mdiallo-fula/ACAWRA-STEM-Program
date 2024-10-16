"use strict";

// get button and their info
const btns = document.querySelectorAll("a");
const btnsInfo = document.querySelectorAll(".info");

// Function to check if the buttons are in view and display info accordingly
function checkVisibility() {
  for (let [index, btn] of btns.entries()) {
    const rect = btn.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      btnsInfo[index].classList.add("show");
    } else {
      btnsInfo[index].classList.remove("show");
    }
  }
}

// Add scroll event listener
window.addEventListener("scroll", checkVisibility);
// Check visibility on page load
checkVisibility();
