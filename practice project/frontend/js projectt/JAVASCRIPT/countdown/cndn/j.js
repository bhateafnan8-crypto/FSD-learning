// const endDate = "23 November 2023 23:22:00";
// document.getElementById("end-Date").innerText = endDate;
// const inputs = document.querySelectorAll("input");
// console.log(inputs);




// //-----function = clock-------
// function clock() {
//   const end = new Date(endDate)
//   const now = new Date()
//   const diff = (end - now) / 1000;
//   // console.log(end);
//   // console.log(now);
//   console.log(diff);
//   inputs[0].value = Math.floor(diff/3600/24);
// }
// //initial call
// clock()


// const endDateString = "23 November 2023 23:22:00"; // Corrected the time format to 24-hour format
// const endDateElement = document.getElementById("end-Date");
// endDateElement.innerText = endDateString;

// const inputs = document.querySelectorAll("input");

// // -----function = clock-------
// function clock() {
//   const end = new Date(endDateString);
//   const now = new Date();
//   const diff = (end - now) / 1000;

//   const days = Math.floor(diff / 3600 / 24);
//   const hours = Math.floor((diff % (3600 * 24)) / 3600);
//   const minutes = Math.floor((diff % 3600) / 60);
//   const seconds = Math.floor(diff % 60);

//   inputs[0].value = days;
//   inputs[1].value = hours;
//   inputs[2].value = minutes;
//   inputs[3].value = seconds;

//   // If you want to update the time continuously, you can use setTimeout to call the function every second
//   setTimeout(clock, 1000);
// }

// // Initial call
// clock();




const endDateString = "01 april 2024 18:37:00"; // Corrected the time format to 24-hour format
const endDateElement = document.getElementById("end-Date");
endDateElement.innerText = endDateString;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDateString);
  const now = new Date();
  let diff = Math.abs((end - now) / 1000); // Use Math.abs to get the absolute difference

  const days = Math.floor(diff / 3600 / 24);
  diff -= days * 3600 * 24; // Subtract days from the remaining difference

  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600; // Subtract hours from the remaining difference

  const minutes = Math.floor(diff / 60);
  diff -= minutes * 60; // Subtract minutes from the remaining difference

  const seconds = Math.floor(diff);

  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = seconds;

  // If you want to update the time continuously, you can use setTimeout to call the function every second
  setTimeout(clock, 1000);
}

// Initial call
clock();
