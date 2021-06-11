window.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 300, document.getElementById("main-header"));
    setTimeout(fadeIn, 1500, document.getElementById("sub-header"));
    setTimeout(fadeIn, 1800, document.getElementById("socials-container"));
});

function type(element) {
    (function x() {
        const text = "Hello, World.";
        const speed = 90;
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                element.innerHTML += text.charAt(i);
            }, speed * (i + 1));
        }
    })(); 
}

function fadeIn(element) {
    const speed = 100;
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            element.style.opacity = i * 0.1;
        }, speed * (i + 1));
    }
}

