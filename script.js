const tilt = document.getElementById("tilt");
const tiltTitle = document.getElementById("tilt__title");
tilt.addEventListener("mousemove", (e) => {
  console.log("e.offsetX : " + e.offsetX + "\n" + "e.offsetY : " + e.offsetY);
  let offX = e.offsetX;
  let offY = e.offsetY;
  tilt.style.transform =
    "perspective(5000px) rotateX(" +
    (tilt.clientHeight / 2 - offY) / 5 +
    "deg) rotateY(" +
    (tilt.clientWidth / 2 - offX) / 5 +
    "deg)";
  tiltTitle.style.transform =
    "perspective(5000px) rotateX(" +
    (tilt.clientHeight / 2 - offY) / 10 +
    "deg) rotateY(" +
    (tilt.clientWidth / 2 - offX) / 10 +
    "deg)";
});
tilt.addEventListener("mouseleave", () => {
  tilt.style.transform = "";
  tiltTitle.style.transform = "";
});
