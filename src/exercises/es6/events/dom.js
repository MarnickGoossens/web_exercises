// Basic DOM manipulation
const header = document.querySelector('h1');
const firstListItem = document.getElementById('first');
const secondListItem = document.getElementById('second');
const thirdListItem = document.getElementById('third');
const button = document.querySelector('li button');

firstListItem.addEventListener('click', function(e) {
    header.textContent = firstListItem.textContent;
});

secondListItem.addEventListener('mouseenter', function(e) {
    header.classList.add('orange');
});

secondListItem.addEventListener('mouseleave', function(e) {
    header.classList.remove('orange');
});

thirdListItem.addEventListener('dblclick', function(e) {
    header.classList.toggle('green');
});

button.addEventListener('click', function(e) {
    header.style.transform = 'rotate(180deg)';
});

button.addEventListener('dblclick', function(e) {
    header.style.transform = 'rotate(0deg)';
});
