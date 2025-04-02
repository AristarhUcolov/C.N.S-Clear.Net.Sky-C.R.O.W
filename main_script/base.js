document.addEventListener("DOMContentLoaded", function() {
    console.log("Добро пожаловать в The Black Crow!");
    
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseenter", function() {
            this.style.color = "#ff0000";
        });
        link.addEventListener("mouseleave", function() {
            this.style.color = "#ffcc00";
        });
    });
});
