document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");
    const secondsDisplay = document.getElementById("seconds");

    let seconds = 0;
    let timerStarted = false;
    let timerInterval = null;

    function startTimer() {
        timerInterval = setInterval(function () {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }

    cards.forEach(card => {
        card.addEventListener("click", function () {

            // Start timer only once
            if (!timerStarted) {
                startTimer();
                timerStarted = true;
            }

            card.classList.toggle("flipped");
        });
    });

});
