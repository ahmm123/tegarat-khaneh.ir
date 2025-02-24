// vars //

const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

// ---- //

// functions //

// change slide function //

function changeSlide(slide) {
    if (slide == 4) {
        slide = 0;
    }if (slide == -1) {
        slide = 3;
    }
    slides.forEach(element => {
        element.classList.remove("slide-activing");
    });
    slides.item(slide).classList.add("slide-activing");
    slideIndex = slide;
    return;
}

// --------------------- //

// --------- //

// set to first slide //

changeSlide(0);

// ------------------ //

setInterval(() => {
    changeSlide(slideIndex+1)
}, 5000);
