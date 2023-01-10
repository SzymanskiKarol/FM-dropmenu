const featuresBtn = document.querySelector(".features-dropdown-starter");
const featuresMenu = document.querySelector(".features");
const featuresArrow = document.querySelectorAll(".arrow")[0];

featuresBtn.addEventListener("click", () => {
    featuresMenu.classList.toggle("display-none")
    featuresArrow.classList.toggle("arrow-rotate")
});

const companyBtn = document.querySelector(".company-dropdown-starter");
const companyMenu = document.querySelector(".company");
const companyArrow = document.querySelectorAll(".arrow")[1];

companyBtn.addEventListener("click", () => {
    companyMenu.classList.toggle("display-none")
    companyArrow.classList.toggle("arrow-rotate")
});

const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const navBar = document.querySelector("nav");

menuOpen.addEventListener("click", () => {
    navBar.classList.add("menu-open");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
})

menuClose.addEventListener("click", () => {
    navBar.classList.remove("menu-open");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
})