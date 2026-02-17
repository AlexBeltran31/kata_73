document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");
    const secondsDisplay = document.getElementById("seconds");
    const scoreDisplay = document.getElementById("score-value");

    let score = 0;
    let seconds = 0;
    let timerStarted = false;
    let timerInterval = null;

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    let matchedPairs = 0;
    const totalPairs = cards.length / 2;

    function startTimer() {
        timerInterval = setInterval(function () {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }

    function handleCardClick() {

        if (lockBoard) return;
        if (this === firstCard) return;
        if (this.classList.contains("matched")) return;

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
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");

            firstCard.removeEventListener("click", handleCardClick);
            secondCard.removeEventListener("click", handleCardClick);

            score++;
            matchedPairs++;
            scoreDisplay.textContent = "Score: " + score;

            if (matchedPairs === totalPairs) {
                clearInterval(timerInterval);
                setTimeout(() => {
                    alert("You won in " + seconds + " seconds!");
                }, 500);
            }

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
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }

    cards.forEach(card => {
        card.addEventListener("click", handleCardClick);
    });

});
