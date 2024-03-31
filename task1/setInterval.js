let timer;
let button = document.querySelector(".startBtn");

function startTimer() {
  let seconds = parseInt(document.querySelector(".second").value);
  let timerValue = document.querySelector(".timer");

  // Проверяем, что введено число и оно больше нуля
  if (!isNaN(seconds) && seconds > 0) {
    if (timer) {
        clearInterval(timer);
    }
    timerValue.textContent = seconds;

    // Запускаем таймер
    timer = setInterval(function() {
      seconds--;
      timerValue.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  } 
  else {
    alert("Пожалуйста, введите положительное число в поле для ввода.");
    document.querySelector(".second").value = ""
  }
}

button.addEventListener("click", startTimer);