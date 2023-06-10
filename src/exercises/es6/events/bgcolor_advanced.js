// Change background color (advanced)
const button1 = document.querySelector('div button:first-child');
const button2 = document.querySelector('div button:nth-child(2)');
const button3 = document.querySelector('div button:nth-child(3)');
const button4 = document.querySelector('div button:last-child');
const container = document.querySelector('div.border-gray');
const containerStyle = container.style;


button1.addEventListener('click', () => {
    container.style.background = button1.textContent;
});

button2.addEventListener('click', () => {
    container.style.background = button2.textContent;
});

button3.addEventListener('click', () => {
    container.style.background = button3.textContent;
});

button4.addEventListener('click', () => {
    container.style = containerStyle;
});
