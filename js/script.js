setInterval(() => {
    $(".box").each((i, element) => {
        if (Math.random() >= 0.993) {
            element.style.filter = `brightness(${Math.ceil(Math.random() * 15) + 80}%)`;
            element.style.visibility = "visible";
            setTimeout(() => {
                element.style.visibility = "hidden";
            }, Math.floor(Math.random() * 100) + 351);
        }
    })
}, 5);

let char;
const title = setInterval(() => {
    const c = Math.random();
    if (c >= 0.20) {
        char = "&";
    } else {
        char = "*";
    }
    $("#title").text(char + 'melody')
}, 100)

grained("#boxes", {
    animate: true,
    patternWidth: 500,
    patternHeight: 500,
    grainOpacity: 0.09,
})

if (window.innerWidth / window.innerHeight < 9/6) {
    document.body.innerText = "if youre on a phone, this website has an aspect ratio that doesnt fit on the screen. if youre not, make your window wider and reload."
}
