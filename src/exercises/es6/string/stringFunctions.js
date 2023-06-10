// String functions
const word = 'ihznduq hmpibnughpimhg yfawozhbduqzg dlwbubkbauk';
const div1 = document.querySelector('.border-green div:first-child');
const div2 = document.querySelector('.border-green div:nth-child(2)');
const div3 = document.querySelector('.border-green div:nth-child(3)');
const div4 = document.querySelector('.border-green div:nth-child(4)');
const div5 = document.querySelector('.border-green div:last-child');

div1.textContent = word.at(word.indexOf('w') + 1).toUpperCase();
div2.textContent = word.lastIndexOf('w');
div3.textContent = word.includes('x');
div4.textContent = word.length;
div5.textContent = word.replaceAll(' ', '').length;
