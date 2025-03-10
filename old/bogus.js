const slider = document.getElementById("slider")
y0 = (slider.getBoundingClientRect().top + slider.getBoundingClientRect().bottom) / 2
x0 = (slider.getBoundingClientRect().right + slider.getBoundingClientRect().left) / 2

var sliderdrag = false;
var slope = 0
var slidervalue = 0.1;

slider.addEventListener("mousedown", () => {
    console.log("hi")
    sliderdrag = true
})

slider.addEventListener("input", () => {
    slider.value = slidervalue
})

document.addEventListener("mousemove", (e) => {
    if(sliderdrag) {
        y = e.clientY - y0
        x = e.clientX - x0//(x0-e.clientX)
        angle = (180 * (y/Math.abs(y) == -1 ? 0: 1)) - Math.round(Math.atan(x/y) * (180/Math.PI)) - 90
        slope = (y - 0) / (Math.abs(x) - 0)
        if (Math.abs(angle) !== angle) {
            angle = 360 + angle
        }
        slider.style.rotate = `${angle}deg`
    }
})

document.addEventListener("mouseup", () => {
    sliderdrag = false;
})

setInterval(() => {
    slidervalue += 3 * slope
    if (slidervalue > 100) {
        slidervalue = 100
    }
    if (slidervalue < 0) {
        slidervalue = 0
    }
    slider.style.setProperty('--value', `${slidervalue}%`)
    slider.value = slidervalue
}, 10);

const bslider = document.getElementById('barslider')
const bsbar = document.getElementById('bsbar')
const bsball = document.getElementById('bsball')

var barcolour = "rgb(255 199 38)"
var ballcolour = "rgb(255 199 38)"
var bordercolour = "rgb(133 133 133)"
var bsdragging = false;
var bsMouseOffset;
var bsbarleft = 0;
var bsbarvalue = 0;


bslider.addEventListener("mouseover", () => {
    barcolour = "rgb(255 213 93)"
    bordercolour = "rgb(172 172 172)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour

})

bsball.addEventListener("mouseover", () => {
    ballcolour = "rgb(255 213 93)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour
}) 

bslider.addEventListener("mouseout", () => {
    barcolour = "rgb(255 199 38)"
    bordercolour = "rgb(133 133 133)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour
})

bsball.addEventListener("mouseout", () => {
    ballcolour = "rgb(255 199 38)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour
}) 

////////////////////////////////////

bslider.addEventListener("mousedown", (e) => {
    barcolour = "rgb(236 178 1)"
    bordercolour = "rgb(110 110 110)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour
    bsdragging = true;
    bsMouseOffset = e.mouseX - (bsball.getBoundingClientRect.left + bsball.getBoundingClientRect.right) / 2
})

document.addEventListener("mousemove", (e) => {
    if (bsdragging) {
        console.log('i hate you')
        e.preventDefault()
        if ((bsbar.getBoundingClientRect().left + e.movementX) <= bsball.getBoundingClientRect().left && (bsbar.getBoundingClientRect().right + e.movementX) >= bsball.getBoundingClientRect().right) {
            bsbarleft += e.movementX
            bsbar.style.left = `${bsbarleft}px`
        } else if ((bsbar.getBoundingClientRect().left + e.movementX) >= bsball.getBoundingClientRect().left) {
            bsbarleft += Math.abs(bsbar.getBoundingClientRect().left - bsball.getBoundingClientRect().left)
            bsbar.style.left = `${bsbarleft}px`
        } else if ((bsbar.getBoundingClientRect().right + e.movementX) <= bsball.getBoundingClientRect().right) {
            bsbarleft -= Math.abs(bsbar.getBoundingClientRect().right - bsball.getBoundingClientRect().right)
            bsbar.style.left = `${bsbarleft}px`
        }
        bsballcenter = bsbar.getBoundingClientRect().right - (bsball.getBoundingClientRect().left + bsball.getBoundingClientRect().right) / 2 
        bsbarvalue = 100 - (bsballcenter / (bsbar.getBoundingClientRect().right - bsbar.getBoundingClientRect().left) * 100)
        bsbar.style.setProperty('background', `linear-gradient(
            to right, 
            ${barcolour} 0%, 
            ${barcolour} ${bsbarvalue}%, 
            rgb(59 59 59) ${bsbarvalue}%, 
            rgb(59 59 59) 100%
        )`)
        bsbar.style.borderColor = bordercolour
        bsball.style.backgroundColor = ballcolour
    }
}) // 983, 100, 1000, 1000-983 = 

document.addEventListener("mouseup", () => {
    bsdragging = false
})

////////////////////////////////////

bsball.addEventListener("mousedown", () => {
    ballcolour = "rgb(236 178 1)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour
}) 

bslider.addEventListener("mouseup", () => {
    barcolour = "rgb(255 199 38)"
    bordercolour = "rgb(133 133 133)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour
})

bsball.addEventListener("mouseup", () => {
    ballcolour = "rgb(255 199 38)"
    bsbar.style.setProperty('background', `linear-gradient(
        to right, 
        ${barcolour} 0%, 
        ${barcolour} ${bsbarvalue}%, 
        rgb(59 59 59) ${bsbarvalue}%, 
        rgb(59 59 59) 100%
    )`)
    bsbar.style.borderColor = bordercolour
    bsball.style.backgroundColor = ballcolour
}) 


/////////
/////////
/////////
const flappyButton = document.getElementById("flappyButton")
const flappySlider = document.getElementById("flappySlider")
var flappy = false
var flappyVel = 0

function startFlappyBird() {
    flappyButton.onclick = endFlappyBird
    flappyButton.innerHTML = "Stop"
    flappy = true
    document.addEventListener("keydown", flappyBirdJump)
    window.requestAnimationFrame(flappyBird)
}

function endFlappyBird () {
    flappyButton.onclick = startFlappyBird
    flappyButton.innerHTML = "Start"
    flappy = false
    document.removeEventListener("keydown", flappyBirdJump)
}

function flappyBird () {
    console.log("hi", flappyVel, flappySlider.value,  Math.round((flappyVel * 100000))/100000, flappySlider.value + flappyVel)
    flappySlider.value = (flappySlider.value * 1) + flappyVel
    flappySlider.style.setProperty("--value", `${flappySlider.value}%`)
    if (flappySlider.value * 1 <= 0) {
        flappyVel = 0
        flappySlider.value = 0
    } else {
        flappyVel -= 0.25
        flappyVel = Math.round((flappyVel * 100000))/100000
    }
    if (flappy) {
        window.requestAnimationFrame(flappyBird)
    }
}

function flappyBirdJump (e) {
    if(e.key == " ") {
        flappyVel = 2
    }
}


//////////////////////////////

const wonkySlider = document.getElementById("wonkySlider")
const wonkySliderFill = document.getElementById("wonkySliderFill")
const wonkySliderBall = document.getElementById("wonkySliderBall")

wonkySlider.addEventListener("input", () => {
    wonkySliderFill.style.setProperty("--value", `${wonkySlider.value}%`)
    console.log((wonkySlider.value - 50) * wonkySlider.getBoundingClientRect().width / 100)
    wonkySliderBall.style.translate = `0px ${(wonkySlider.value - 50) * wonkySlider.getBoundingClientRect().width / -100}px`
})