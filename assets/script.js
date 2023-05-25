const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const slideImage = document.getElementById("banner-slide");
const slideTagLine = document.querySelector("#banner > p");

const dots = document.querySelectorAll(".dot");

let slideCount = 0;

function updateDot(i) {
  dots.forEach(function (dot, index) {
    if (index === slideCount + i) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

function updateSlide(i) {
  slideImage.src = "./assets/images/slideshow/" + slides[slideCount + i].image;
  slideTagLine.innerHTML = slides[slideCount + i].tagLine;
}

function changeDirection(direction) {
  if (direction === "left") {
    if (slideCount <= 0) {
      // il passe à celle-ci
      slideCount = slides.length;
    }
    updateDot(-1);
    updateSlide(-1);
    slideCount--;
  } else {
    slideCount++;
    if (slideCount >= slides.length) {
      slideCount = 0;
    }
    updateDot(0);
    updateSlide(0);
  }
}

document.querySelector(".arrow_left").addEventListener("click", function () {
  changeDirection("left");
});

document.querySelector(".arrow_right").addEventListener("click", function () {
  changeDirection("right");
});
