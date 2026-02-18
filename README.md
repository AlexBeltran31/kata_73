# Kata 73 – Memory Game (Matching Logic)

Extension of the previous memory game implementation.

## Description

This version introduces full matching logic:

- Each card has its own identity.
- There are 8 unique cards.
- Each card appears twice to form pairs.
- Cards are shuffled dynamically using PHP.
- Players can flip two cards at a time.
- Matching pairs remain open.
- Non-matching pairs flip back after a short delay.
- Score increases on each successful match.
- A timer starts on the first click and stops when the game is completed.

## Technologies Used

- PHP (dynamic card generation and shuffle)
- HTML5
- CSS3 (3D flip animation)
- JavaScript (game logic and timer)

## Game Rules

- Flip two cards.
- If they match, they remain open.
- If they do not match, they flip back.
- The game ends when all pairs are found.
