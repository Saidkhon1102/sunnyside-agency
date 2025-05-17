
const retort = document.querySelector(".retort");
const menu = document.querySelector(".header__menu");
menu.addEventListener("click", (e) => {
    retort.classList.toggle("hidden");
});