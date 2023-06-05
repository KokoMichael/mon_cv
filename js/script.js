let hamburger = document.querySelector(".hamburger");
let icon = document.querySelector(".bi-list");
let nav = document.querySelector(".nav-link");

hamburger.onclick = function(){
    icon.classList.toggle("bi-x-lg");
    nav.classList.toggle("active");
}