const slideList = [{
        img: "img/work1.jpg",
        h1: 'Rock Paper Scissors',
        p: "First thing created in JS only for the purpose of learning."
    },
    {
        img: "img/work2.jpg",
        h1: 'Project 2',
        p: "Opis2"
    },
    {
        img: "img/work3.jpg",
        h1: 'Project 3',
        p: "Opis3"
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const p = document.querySelector('p.slider');
const dots = [...document.querySelectorAll('.dots span')]


let i = 0;



const changeSlide = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    image.src = slideList[activeDot].img;
    h1.textContent = slideList[activeDot].h1;
    p.textContent = slideList[activeDot].p;

}

dots.forEach(dot => dot.addEventListener("click", function () {
    dots.forEach(dot => dot.classList.remove("active"));
    this.classList.add("active");
    changeSlide()
}))