let typed1 = new Typed(".auto-type", {
    strings : ["Web Developer", "Full Stack Web Developer", "Software Developer", "Web Designer", "Programmer"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true 
});


let themeBtn = document.querySelector(".theme-btn");
let body = document.querySelector("body");

themeBtn.addEventListener("click", function() {
    body.classList.toggle("body-color");
});