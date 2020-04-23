const slideList = [
  {
    img: "img/work1.png",
    h1: "My trip",
    p:
      "While making this small app I realised how important configuring your environment is. And not everything works like they show in the documentation :). I used here atomic design methodology and Storybook - together they're really nice comibination. For styling - styled components. I also tried a little Redux which was my first confrontation with it. ",
    codeButton: "https://github.com/soniaklimas/MyTrip",
    tryButton: "https://soniaklimas.github.io/MyTrip/",
  },
  {
    img: "img/work2.png",
    h1: "Forget-me-not",
    p:
      "The same concept like above but done way much easier. It doesn't mean that without complications. I used Sass Modules in order to style components. I also employed Context API.",
    codeButton: "https://github.com/soniaklimas/Forgetmenot",
    tryButton: "https://soniaklimas.github.io/Forgetmenot/",
  },
  {
    img: "img/work3.png",
    h1: "Rock Paper Scissors",
    p:
      "First thing created in JS only for the purpose of learning. I found out how OOP works and how not works :) ",
    codeButton: "https://github.com/soniaklimas/Rock-Paper-Scissors",
    tryButton: "https://soniaklimas.github.io/Rock-Paper-Scissors/",
  },
  {
    img: "img/work4.png",
    h1: "My portfolio",
    p:
      "I used here a little JS, a little jQuery, pure CSS and simple PHP script. This project realised me how patient I am and how much I don't like bugs :)  ",
    codeButton: "https://github.com/soniaklimas/portfolio",
    tryButton: "https://soniaklimas.com",
  },
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const p = document.querySelector("p.slider");
const dots = [...document.querySelectorAll(".dots span")];
const codeButton = document.querySelector("button.code");
const tryButton = document.querySelector("button.try");

let i = 0;

const changeSlide = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  image.src = slideList[activeDot].img;
  h1.textContent = slideList[activeDot].h1;
  p.textContent = slideList[activeDot].p;
  // codeButton.href = slideList[activeDot].codeButton;
  // tryButton.href = slideList[activeDot].tryButton
  codeButton.firstElementChild.setAttribute(
    "href",
    slideList[activeDot].codeButton
  );

  tryButton.firstElementChild.setAttribute(
    "href",
    slideList[activeDot].tryButton
  );
};

dots.forEach((dot) =>
  dot.addEventListener("click", function () {
    dots.forEach((dot) => dot.classList.remove("active"));
    this.classList.add("active");
    changeSlide();
  })
);
