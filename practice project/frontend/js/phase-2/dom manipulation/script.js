let inp = document.querySelector("input");
inp.addEventListener("input",function(det){
    if(det.data !== null) console.log(det.data);
})


let btn = document.querySelector(".btn");
let para = document.querySelector("#para");
let a = 10,b=20;
let c = a+b;
btn.addEventListener("click",function(det){
    para.textContent=c;
})


let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let btn1 = document.querySelector(".btn1");
let par1 = document.querySelector("#par1");
let par2 = document.querySelector("#par2");
let par3 = document.querySelector("#par3");
inp1.addEventListener("input",function(det){
    if(det.data !== null){
        par1.textContent=det.data
    }
})
inp2.addEventListener("input",function(dets){
    if(dets.data !== null){
        par2.textContent=dets.data
    }
})

btn1.addEventListener("click", function() {
    // input ke values nikalna
    let val1 = Number(inp1.value);  
    let val2 = Number(inp2.value);

    // calculation (yaha addition hai)
    let ans = val1 + val2;

    // result paragraph me dikhana
    par3.textContent = ans;
});

