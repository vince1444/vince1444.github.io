window.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 400);
});

function type() {
    let i = 0;
    (function x() {
        const text = "Hello, World.";
        const speed = 90;
        if (i < text.length) {
            document.getElementById("main-header").innerHTML += text.charAt(i);
            i++;
            setTimeout(x, speed);
        }
    })(); 
}