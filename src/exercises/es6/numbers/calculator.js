//  Calculator
const result = document.getElementById('result');
const button1 = document.querySelector('#buttons button:first-child');
const button2 = document.querySelector('#buttons button:nth-child(2)');
const button3 = document.querySelector('#buttons button:nth-child(3)');
const button4 = document.querySelector('#buttons button:last-child');

button1.addEventListener('click', () => {
    const input1 = +document.getElementById('number1').value;
    const input2 = +document.getElementById('number2').value;
    result.textContent = input1 + input2;
});

button2.addEventListener('click', () => {
    const input1 = +document.getElementById('number1').value;
    const input2 = +document.getElementById('number2').value;
    result.textContent = input1 - input2;
});

button3.addEventListener('click', () => {
    const input1 = +document.getElementById('number1').value;
    const input2 = +document.getElementById('number2').value;
    result.textContent = input1 * input2;
});

button4.addEventListener('click', () => {
    const input1 = +document.getElementById('number1').value;
    const input2 = +document.getElementById('number2').value;
    result.textContent = input1 / input2;
});
