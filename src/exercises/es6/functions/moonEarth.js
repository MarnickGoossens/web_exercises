// Moon and earth movement
const img = document.getElementById('image');
let i = 1;
let timeout = 100;

const timer = setInterval(showNextImage, timeout);

function showNextImage() {
    i++;
    if (i === 23) {
        i = 0;
    }
    if (i.toString().length < 2) {
        const link = `../../../assets/moonEarth/IMG0${i}.gif`;
        img.src = link;
    } else {
        const link = `../../../assets/moonEarth/IMG${i}.gif`;
        img.src = link;
    }

    const output = document.getElementById('output');
    if (timeout != output.textContent) {
        timeout = output.textContent;
        clearInterval(timer);
    }
}
