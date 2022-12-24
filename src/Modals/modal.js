// ========= PROJECT MODALS ======== \\ 

// Maintains the current index of shown image
let imgCnt = 0;

// Retrieves the right arrow 
const rightArrow = document.querySelector(".modal-arrow-right");

// Iterates through the images based on the respective project
let proj = rightArrow.getAttribute("project");
rightArrow.addEventListener("click", function() {
    const projImages = [...document.querySelectorAll("." + proj)];
    imgCnt++;
    if (imgCnt >= projImages.length) {
        imgCnt = 0;
    }
    for (let j = 0; j < projImages.length; j++) {
        if (imgCnt === j) {
            if (projImages[j].classList.contains("hidden")) {
                projImages[j].classList.remove("hidden");
            }
        } else if (!projImages[j].classList.contains("hidden")) {
            projImages[j].classList.add("hidden");
        }
    }
})


// Retrieves the left arrow
const leftArrow = document.querySelector(".modal-arrow-left");

// Iterates through the images based on the respective project
proj = leftArrow.getAttribute("project");
leftArrow.addEventListener("click", function() {
    const projImages = [...document.querySelectorAll("." + proj)];
    imgCnt--;
    if (imgCnt < 0) {
        imgCnt = projImages.length - 1;
    }
    for (let j = 0; j < projImages.length; j++) {
        if (imgCnt === j) {
            if (projImages[j].classList.contains("hidden")) {
                projImages[j].classList.remove("hidden");
            }
        } else if (!projImages[j].classList.contains("hidden")) {
            projImages[j].classList.add("hidden");
        }
    }
})