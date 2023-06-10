// Change background color (basic)
const button1 = document.querySelector('div button:first-child');
const button2 = document.querySelector('div button:nth-child(2)');
const button3 = document.querySelector('div button:nth-child(3)');
const button4 = document.querySelector('div button:last-child');

button1.addEventListener('click', () => {
    document.body.style.background = button1.textContent;
});

button2.addEventListener('click', () => {
    document.body.style.background = button2.textContent;
});

button3.addEventListener('click', () => {
    document.body.style.background = button3.textContent;
});

button4.addEventListener('click', () => {
    document.body.style.background = button4.textContent;
});
