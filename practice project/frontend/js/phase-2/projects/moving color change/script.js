let box = document.querySelector(".center");

box.addEventListener("mousemove",function(det){

var getlocation = box.getBoundingClientRect();

var  insidelocation = det.clientX - getlocation.left;

if(insidelocation < getlocation.width/2){
var redcolor = gsap.utils.mapRange(0,getlocation.width/2,255,0,insidelocation);
gsap.to(box,{
  backgroundColor:`rgb(${redcolor},0,0)`,
  ease:Power4,
})
}
else{
var bluecolor = gsap.utils.mapRange(getlocation.width/2,getlocation.width,0,255,insidelocation);
gsap.to(box,{
  backgroundColor:`rgb(0,0,${bluecolor})`,
  ease:Power4,
})
}
})
