
let slide_number = 0

function changeSlide() {
    slide_number += 1
    let slide = document.getElementsByClassName("slide").getElementsByTagName('img').style.tranform = `translateX(-${slide_number * 100}%)`;
    if (slide_number > 3) {
        slide_number = 0
    }

}

setInterval(changeSlide(), 3000)