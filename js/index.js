const btn = document.querySelector(".nav-toggler");
const navBar = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    navBar.classList.toggleClass("show");
});