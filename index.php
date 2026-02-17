<?php
$score = 0;
$cardFaces = [
    "Chariot.jpg",
    "Death.jpg",
    "Devil.jpg",
    "Fortune.jpg",
    "Judgement.jpg",
    "Moon.jpg",
    "Priestess.jpg",
    "The Lovers.jpg"
];
$cards = array_merge($cardFaces, $cardFaces);
shuffle($cards);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Memory Game Board</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="game-container">
        <header class="game-header">
            <h1>Memory Game</h1>
            <div class="score">
                Score: <?php echo $score; ?>
            </div>

            <div class="timer">
                Time: <span id="seconds">0</span>s
            </div>
        </header>

        <div class="board">
            <?php for ($i = 0; $i < $totalCards; $i++): ?>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="images/card-back.png" alt="Card Back">
                        </div>
                        <div class="card-back">
                            <img src="images/Death.jpg" alt="Card Front">
                        </div>
                    </div>
                </div>
            <?php endfor; ?>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
