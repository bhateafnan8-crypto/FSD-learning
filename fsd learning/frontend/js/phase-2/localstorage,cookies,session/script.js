// function setDL(){if(window.matchMedia("(prefers-color-scheme: dark)").matches){
//     document.body.classList.remove("light")
//     document.body.classList.add("dark");
// }
// else{
//     document.body.classList.remove("dark");
//     document.body.classList.add("light");
// }}

// if(localStorage.getItem("theme")){
//     document.body.classList.add(localStorage.getItem("theme"));
// }
// else{
//     setDL();
// }

// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
//     if(!localStorage.getItem("theme")){
//         setDL();
//     }
// })

// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     if(document.body.classList.contains("dark")){
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");

//         localStorage.setItem("theme","light");
//     }

//     else{
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");

//         localStorage.setItem("theme","dark");
//     }
// })











function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
}

// Detect OS preference
function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Initial theme load
let savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || systemTheme());

// Listen for system changes (only if user hasn’t chosen manually)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    applyTheme(systemTheme());
  }
});

// Button toggle
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
