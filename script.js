document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");
    const secondsDisplay = document.getElementById("seconds");

    let score = 0;
    const scoreDisplay = document.querySelector(".score");

    let seconds = 0;
    let timerStarted = false;
    let timerInterval = null;

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    function startTimer() {
        timerInterval = setInterval(function () {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }

    function handleCardClick() {

        if (lockBoard) return;
        if (this === firstCard) return;

        // Start timer on first interaction
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }

        this.classList.add("flipped");

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.card === secondCard.dataset.card;

        if (isMatch) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        resetBoard();
        } else {
            unflipCards();
        }
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(function () {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    cards.forEach(card => {
        card.addEventListener("click", handleCardClick);
    });

});
