// Lottery
const button = document.querySelector('button');
const balls = document.querySelectorAll('#ballcontainer div');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

button.addEventListener('click', () => {
    balls.forEach((ball) => {
        ball.textContent = getRandomInt(1, 45);
    });
});
