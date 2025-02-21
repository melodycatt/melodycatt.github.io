// LOADING
const notes = document.getElementById('notescontainer').children;
for (let i = 0; i < notes.length; i++) {
    // notes[i].style.animationDelay = 500 * i + 'ms'
    notes[i].style.animationName = 'notesslide'
    notes[i].style.animationIterationCount = 'infinite'
    notes[i].style.animationDuration = '2s'
    notes[i].style.animationTimingFunction = 'linear'
}


var scene = 'intro'
const intro = document.getElementById('loading')
const main = document.getElementById('main')
const loadbar = document.getElementById('bar')
var block = document.createElement('div')
block.className = "barblock"
let li = 0
load = function () {
    loadbar.appendChild(block.cloneNode(true))
    li++
    if (li < 10) {
        console.log(Math.round(Math.random() * 300))
        setTimeout(load, Math.round(Math.random() * 300));
    }
}
setTimeout(load, Math.round(Math.random() * 100) / 200);

window.addEventListener('click', () => {
    if(scene === 'intro') {
        intro.classList.toggle('active')
        intro.classList.toggle('inactive')
        main.classList.toggle('active')
        main.classList.toggle('inactive')
        scene = 'main'
    }
})

// MAIN 

const mainNotes = document.getElementById('main-notescontainer').children;
for (let i = 0; i < notes.length; i++) {
    // notes[i].style.animationDelay = 500 * i + 'ms'
    mainNotes[i].style.animationName = 'notesslide'
    mainNotes[i].style.animationIterationCount = 'infinite'
    mainNotes[i].style.animationDuration = '2s'
    mainNotes[i].style.animationTimingFunction = 'linear'
}
