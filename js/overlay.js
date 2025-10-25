const overlay = document.getElementById("overlay");
const ctx = overlay.getContext("2d");
console.log(overlay.width, overlay.height)

let circles = []

$("#content").on("click", (e) => {
    const rect = document.getElementById("content").getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log({
        radius: 1,
        x: x,
        y: y
    });
    circles.push({
        radius: 1,
        x: x,
        y: y,
        //colors: [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)],
        colors: [0, 200, 0]
        //colors: [97, 165, 255]
    });
})

overlay.width = overlay.offsetWidth;
overlay.height = overlay.offsetHeight;
requestAnimationFrame(anim)
function anim() {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // 0.05 controls fade speed
    ctx.fillRect(0, 0, overlay.width, overlay.height);
    ctx.restore();    
    for(let i = 0; i < circles.length; i++) {
        //console.log(i);
        alpha = 1 - Math.max(0, circles[i].radius - 14) * 0.1;
        ctx.strokeStyle = `rgba(${circles[i].colors[0]}, ${circles[i].colors[1]}, ${circles[i].colors[2]}, ${alpha})`;
        ctx.linewidth = 10
        ctx.beginPath();
        ctx.ellipse(circles[i].x, circles[i].y, circles[i].radius, circles[i].radius, 0, 0, 2 * Math.PI);
        circles[i].radius += 10 / circles[i].radius;
        if (circles[i].radius > 30) {
            circles.splice(i, 1);
        }
        ctx.stroke();
    }
    requestAnimationFrame(anim)
}