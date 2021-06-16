// global variable to resize image based on mode
let imgMode = 0;

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 300, document.getElementById("main-header"));
    setTimeout(fadeIn, 1500, document.getElementById("sub-header"));
    setTimeout(fadeIn, 1800, document.getElementById("socials-container-header"));
    setTimeout(fadeIn, 2300, document.getElementById("arrow-container"));
    document.getElementById("more-button")
            .addEventListener("click", () => {
                // find a prettier way for this (presumably function.prototype.bind...)
                scrollToProjects(document.querySelector(".content-container"));
    });
});
    
function scrollToProjects(projectsDiv) {
    // optional paramater alignToTop; if true it aligns to top
    projectsDiv.scrollIntoView({behavior: "smooth", block: "center"});
}

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

function resizeImg(img) {
    if (imgMode == 0) {
        img.style.transform = "scale(2)";
        img.style.transition = "transform 0.25s ease";
        imgMode = 1;
    }
    else {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
        imgMode = 0;
    }
}
