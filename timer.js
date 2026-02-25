/* Timer */
// https://jsfiddle.net/u7ahcdgn/2/

let interval = null;
let isRunning = false;

function runTimer(work, pause, display) {
  let timer = work;
  let isWork = true;

  interval = setInterval(() => {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    //condition ? value_if_true : value_if_false
    // adds 0 before string
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    display.textContent = min + ":" + sec;

    if (--timer <= 0) {
      isWork = !isWork;
      timer = isWork ? work : pause;
    }
  }, 1000);
}

/* Play Audio */

/* Play Button */
document.getElementById("play").addEventListener("click", () => {
  var work = 60 * 24 + 59,
    pause = 60 * 15,
    display = document.querySelector("#time");
  if (isRunning) {
    clearInterval(interval);
    display.textContent = "25:00";
    isRunning = false;
  } else {
    runTimer(work, pause, display);
    isRunning = true;
  }
});
