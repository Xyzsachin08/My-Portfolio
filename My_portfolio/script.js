/* DARK / LIGHT MODE TOGGLE */
function toggleMode() {

```
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
    localStorage.setItem("mode","light");
} else {
    localStorage.setItem("mode","dark");
}
```

}

/* LOAD SAVED MODE */
window.addEventListener("DOMContentLoaded", function(){

```
const savedMode = localStorage.getItem("mode");

if(savedMode === "light"){
    document.body.classList.add("light-mode");
}
```

});

/* SCROLL ANIMATION FOR CARDS */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

```
cards.forEach(card => {

    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if(position < screenPosition){
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }

});
```

});

/* ACTIVE MENU LINK WHEN SCROLLING */
const sections = document.querySelectorAll(".card");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(window.scrollY >= sectionTop - 120){
        current = section.getAttribute("id");
    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
        link.classList.add("active");
    }

});
```

});
function toggleMode(){
alert("Toggle clicked");
document.body.classList.toggle("light-mode");
}
