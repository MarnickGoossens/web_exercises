// Reaction Game
const blocks = document.querySelectorAll('.blocks div');
let nr;
let newNr;

function number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function block() {
    newNr = number(0, 2);
    while (newNr == nr) {
        newNr = number(0, 2);
    }
    blocks.item(newNr).classList.add('red');
    nr = newNr;
}

block();
window.setInterval(block, 750);
