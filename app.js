const InHour = document.getElementById("in-hours");
const InMins = document.getElementById("in-minutes");
const InSec = document.getElementById("in-seconds");
const timeEl = document.querySelector(".time");
const btnSet = document.querySelector(".btn-set");
const btnStartEl = document.querySelector(".btn-start");
const btnStopEl = document.querySelector(".btn-stop");
const btnResetEl = document.querySelector(".btn-reset");

let hours = 0;
let mins = 0;
let seconds = 0;
let time = 0;

const showTimer = function () {
  hours = String(hours).padStart(2, 0);
  mins = String(mins).padStart(2, 0);
  seconds = String(seconds).padStart(2, 0);
  timeEl.innerText = `${hours}:${mins}:${seconds}`;
};
showTimer();

const startTimer = function () {
  if (time <= 0) return;

  time--;
  console.log(time);

  hours = Math.floor(time / 3600) % 24;
  mins = Math.floor(time / 60) % 60;
  seconds = Math.floor(time) % 60;

  showTimer();
};

btnSet.addEventListener("click", (e) => {
  e.preventDefault();
  // hours, mins, seconds, time;

  hours = +InHour.value || 0;
  mins = +InMins.value || 0;
  seconds = +InSec.value || 0;

  time = hours * 60 * 60 + mins * 60 + seconds;

  InHour.value = hours;
  InMins.value = mins;
  InSec.value = seconds;

  console.log(hours, mins, seconds);

  showTimer();
});

let countdown;

btnStartEl.addEventListener("click", () => {
  if (countdown) {
    return;
  }

  startTimer();
  countdown = setInterval(startTimer, 1000);

  InHour.value = "";
  InMins.value = "";
  InSec.value = "";
});

btnStopEl.addEventListener("click", () => {
  clearInterval(countdown);
});

btnResetEl.addEventListener("click", () => {
  seconds = 0;
  mins = 0;
  hours = 0;
  clearInterval(countdown);
  showTimer();
});
