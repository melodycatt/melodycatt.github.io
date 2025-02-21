const canvas = document.getElementById("cubeCanvas")
const ctx = canvas.getContext("2d")
var width = 400;
var height = 200;
var length = 200;
var zRot = 0;
var x = 0;
var y = 0
const centerX = canvas.width/2
const centerY = canvas.height/2
var p1 = [(width/2)*Math.cos(zRot) + x + centerX, (length/2) * Math.sin(-zRot) + height / 2 + y + centerY]; // for y rot (400/Math.cos(zRot) + x, ((length/2) * Math.sin(yRot)) * Math.sin(zRot - 0) + height / 2 + y)
var p2 = [(width/2)*Math.cos(-zRot - 1.5708) + x + centerX, (length/2) * Math.sin(-zRot - 1.5708) + height / 2 + y + centerY]
var p3 = [(width/2)*Math.cos(-zRot - 3.1416) + x + centerX, (length/2) * Math.sin(-zRot - 3.1416) + height / 2 + y + centerY]
var p4 = [(width/2)*Math.cos(-zRot - 4.7124) + x + centerX, (length/2) * Math.sin(-zRot - 4.7124) + height / 2 + y + centerY]
var p5 = [(width/2)*Math.cos(-zRot - 0) + x + centerX, (length/2) * Math.sin(-zRot - 0) - height / 2 + y + centerY]
var p6 = [(width/2)*Math.cos(-zRot - 1.5708) + x + centerX, (length/2) * Math.sin(-zRot - 1.5708) - height / 2 + y + centerY]
var p7 = [(width/2)*Math.cos(-zRot - 3.1416) + x + centerX, (length/2) * Math.sin(-zRot - 3.1416) - height / 2 + y + centerY]
var p8 = [(width/2)*Math.cos(-zRot - 4.7124) + x + centerX, (length/2) * Math.sin(-zRot - 4.7124) - height / 2 + y + centerY]

console.log(centerX,centerY, p1, p2, p3, p4, p5, p6, p7, p8)
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.lineCap = "round"
ctx.beginPath()
// p1
ctx.moveTo(p1[0],p1[1])
ctx.lineTo(p2[0],p2[1])
ctx.moveTo(p1[0],p1[1])
ctx.lineTo(p4[0],p4[1])
ctx.moveTo(p1[0],p1[1])
ctx.lineTo(p5[0],p5[1])
// p2
ctx.moveTo(p2[0],p2[1])
ctx.lineTo(p3[0],p3[1])
ctx.moveTo(p2[0],p2[1])
ctx.lineTo(p6[0],p6[1])
// p3
ctx.moveTo(p3[0],p3[1])
ctx.lineTo(p7[0],p7[1])
ctx.moveTo(p3[0],p3[1])
ctx.lineTo(p4[0],p4[1])
// p4 
ctx.moveTo(p4[0],p4[1])
ctx.lineTo(p8[0],p8[1])
// p5
ctx.moveTo(p5[0],p5[1])
ctx.lineTo(p6[0],p6[1])
ctx.moveTo(p5[0],p5[1])
ctx.lineTo(p8[0],p8[1])
// p6
ctx.moveTo(p6[0],p6[1])
ctx.lineTo(p7[0],p7[1])
//p7
ctx.moveTo(p7[0],p7[1])
ctx.lineTo(p8[0],p8[1])
ctx.stroke()

const zSlider = document.getElementById("cubeZSlider")
zSlider.addEventListener("input", () => {
    zRot = zSlider.value / (180 / Math.PI)
    var p1 = [(width/2)*Math.cos(-zRot - 0) + x + centerX, (length/2) * Math.sin(-zRot - 0) + height / 2 + y + centerY]; // for y rot (400/Math.cos(zRot) + x, ((length/2) * Math.sin(yRot)) * Math.sin(zRot - 0) + height / 2 + y)
    var p2 = [(width/2)*Math.cos(-zRot - 1.5708) + x + centerX, (length/2) * Math.sin(-zRot - 1.5708) + height / 2 + y + centerY]
    var p3 = [(width/2)*Math.cos(-zRot - 3.1416) + x + centerX, (length/2) * Math.sin(-zRot - 3.1416) + height / 2 + y + centerY]
    var p4 = [(width/2)*Math.cos(-zRot - 4.7124) + x + centerX, (length/2) * Math.sin(-zRot - 4.7124) + height / 2 + y + centerY]
    var p5 = [(width/2)*Math.cos(-zRot - 0) + x + centerX, (length/2) * Math.sin(-zRot - 0) - height / 2 + y + centerY]
    var p6 = [(width/2)*Math.cos(-zRot - 1.5708) + x + centerX, (length/2) * Math.sin(-zRot - 1.5708) - height / 2 + y + centerY]
    var p7 = [(width/2)*Math.cos(-zRot - 3.1416) + x + centerX, (length/2) * Math.sin(-zRot - 3.1416) - height / 2 + y + centerY]
    var p8 = [(width/2)*Math.cos(-zRot - 4.7124) + x + centerX, (length/2) * Math.sin(-zRot - 4.7124) - height / 2 + y + centerY]
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5
    ctx.lineCap = "round"
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath()
    // p1
    ctx.moveTo(p1[0],p1[1])
    ctx.lineTo(p2[0],p2[1])
    ctx.moveTo(p1[0],p1[1])
    ctx.lineTo(p4[0],p4[1])
    ctx.moveTo(p1[0],p1[1])
    ctx.lineTo(p5[0],p5[1])
    // p2
    ctx.moveTo(p2[0],p2[1])
    ctx.lineTo(p3[0],p3[1])
    ctx.moveTo(p2[0],p2[1])
    ctx.lineTo(p6[0],p6[1])
    // p3
    ctx.moveTo(p3[0],p3[1])
    ctx.lineTo(p7[0],p7[1])
    ctx.moveTo(p3[0],p3[1])
    ctx.lineTo(p4[0],p4[1])
    // p4 
    ctx.moveTo(p4[0],p4[1])
    ctx.lineTo(p8[0],p8[1])
    // p5
    ctx.moveTo(p5[0],p5[1])
    ctx.lineTo(p6[0],p6[1])
    ctx.moveTo(p5[0],p5[1])
    ctx.lineTo(p8[0],p8[1])
    // p6
    ctx.moveTo(p6[0],p6[1])
    ctx.lineTo(p7[0],p7[1])
    //p7
    ctx.moveTo(p7[0],p7[1])
    ctx.lineTo(p8[0],p8[1])
    ctx.stroke()
})

/////////////////
/////////////////

const canvas2 = document.getElementById("cubeCanvas2")
const ctx2 = canvas2.getContext("2d")
var width2 = 400;
var height2 = 200;
var length2 = 200;
var zRot2 = 0;
var x2 = 0;
var y2 = 0
const centerX2 = canvas2.width/2
const centerY2 = canvas2.height/2
var p12 = [(width2/2)*Math.cos(-zRot2 - 0) + x2 + centerX2, (length2/2) * Math.sin(zRot2 - 0) + height2 / 2 + y2 + centerY2]; // for y rot (400/Math.cos(zRot) + x, ((length/2) * Math.sin(yRot)) * Math.sin(zRot - 0) + height / 2 + y)
var p22 = [(width2/2)*Math.cos(-zRot2 - 1.5708) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 1.5708) + height2 / 2 + y2 + centerY2]
var p32 = [(width2/2)*Math.cos(-zRot2 - 3.1416) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 3.1416) + height2 / 2 + y2 + centerY2]
var p42 = [(width2/2)*Math.cos(-zRot2 - 4.7124) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 4.7124) + height2/ 2 + y2 + centerY2]
var p52 = [(width2/2)*Math.cos(-zRot2 - 0) + x2 + centerX2, (length2/2) * Math.sin(zRot2 - 0) - height2 / 2 + y2 + centerY2]
var p62 = [(width2/2)*Math.cos(-zRot2 - 1.5708) + x + centerX2, (length2/2) * Math.sin(-zRot2 - 1.5708) - height2 / 2 + y2 + centerY2]
var p72 = [(width2/2)*Math.cos(-zRot2 - 3.1416) + x + centerX2, (length2/2) * Math.sin(-zRot2 - 3.1416) - height2 / 2 + y2 + centerY2]
var p82 = [(width2/2)*Math.cos(-zRot2 - 4.7124) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 4.7124) - height2 / 2 + y2 + centerY2]

console.log(centerX,centerY, p1, p2, p3, p4, p5, p6, p7, p8)
ctx2.strokeStyle = "black"
ctx2.lineWidth = 5
ctx2.lineCap = "round"
ctx2.beginPath()
// p1
ctx2.moveTo(p12[0],p12[1])
ctx2.lineTo(p22[0],p22[1])
ctx2.moveTo(p12[0],p12[1])
ctx2.lineTo(p42[0],p42[1])
ctx2.moveTo(p12[0],p12[1])
ctx2.lineTo(p52[0],p52[1])
// 2p22
ctx2.moveTo(p22[0],p22[1])
ctx2.lineTo(p32[0],p32[1])
ctx2.moveTo(p22[0],p22[1])
ctx2.lineTo(p62[0],p62[1])
// 2p32
ctx2.moveTo(p32[0],p32[1])
ctx2.lineTo(p72[0],p72[1])
ctx2.moveTo(p32[0],p32[1])
ctx2.lineTo(p42[0],p42[1])
// 2p4 2
ctx2.moveTo(p42[0],p42[1])
ctx2.lineTo(p82[0],p82[1])
// 2p52
ctx2.moveTo(p52[0],p52[1])
ctx2.lineTo(p62[0],p62[1])
ctx2.moveTo(p52[0],p52[1])
ctx2.lineTo(p82[0],p82[1])
// 2p62
ctx2.moveTo(p62[0],p62[1])
ctx2.lineTo(p72[0],p72[1])
//p272
ctx2.moveTo(p72[0],p72[1])
ctx2.lineTo(p82[0],p82[1])
ctx2.stroke()

const zSlider2 = document.getElementById("cubeZSlider2")
const bugMode = document.getElementById("bugMode")
zSlider2.addEventListener("input", () => {
    zRot2 = zSlider2.value / ((180 / Math.PI) * bugMode.value ? 1 : (180 / Math.PI));
    var p12 = [(width2/2)*Math.cos(-zRot2 - 0) + x2 + centerX2, (length2/2) * Math.sin(zRot2 - 0) + height2 / 2 + y2 + centerY2]; // for y rot (400/Math.cos(zRot) + x, ((length/2) * Math.sin(yRot)) * Math.sin(zRot - 0) + height / 2 + y)
    var p22 = [(width2/2)*Math.cos(-zRot2 - 1.5708) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 1.5708) + height2 / 2 + y2 + centerY2]
    var p32 = [(width2/2)*Math.cos(-zRot2 - 3.1416) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 3.1416) + height2 / 2 + y2 + centerY2]
    var p42 = [(width2/2)*Math.cos(-zRot2 - 4.7124) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 4.7124) + height2/ 2 + y2 + centerY2]
    var p52 = [(width2/2)*Math.cos(-zRot2 - 0) + x2 + centerX2, (length2/2) * Math.sin(zRot2 - 0) - height2 / 2 + y2 + centerY2]
    var p62 = [(width2/2)*Math.cos(-zRot2 - 1.5708) + x + centerX2, (length2/2) * Math.sin(-zRot2 - 1.5708) - height2 / 2 + y2 + centerY2]
    var p72 = [(width2/2)*Math.cos(-zRot2 - 3.1416) + x + centerX2, (length2/2) * Math.sin(-zRot2 - 3.1416) - height2 / 2 + y2 + centerY2]
    var p82 = [(width2/2)*Math.cos(-zRot2 - 4.7124) + x2 + centerX2, (length2/2) * Math.sin(-zRot2 - 4.7124) - height2 / 2 + y2 + centerY2]
    
    ctx2.strokeStyle = "black"
    ctx2.lineWidth = 5
    ctx2.lineCap = "round"
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.beginPath()
    // 2p1
    ctx2.moveTo(p12[0],p12[1])
    ctx2.lineTo(p22[0],p22[1])
    ctx2.moveTo(p12[0],p12[1])
    ctx2.lineTo(p42[0],p42[1])
    ctx2.moveTo(p12[0],p12[1])
    ctx2.lineTo(p52[0],p52[1])
    // 2p22
    ctx2.moveTo(p22[0],p22[1])
    ctx2.lineTo(p32[0],p32[1])
    ctx2.moveTo(p22[0],p22[1])
    ctx2.lineTo(p62[0],p62[1])
    // 2p32
    ctx2.moveTo(p32[0],p32[1])
    ctx2.lineTo(p72[0],p72[1])
    ctx2.moveTo(p32[0],p32[1])
    ctx2.lineTo(p42[0],p42[1])
    // 2p4 2
    ctx2.moveTo(p42[0],p42[1])
    ctx2.lineTo(p82[0],p82[1])
    // 2p52
    ctx2.moveTo(p52[0],p52[1])
    ctx2.lineTo(p62[0],p62[1])
    ctx2.moveTo(p52[0],p52[1])
    ctx2.lineTo(p82[0],p82[1])
    // 2p62
    ctx2.moveTo(p62[0],p62[1])
    ctx2.lineTo(p72[0],p72[1])
    //p272
    ctx2.moveTo(p72[0],p72[1])
    ctx2.lineTo(p82[0],p82[1])
    ctx2.stroke()
})