// Random image
const img = document.querySelector('figure img');
const figc = document.querySelector('figure figcaption');

function randomMinMax10(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) * 10;
}

function newImage() {
    const width = +randomMinMax10(100, 800);
    const height = +randomMinMax10(100, 400);
    const link = `https://picsum.photos/${width}/${height}`;
    img.src = link;
    figc.textContent = link;
}

window.setInterval(newImage, 5000);
