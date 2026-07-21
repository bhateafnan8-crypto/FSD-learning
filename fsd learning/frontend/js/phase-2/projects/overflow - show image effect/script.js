// document.querySelector(".center").addEventListener("mousemove",function(dets){
//     let div = document.createElement("div");
//    div.classList.add("imgdiv");

//     let img = document.createElement("img");
//     img.setAttribute("src");
//     src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"

//     imgdiv.appendChild(img);
//     document.body.appendChild(div);

//     gsap.to('imgdiv',{
//         ease:power1,

//     })

// })

//------------------
// const btn=document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
  let prev = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector(".center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imgdiv");
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D");

    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img,{
        y:"0",
        ease:Power1,
        duration:0.6,
    })

    gsap.to(img,{
        y:"100%",
        ease:Power2,
        delay:0.6,
    })


    setTimeout(function(){
        div.remove();
    },1000)
  }, 400)
);
