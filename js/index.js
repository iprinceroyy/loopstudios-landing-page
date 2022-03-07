const btn = document.querySelector("#toggler");
const icon = document.querySelector("i");
const navBar = document.querySelector(".navbar");

// toggle
btn.addEventListener("click", () => {
    icon.classList.toggle("fa-times");
    navBar.classList.toggle("show");
});

// if navbar is open, then on scroll close it
window.addEventListener("scroll", () => {
    icon.classList.remove("fa-times");
    navBar.classList.remove("show");
});

// copyrights
const copyright = document.querySelector(".copyright");
const date = new Date().getFullYear();
copyright.innerHTML = `<p style="margin: 0 0 0;">ⓒ${date} Loopstudios. All rights reserved</p>`;