// ========= PROJECT MODALS ======== \\ 

let imgCnt = 0;

const rightArrows = [...document.querySelectorAll(".modal-arrow-right")];

for (let i = 0; i < rightArrows.length; i++) {
    let proj = rightArrows[i].getAttribute("project");
    rightArrows[i].addEventListener("click", function() {
        const projImages = [...document.querySelectorAll("." + proj)];
        imgCnt++;
        if (imgCnt >= projImages.length) {
            imgCnt = 0;
        }
        for (let j = 0; j < projImages.length; j++) {
            if (imgCnt == j) {
                if (projImages[j].classList.contains("hidden")) {
                    projImages[j].classList.remove("hidden");
                }
            } else if (!projImages[j].classList.contains("hidden")) {
                projImages[j].classList.add("hidden");
            }
        }
    })
}