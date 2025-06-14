// toggle setup
const themeToggle= document.getElementById("theme-toggle");

themeToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("night");
    document.body.classList.toggle("day");
    localStorage.setItem("theme", document.body.classList.contains("night")? "night": "day");
});

window.addEventListener("DOMContentLoaded",()=>{
    const savedTheme= localStorage.getItem("theme");
    if(savedTheme === "night"){
        document.body.classList.add("night");
        document.body.classList.remove("day");
    }
});