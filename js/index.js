const btn = document.querySelector("#toggler");
const icon = document.querySelector("i");
const navBar = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    icon.classList.toggle("fa-times");
    navBar.classList.toggle("show");
});