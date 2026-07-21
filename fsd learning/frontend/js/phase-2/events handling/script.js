// let head = document.querySelector(".head1");
// let main = document.querySelector(".main");

// window.addEventListener("keydown",function(det){
//     if(det.key === " ")  head.textContent="SPC";
//      else head.textContent=det.key;
// })

//  ---------------------------------------------------------

// let btn = document.querySelector(".btn");
// let inp = document.querySelector("#inp");
// let para = document.querySelector("p");

// btn.addEventListener("click",function(){
// inp.click();
// })

// inp.addEventListener("change",function(det){
// const file = det.target.files[0];
// if(file){
//     btn.textContent= file.name;
// }

// })

//  ---------------------------------------------------------

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector(".main");

// form.addEventListener("submit", function (det) {
//   det.preventDefault();

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute("src", inputs[0].value);

//   let h3 = document.createElement("h3");
//   h3.textContent = inputs[1].value;

//   let h5 = document.createElement("h5");
//   h5.textContent = inputs[2].value;

//   let p = document.createElement("p");
//   p.textContent = inputs[3].value;

//   profile.appendChild(img);
//   card.appendChild(profile);
//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   main.appendChild(card);

//   inputs.forEach(function (inp) {
//     if (inp.type !== "submit") {
//       inp.value = "";
//     }
//   });
// });




// let main = document.querySelector(".main");


// window.addEventListener("mousemove",function(det){
//   main.style.top=det.clientY + "px";
//   main.style.left=det.clientX + "px";

// })

// let ul =  document.querySelector("ul").addEventListener("click",function(dets){
// dets.target.style.textDecoration = "line-through"

// })


let inp  = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input",function(){
  let left = 20 - inp.value.length;
  span.textContent= left;
  if(left < 0){
    span.style.color="red";
  }
  else{
    span.style.color="white";

  }
})