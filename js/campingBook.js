// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const papers = [];
for (let i = 1; i <= 7; i++) {
    papers.push(document.querySelector(`#p${i}`));
}

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
const numOfPapers = 7;
const maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        if (currentLocation === 1) {
            openBook();
        }
        const currentPaper = papers[currentLocation - 1];
        currentPaper.classList.add("flipped");
        currentPaper.style.zIndex = currentLocation;
        if (currentLocation === numOfPapers) {
            closeBook(false);
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        if (currentLocation === 2) {
            closeBook(true);
        }
        const previousPaper = papers[currentLocation - 2];
        previousPaper.classList.remove("flipped");
        previousPaper.style.zIndex = numOfPapers - (currentLocation - 2);
        if (currentLocation === maxLocation) {
            openBook();
        }
        currentLocation--;
    }
}
