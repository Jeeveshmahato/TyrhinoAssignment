function startCountdown(duration, display) {
    let timer = duration; 
    let hours, minutes, seconds;

    setInterval(function () {
        hours = parseInt(timer / 3600, 10); 
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10); 

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        timer--;

        if (timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const duration = 1 * 3600 + 5 * 60;
    const display = document.getElementById("countdown");
    startCountdown(duration, display);
});
