let typed1 = new Typed(".auto-type", {
    strings : [""],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true 
});


let themeBtn = document.querySelector(".theme-btn");
let sunMode = document.querySelector(".sun-mode");
let moon = document.querySelector(".moon");
let body = document.querySelector("body");
let header = document.querySelector("header"); 
let logo = document.querySelector(".logo");
let navTags = document.querySelectorAll(".nav-tag");
let btns = document.querySelectorAll(".btn");
let stackBtns = document.querySelectorAll(".stack-btn");
let allStat = document.querySelectorAll(".stat h1");
let statText = document.querySelectorAll(".stat-text");
let feedback = document.querySelector(".feedback");
let menuBarIcon = document.querySelector(".menu-bar-icon");
let xmark = document.querySelector(".xmark-icon");
let menuBar = document.querySelector(".menu-bar");
let menuTags = document.querySelectorAll(".menu-tag");

themeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    sunMode.classList.toggle("sun");
    moon.classList.toggle("moon");
    body.classList.toggle("body-color");
    header.classList.toggle("header-color");
    logo.classList.toggle("logo-style");

    for(let navTag of navTags) {
        navTag.classList.toggle("tag");
    }

    for(let btn of btns) {
        btn.classList.toggle("button");
    }

    for(let stackBtn of stackBtns) {
        stackBtn.classList.toggle("new-stack-btn");  
    }

    for(let stat of allStat) {
        stat.classList.toggle("new-stat");
    }

    for(let stat of statText) {
        stat.classList.toggle("new-stat-text");
    }
    
    feedback.classList.toggle("feedback-container");
    menuBarIcon.classList.toggle("menu-bar-icon-color");
    xmark.classList.toggle("xmark-icon-color");
    menuBar.classList.toggle("menu-bar-color");
    for(let menuTag of menuTags) {
        menuTag.classList.toggle("menu-tag-color");
    }
});


// let menuBarIcon = document.querySelector(".menu-bar-icon");
// let xmark = document.querySelector(".xmark-icon");
// let menuBar = document.querySelector(".menu-bar");
let menu = document.querySelector(".menu");

menu.addEventListener("click", function(e) {
    e.preventDefault();
    menuBar.classList.toggle("menu-bar-slid");
    menuBarIcon.classList.toggle("menu-bar-icon-hidden");
    xmark.classList.toggle("xmark-icon");
});


// window.addEventListener('resize', () => {
//     if (window.innerWidth >= 1000) {
//         location.reload();
//     }
// });