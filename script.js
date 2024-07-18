// Function to start the countdown
function startCountdown(duration, display) {
    let timer = duration; // This variable keeps track of how many seconds are left.
    let hours, minutes, seconds; // These variables will store the hours, minutes, and seconds of the countdown.

    // setInterval is a function that repeats a task every certain amount of time.
    setInterval(function () {
        // Inside this function, we calculate how many hours, minutes, and seconds are left.
        hours = parseInt(timer / 3600, 10); // Divide the remaining seconds by 3600 to get the hours.
        minutes = parseInt((timer % 3600) / 60, 10); // Use the remainder operator (%) to get the remaining minutes.
        seconds = parseInt(timer % 60, 10); // Use the remainder operator (%) to get the seconds.

        // We use 'parseInt' to make sure hours, minutes, and seconds are whole numbers (integers).
        // If hours, minutes, or seconds are less than 10, we add a '0' in front to make it look nice.
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // The 'display' parameter is where we show the countdown on the screen.
        display.textContent = hours + ":" + minutes + ":" + seconds;

        // Decrement (reduce) the 'timer' variable by 1 second.
        timer--;

        // If the timer reaches 0 (no seconds left), we reset it back to the original duration.
        if (timer < 0) {
            timer = duration; // Reset the timer to the initial duration.
        }
    }, 1000); // This is how often the setInterval function will run (every 1000 milliseconds = every 1 second).
}

// Initialize the countdown when the page is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
    // Set the duration of the countdown in seconds. In this case, it's set to 1 hour (3600 seconds) plus 5 minutes (5 * 60 seconds).
    const duration = 1 * 3600 + 5 * 60; // 1 hour and 5 minutes in seconds.

    // Select the countdown element on the webpage where we will show the countdown.
    const display = document.getElementById("countdown");

    // Start the countdown by calling the 'startCountdown' function we defined earlier.
    startCountdown(duration, display);
});
