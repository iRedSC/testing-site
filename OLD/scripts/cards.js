






function cardClick(card) {
    document.getElementById(card).style.cssText = 'transform: rotateY(360deg); transition: all 1s ease;';
    setTimeout(function () {
        document.getElementById(card).style.cssText = 'transform: rotateY(0deg); transition: rotateY 1ms ease;';
        setTimeout(function () {
            document.getElementById(card).style.cssText = 'transition: all 0.3s ease;';
        }, 75)
    }, 1000)
}