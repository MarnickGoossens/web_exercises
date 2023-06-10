// Style the paragraphs
const div = document.querySelector('div#paragraphs');
const paragraphs = document.querySelectorAll('div#paragraphs p');
const small = document.getElementById('small');
const medium = document.getElementById('medium');
const large = document.getElementById('large');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const button = document.querySelector('div button');
const select = document.querySelector('select');
const option1 = document.querySelector('select option:first-child');
const option2 = document.querySelector('select option:nth-child(2)');
const option3 = document.querySelector('select option:last-child');

option1.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        p.style.fontFamily = option1.textContent;
    });
});

option2.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        p.style.fontFamily = option2.textContent;
    });
});

option3.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        p.style.fontFamily = option3.textContent;
    });
});

small.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        p.style.fontSize = '12px';
    });
});

medium.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        p.style.fontSize = '16px';
    });
});

large.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        p.style.fontSize = '24px';
    });
});

bold.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        if (p.style.fontWeight === 'bold') {
            p.style.fontWeight = 'normal';
        } else {
            p.style.fontWeight = 'bold';
        }
    });
});

italic.addEventListener('click', () => {
    paragraphs.forEach((p) => {
        if (p.style.fontStyle === 'italic') {
            p.style.fontStyle = 'normal';
        } else {
            p.style.fontStyle = 'italic';
        }
    });
});

button.addEventListener('click', () => {
    console.log('clicked');
    if (div.style.background === 'rgb(17, 17, 17)') {
        button.textContent = 'Dark theme';
        div.style.background = '#f8f8f8';
        div.style.color = '#111';
    } else {
        button.textContent = 'Light theme';
        div.style.background = '#111';
        div.style.color = '#f8f8f8';
    }
});
