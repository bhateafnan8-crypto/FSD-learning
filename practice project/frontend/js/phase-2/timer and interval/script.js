// let progress = document.querySelector("#progressBar");
// let progressText = document.querySelector("#progressText");
// let startBtn = document.querySelector("#startBtn");
// let resetBtn = document.querySelector("#resetBtn");

// let count = 0;

// let btn = setInterval(function () {
//   startBtn.addEventListener("click", function () {

    
//     if (count < 100) {
//       count++;
//       progress.style.width = `${count}%`;
//       progressText.textContent = `${count}%`;
//     }
//   });

//  resetBtn.addEventListener("click", function () {
    

//   });
// }, 30);




let progressBar = document.querySelector("#progressBar");
let progressText = document.querySelector("#progressText");
let timeText = document.querySelector("#timeText");
let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");

let progress = 0;
let timer = 0;
let interval;
let timeInterval;

// Start Download
startBtn.addEventListener("click", () => {
  if (interval) return; // agar already chal raha hai toh dobara start na ho

  interval = setInterval(() => {
    if (progress < 100) {
      progress += 2; // speed (change kar sakte ho)
      progressBar.style.width = progress + "%";
      progressText.textContent = progress + "%";
    } else {
      clearInterval(interval);
      clearInterval(timeInterval);
      interval = null;
      progressText.textContent = "✅ Completed!";
    }
  }, 300); // har 300ms me progress update

  timeInterval = setInterval(() => {
    timer++;
    timeText.textContent = `⏳ Time Elapsed: ${timer}s`;
  }, 1000);
});

// Reset Button
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  clearInterval(timeInterval);
  interval = null;
  progress = 0;
  timer = 0;
  progressBar.style.width = "0%";
  progressText.textContent = "0%";
  timeText.textContent = "⏳ Time Elapsed: 0s";
});
