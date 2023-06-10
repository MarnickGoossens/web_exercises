// Slideshow
const ul = document.querySelector('#album');

function move() {
    const first = document.querySelector('#album li:first-child');
    ul.append(first);
}

window.setInterval(move, 3000);
