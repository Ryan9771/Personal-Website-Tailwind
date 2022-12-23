// Gets both about containers in a list
const aboutCtns = [...document.querySelectorAll(".about-ctn")];

// The buttons for the about section
const tab = document.querySelector(".next-btn-1");
const arrow = document.querySelector(".next-btn-2");
const arrowIcon = document.getElementById("next-btn-icon");

let aboutDiv = 0;

// Default state 
aboutCtns[0].classList.remove("hidden");
aboutCtns[0].classList.add("flex");

arrow.addEventListener("click", function() {
    aboutCtns[aboutDiv].classList.remove("flex");
    aboutCtns[aboutDiv].classList.add("hidden");
    let rotate;
    if (aboutDiv == 0) {
        aboutDiv++;
        rotate = "-180deg";
    } else {
        aboutDiv = 0;
        rotate = "0deg";
    }
    aboutCtns[aboutDiv].classList.remove("hidden");
    aboutCtns[aboutDiv].classList.add("flex");
    arrowIcon.style.transform = `rotate(${rotate})`;
});


