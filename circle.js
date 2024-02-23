const centerY = (document.getElementById("center").getBoundingClientRect().top + document.getElementById("center").getBoundingClientRect().bottom) / 2
const centerX = (document.getElementById("center").getBoundingClientRect().left + document.getElementById("center").getBoundingClientRect().right) / 2
const circleSlider = document.getElementById("circleSlider")
let r = 300
document.addEventListener("mousemove", (e) => {
    y = e.clientY - centerY;
    x = e.clientX - centerX
    if(y <= x) {
        x = Math.abs(Math.sqrt(Math.abs(Math.pow(r, 2)-Math.pow(y, 2))))
        if (x < 0) {
            x = -Math.abs(x)
        }    
    } else {
        y = Math.abs(Math.sqrt(Math.abs(Math.pow(r, 2)-Math.pow(x, 2))))
        if (y < 0) {
            y = -Math.abs(y)
        }    
    }
    if (x > 300) {
        x = 300
    }
    if (x < -300) {
        x = -300
    }
    if (y > 300) {
        y = 300
    }
    if (y < -300) {
        y = -300
    }
    console.log(centerX, centerY, e.clientX, e.clientY, x, y)
    circleSlider.style.translate = `${x}px ${y}px`
})