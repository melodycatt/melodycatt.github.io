const whistle = document.getElementById("slideWhistle")
var lastnote
var slideWhistle = new Tone.Oscillator(440, "triangle").toDestination()
var stopTime
whistle.addEventListener("input", () => {
    slideWhistle.set({
       frequency: whistle.value * 10
    })
    console.log(slideWhistle.get(), whistle.value * 10)
})
whistle.addEventListener("mousedown", () => {
    slideWhistle.start()
})
document.addEventListener("mouseup", () => {
    slideWhistle.stop()
})


const Notes = ["C", "D", "E", "F", "G", "A", "B",]

function valueToPitch(value) {
    const octave = Math.floor(value/2/7) + 2
    var note = Math.floor(value / 2) % 7
    note = Notes[note]
    return note + octave
}

