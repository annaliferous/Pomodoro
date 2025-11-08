// Timer
// https://jsfiddle.net/u7ahcdgn/2/
function runTimer(duration, display) {
  let timer = duration,
    min,
    sec;
  let interval = setInterval(function () {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    //condition ? value_if_true : value_if_false
    // adds 0 before string
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    display.textContent = min + ":" + sec;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = duration;
    }
  }, 1000);

  document.getElementById("rerun").addEventListener("click", function () {
    clearInterval(interval);
  });
}

function startTimer() {
  var dur = 60 * 25,
    display = document.querySelector("#time");
  runTimer(dur, display);
}
