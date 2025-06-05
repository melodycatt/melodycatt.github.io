const ddimgs = document.getElementsByClassName("ddimg");
const contentContainer = document.getElementById("content-container");
let runningZIndex = 10;
let dragging = false;
for (i of ddimgs) {
    i.style.top = `${Math.floor(Math.random() * (window.innerHeight - i.getBoundingClientRect().height))}px`;
    i.style.left = `${Math.floor(Math.random() * (window.innerWidth - i.getBoundingClientRect().width))}px`;
    i.addEventListener("mouseover", (e) => {
        runningZIndex++;
        e.currentTarget.style.zIndex = runningZIndex;
        contentContainer.style.zIndex = runningZIndex + 1;
    })
    dragElement(i);
}
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
		elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
    }
}

const sillies = [
  "sillycats/2e4wcssn.bmp",
  "sillycats/headphones.png",
  "sillycats/CuhBG.webp",
  "sillycats/d864ut3v.bmp",
  "sillycats/draw-a-silly-cat-for-you.webp",
  "sillycats/jtqt7skv.bmp",
  "sillycats/boogie.png",
  "sillycats/thumb.png",
  "sillycats/lick.bmp",
]

document.getElementById("sillycat").src = sillies[Math.floor(Math.random() * sillies.length)];

function createRandomString(length) {
	let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890000111-=[]\\;',./_+{}:\"<>?~`!@#$%^&*()♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪"
	let result = "";
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
}
const deezcode = document.getElementById("deezcodes");
setInterval(() => {
	//if(deezcode.parentElement.offsetHeight > 25) { console.log(deezcode.innerText, deezcode.parentElement.offsetHeight)}
	deezcode.innerText = createRandomString(Math.floor(Math.random() * 3) + 4);
}, 50);

const slider = document.getElementById("funnyslider")
y0 = (slider.getBoundingClientRect().top + slider.getBoundingClientRect().bottom) / 2
x0 = (slider.getBoundingClientRect().right + slider.getBoundingClientRect().left) / 2
console.log(slider.getBoundingClientRect(), x0, y0)

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
let e = (s) => document.getElementById(s);
const bhinput = e('bluehairbox');
const bh = e('bluehair');

bhinput.addEventListener('input', (ev) => {
	console.log(ev)
    if (ev.target.value == "sobsobprayprayfish") {
		bh.style.display = 'block';
	} 
});