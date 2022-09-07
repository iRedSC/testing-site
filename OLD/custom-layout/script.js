

// Create ripple effect for buttons
function createRipple(event) {

    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    setTimeout(function () { circle.remove(); }, 2500);
    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", createRipple);

    // ! This is messy and doesn't work
    // The goal is to shrink the button when the mouse is down,
    // and then make it big again when the mouse is let go.
    button.addEventListener("mousedown", (event) => {
        const button = event.currentTarget;
        button.style.transform = 'scale(85%)'
        Promise.resolve().then(_ => {
            button.style.transform = 'scale(100%)'
        })
    })
}