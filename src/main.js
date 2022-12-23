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


/* Helper functions to toggle btns colour */
function colour(btnNum) {
    if (btnNum === 1) {
        btn1.classList.remove("bg-gray-300");
        btn1.classList.add("bg-gray-400")

        btn2.classList.remove("bg-gray-400");
        btn2.classList.add("bg-gray-300")
    } else {
        btn2.classList.remove("bg-gray-300");
        btn2.classList.add("bg-gray-400")

        btn1.classList.remove("bg-gray-400");
        btn1.classList.add("bg-gray-300")
    }
}

// Toggles visiblity of the about div
function reveal(aboutNum) {
    if (aboutNum === 0) {
        aboutCtns[1].classList.remove("flex");
        aboutCtns[1].classList.add("hidden");

        aboutCtns[0].classList.remove("hidden");
        aboutCtns[0].classList.add("flex");
    } else {
        aboutCtns[0].classList.remove("flex");
        aboutCtns[0].classList.add("hidden");

        aboutCtns[1].classList.remove("hidden");
        aboutCtns[1].classList.add("flex");
    }
}

// Default state 
aboutCtns[0].classList.remove("hidden");
aboutCtns[0].classList.add("flex");

// The about button is pressed
btn1.addEventListener("click", function() {
    if (aboutCtns[1].classList.contains("flex")) {
        reveal(0);
        arrowIcon.style.transform = "rotate(0deg)";
        colour(1);
        cnt = 0;
    }
})

// The contact button is pressed
btn2.addEventListener("click", function() {
    if (aboutCtns[0].classList.contains("flex")) {
        reveal(1);
        arrowIcon.style.transform = "rotate(-180deg)";
        colour(2);
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
        colour(2);
    } else {
        cnt = 0;
        rotate = "0deg";
        colour(1);
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
        colour(1);
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        if (aboutCtns[0].classList.contains("flex")) {
            aboutCtns[0].classList.remove("flex");
            aboutCtns[0].classList.add("hidden"); 
        }
        colour(2);
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


