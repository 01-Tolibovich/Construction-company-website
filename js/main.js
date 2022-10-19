// Бургер меню
const hamb = document.querySelector("#hamb");
const menu = document.querySelector(".menu");
const lists = document.querySelector(".lists");
const body = document.body;

hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
    e.preventDefault();
    lists.classList.toggle("show");
    menu.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
}

const links = Array.from(menu.children);
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
    lists.classList.remove("show");
    menu.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}