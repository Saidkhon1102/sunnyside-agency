
const respond = document.querySelector(".respond");
const menu = document.querySelector(".header__menu");
menu.addEventListener("click", (e) => {
    respond.classList.toggle("hidden");
});