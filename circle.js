const circleSlider = document.getElementById("circleSlider");
const circleCenter = document.getElementById("circleCenter");
let r1 = 150;

var circleDragging = false;
circleCenter.addEventListener("mousedown", () => {
  circleDragging = true;
  document.addEventListener("mousemove", circleMove);
});

document.addEventListener("mouseup", () => {
  if (circleDragging) {
    circleDragging = false;
    document.removeEventListener("mousemove", circleMove);
  }
});

function circleMove(e) {
  const centerY =
    (circleCenter.getBoundingClientRect().top +
      circleCenter.getBoundingClientRect().bottom) /
    2;
  const centerX =
    (circleCenter.getBoundingClientRect().left +
      circleCenter.getBoundingClientRect().right) /
    2;
  y = e.clientY - centerY;
  x = e.clientX - centerX;
  let r2 = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  let scale = r1 / r2;
  y *= scale;
  x *= scale;
  console.log(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
  circleSlider.style.translate = `${x}px ${y}px`;
}
