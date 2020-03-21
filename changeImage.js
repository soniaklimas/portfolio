const emotionImg = document.querySelector(".slider");
const images = ['url("img/emo1.png")', 'url("img/emo2.png")', 'url("img/emo3.png")', 'url("img/emo4.png")'];

activeElement = 0;
const timeChange = 3000;

function changeImg() {
    console.log("działa")
    activeElement++
    if (activeElement == images.length) {
        activeElement = 0;
    }
    emotionImg.style.backgroundImage = images[activeElement]
}

setInterval(changeImg, timeChange)