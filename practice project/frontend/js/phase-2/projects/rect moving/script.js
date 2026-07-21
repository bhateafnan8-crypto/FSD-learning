

window.addEventListener("mousemove", function (dets) {
    let box = document.querySelector(".center");
  let getposition = box.getBoundingClientRect();
  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    50 + getposition.width/2,
    window.innerWidth -   (50 + getposition.width/2),
    dets.clientX
  );
  gsap.to(".center", {
    left: xval  + "px",
    ease: Power3,
  });
});
