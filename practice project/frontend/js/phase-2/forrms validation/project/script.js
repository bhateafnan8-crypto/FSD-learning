let form = document.querySelector("form");

let nm = document.querySelector("#name");
let em = document.querySelector("#email");
let sub = document.querySelector("#subject");
let msg = document.querySelector("#message");
let rating = document.querySelector("#rating");

let emailerror = document.querySelector("#emailError");
let messageerror = document.querySelector("#messageError");
let nameerror = document.querySelector("#nameError");
let subjecterror = document.querySelector("#subjectError");
let ratingerror = document.querySelector("#ratingError");

let sucessmsg=document.querySelector("#successMsg");

form.addEventListener("submit", function(dets) {
  dets.preventDefault();

emailerror.textContent=""
messageerror.textContent="";
nameerror.textContent="";
ratingerror.textContent="";
subjecterror.textContent="";
  // Name: at least 2 alphabetic characters (letters + spaces allowed)
const nameRegex = /^[A-Za-z\s]{2,}$/;

// Email: standard email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Subject: at least 3 characters (letters, numbers, spaces allowed)
const subjectRegex = /^[A-Za-z0-9\s]{3,}$/;

// Message: at least 10 characters (any characters, but min length 10)
const messageRegex = /^.{10,}$/;

// Rating: must be a digit 1–5
const ratingRegex = /^[1-5]$/;

let nameans=nameRegex.test(nm.value);
let emailans=emailRegex.test(em.value);
let subans=subjectRegex.test(sub.value);
let msgans=messageRegex.test(msg.value);
let ratans=ratingRegex.test(rating.value);

let isValid=true;

if(!nameans){
nameerror.style.display="initial";
nameerror.textContent="Name must be at least 2 characters"
isValid=false;
}

if(!emailans){
emailerror.style.display="initial";
emailerror.textContent="Please enter a valid email"
isValid=false;

}

if(!subans){
subjecterror.style.display="initial";
subjecterror.textContent="Subject is required"
isValid=false;

}

if(!msgans){
messageerror.style.display="initial";
messageerror.textContent="Message must be at least 10 characters"
isValid=false;

}

if(!ratans){
ratingerror.style.display="initial";
ratingerror.textContent="Please select a rating"
isValid=false;

}

if(isValid){
sucessmsg.style.display="initial";
sucessmsg.textContent="✅ Thank you for your feedback!"

}

}
);



