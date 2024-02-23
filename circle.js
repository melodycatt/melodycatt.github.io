const centerY = (document.getElementById("circleCenter").getBoundingClientRect().top + document.getElementById("circleCenter").getBoundingClientRect().bottom) / 2
const centerX = (document.getElementById("circleCenter").getBoundingClientRect().left + document.getElementById("circleCenter").getBoundingClientRect().right) / 2
const circleSlider = document.getElementById("circleSlider")
const circleCenter = document.getElementById("circleCenter")
let r1 = 300

var circleDragging = false;
circleCenter.addEventListener("mousedown", () => {
    circleDragging = true
    document.addEventListener("mousemove", circleMove)
})

document.addEventListener("mouseup", () => {
    if (circleDragging) {
        circleDragging = false
        document.removeEventListener("mousemove", circleMove)
    }
})


function circleMove(e) {
    y = e.clientY - centerY;
    x = e.clientX - centerX
    let r2 = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    let scale = r1 / r2
    y *= scale
    x *= scale
    console.log(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)))
    circleSlider.style.translate = `${x}px ${y}px`
}