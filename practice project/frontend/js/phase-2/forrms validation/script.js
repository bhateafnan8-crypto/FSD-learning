// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(det){
//     det.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector("#check").style.display="initial";
//     }
//     else{
//         document.querySelector("#check").style.display="none";

//     }
// })


// Select elements
// let form = document.querySelector("#loginForm");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");

// let emailError = document.querySelector("#emailError");
// let passError = document.querySelector("#passError");

// // Form submit event
// form.addEventListener("submit", function(e){
//     e.preventDefault();  // stop form refresh

//     let valid = true;

//     // ---- Email Validation ----
//     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (regex.test(email.value.trim())) {
//         emailError.style.display = "none";  // hide error
//     } else {
//         emailError.style.display = "block"; // show error
//         valid = false;
//     }

//     // ---- Password Validation ----
//     if (password.value.trim().length >= 6) {
//         passError.style.display = "none";
//     } else {
//         passError.style.display = "block";
//         valid = false;
//     }

//     // ---- Final Action ----
//     if (valid) {
//         alert("✅ Login Successful!");
//         // yahan aap backend ya next page redirect kar sakte ho
//     }
// });




// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (det) {
//   det.preventDefault();


//     document.querySelector("#emailError").textContent="";
//     document.querySelector("#valid").textContent="";
//     document.querySelector("#passError").textContent="";


//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);

//     let isValid = true;

//     if(!emailans){

//         document.querySelector("#emailError").style.display="initial";
//         isValid= false;
//     }

//     if(!passwordans){

//         document.querySelector("#passError").style.display="initial";
//         isValid= false;

//     }

//     if(isValid){
//         document.querySelector("#valid").style.display="initial"
//     }
// });




let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

let emailError = document.querySelector("#emailError");
let passError = document.querySelector("#passError");
let validMsg = document.querySelector("#valid");

form.addEventListener("submit", function (det) {
  det.preventDefault();

  // hide sab messages by default
  emailError.style.display = "none";
  passError.style.display = "none";
  validMsg.style.display = "none";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  let isValid = true;

  if (!emailans) {
    emailError.style.display = "block";
    isValid = false;
  }

  if (!passwordans) {
    passError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    validMsg.style.display = "block";
  }
});



