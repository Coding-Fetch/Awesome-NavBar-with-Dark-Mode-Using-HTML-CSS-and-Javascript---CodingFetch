// MENU OPEN CLOSE FUNCTION
const nav_items = document.querySelector(".nav-items");
const menu_button = document.querySelector("#menu-button");

menu_button.addEventListener("click", () =>{
    nav_items.classList.toggle("active");
})


// DARK MODE FUNCTION
const mode_btn = document.querySelector(".mode-btn");
const move_btn = document.querySelector(".move-btn");
const mode_icon = document.querySelector("#mode-icon");
const body = document.querySelector("body");

mode_btn.addEventListener("click", () =>{
    move_btn.classList.toggle("active");
    mode_icon.classList.toggle("ri-sun-line");
    body.classList.toggle("light-theme");
})