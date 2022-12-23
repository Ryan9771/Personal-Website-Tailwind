// Gets both about contact containers in a list
const aboutCtns = [...document.querySelectorAll(".about-ctn")];

// The buttons for the about section
const tab = document.querySelector(".next-btn-1");
const arrow = document.querySelector(".next-btn-2");
const arrowIcon = document.getElementById("next-btn-icon");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

// Keeps track which of about / contact is shown
let cnt = 0;

// Default state 
aboutCtns[0].classList.remove("hidden");
aboutCtns[0].classList.add("flex");

// The about button is pressed
btn1.addEventListener("click", function() {
    if (aboutCtns[1].classList.contains("flex")) {
        aboutCtns[1].classList.remove("flex");
        aboutCtns[1].classList.add("hidden");

        aboutCtns[0].classList.remove("hidden");
        aboutCtns[0].classList.add("flex");
        arrowIcon.style.transform = "rotate(0deg)";

        btn1.classList.remove("bg-gray-300");
        btn1.classList.add("bg-gray-400")

        btn2.classList.remove("bg-gray-400");
        btn2.classList.add("bg-gray-300")
        cnt = 0;
    }
})

// The contact button is pressed
btn2.addEventListener("click", function() {
    if (aboutCtns[0].classList.contains("flex")) {
        aboutCtns[0].classList.remove("flex");
        aboutCtns[0].classList.add("hidden");

        aboutCtns[1].classList.remove("hidden");
        aboutCtns[1].classList.add("flex");
        arrowIcon.style.transform = "rotate(-180deg)";

        btn2.classList.remove("bg-gray-300");
        btn2.classList.add("bg-gray-400")

        btn1.classList.remove("bg-gray-400");
        btn1.classList.add("bg-gray-300")
        cnt = 1;
    }
})

// Switches to the right about state with correct arrow direction
arrow.addEventListener("click", function() {
    aboutCtns[cnt].classList.remove("flex");
    aboutCtns[cnt].classList.add("hidden");
    let rotate;
    if (cnt == 0) {
        cnt++;
        rotate = "-180deg";
    } else {
        cnt = 0;
        rotate = "0deg";
    }
    aboutCtns[cnt].classList.remove("hidden");
    aboutCtns[cnt].classList.add("flex");
    arrowIcon.style.transform = `rotate(${rotate})`;
});

// Handles synchronisation of navbar about / contact buttons pressed and the 
//  arrow, and the relevant section
function toggleAboutContact(count) {
    if (aboutCtns[count].classList.contains("hidden")) {
        aboutCtns[count].classList.remove("hidden");
        aboutCtns[count].classList.add("flex");
    }
    // The about button has been clicked
    if (count === 0) {
        if (aboutCtns[1].classList.contains("flex")) {
            aboutCtns[1].classList.remove("flex");
            aboutCtns[1].classList.add("hidden"); 
        }
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        if (aboutCtns[0].classList.contains("flex")) {
            aboutCtns[0].classList.remove("flex");
            aboutCtns[0].classList.add("hidden"); 
        }
        arrowIcon.style.transform = 'rotate(-180deg)';    
    }
}

// Deals with arrow direction when the navabar button is clicked
const aboutNavBtn = document.getElementById("about-nav");
const contactNavBtn = document.getElementById("contact-nav");

aboutNavBtn.addEventListener("click", () => {
    cnt = 0;
    toggleAboutContact(cnt);
})

contactNavBtn.addEventListener("click", () => {
    cnt = 1;
    toggleAboutContact(cnt);
})

