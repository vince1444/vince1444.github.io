document.addEventListener("DOMContentLoaded", () => {
    type();
});

function type() {
    let i = 0;
    (function x() {
        const text = "Hello, World.";
        const speed = 90;
        if (i < text.length) {
            console.log(text.charAt(i));
            document.getElementById("main-header").innerHTML += text.charAt(i);
            i++;
            setTimeout(x, speed);
        }
    })(); 
}