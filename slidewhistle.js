const whistle = document.getElementById("slideWhistle")
var lastnote
const slideWhistle = new Tone.Sampler({
    urls: {
        C6: "C6.wav"
    },
    baseUrl: "./img/",
    onload: () => {
        console.log("hi")
        whistle.addEventListener("input", () => {
            slideWhistle.triggerRelease([lastnote])
            console.log("hi")
            console.log(valueToPitch(whistle.value * 1), whistle.value)
            lastnote = valueToPitch(whistle.value * 1)
            slideWhistle.triggerAttack([valueToPitch(whistle.value * 1)])
        })
    }
}).toDestination();

const Notes = ["C", "D", "E", "F", "G", "A", "B",]

function valueToPitch(value) {
    const octave = Math.floor(value/2/7) + 2
    var note = Math.floor(value / 2) % 7
    note = Notes[note]
    return note + octave
}

