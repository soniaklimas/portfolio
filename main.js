// secton .s2 -  About - moving letters

const spnText = document.querySelector('section.s1 .text');
// const spnText2 = document.querySelector('section.home .text2');
const txt = "In the future.";
// const txt2 = "In the future";
let indexText = 0;
const time = 100;

const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);


// section scroller
$('nav.main a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})


// burger

const burger = document.querySelector(".burgerIcon");
const navbar = document.querySelector(".navbar");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");



burger.addEventListener("click", function () {
    iconBurger.classList.toggle("active");
    iconX.classList.toggle("active")
    navbar.classList.toggle("active");
})