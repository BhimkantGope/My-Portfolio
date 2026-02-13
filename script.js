let typed1 = new Typed(".auto-type", {
    strings : ["Web Developer", "Full Stack Web Developer", "Software Developer", "Web Designer", "Programmer"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true 
});


let tablinks = document.getElementsByClassName("tab-title");
let tabcontents = document.getElementsByClassName("tab-body");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}