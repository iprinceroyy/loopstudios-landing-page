const btn = document.querySelector("#toggler");
const icon = document.querySelector("i");
const navBar = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    icon.classList.toggle("fa-times");
    navBar.classList.toggle("show");
});

// copyrights
const copyright = document.querySelector(".copyright");
const date = new Date().getFullYear();
copyright.innerHTML = `<p style="text-align:center">ⓒ${date} Loopstudios. All rights reserved</p>`;