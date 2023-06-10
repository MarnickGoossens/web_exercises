// A soccer game (advanced)
const score = [
    { time: 14, team: 'Belgium', scorer: 'E. Hazard' },
    { time: 18, team: 'Spain', scorer: 'F. Torres' },
    { time: 32, team: 'Spain', scorer: 'D. Olmo' },
    { time: 44, team: 'Belgium', scorer: 'R. Lukaku' },
    { time: 56, team: 'Spain', scorer: 'F. Torres' },
    { time: 72, team: 'Belgium', scorer: 'R. Lukaku' },
    { time: 74, team: 'Belgium', scorer: 'D. Mertens' },
    { time: 89, team: 'Belgium', scorer: 'M. Batshuayi' }
];
const tbody = document.querySelector('tbody');

let scoreBelgium = 0;
let scoreSpain = 0;

score.forEach((element) => {
    if (element.team === 'Belgium') {
        scoreBelgium++;
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const span = document.createElement('span');
        span.style.fontWeight = 'bold';
        span.textContent = scoreBelgium;
        td1.textContent = ` (${element.time}m: ${element.scorer})`;
        td2.textContent = `${scoreSpain}`;
        tbody.append(tr);
        td1.prepend(span);
        tr.append(td1);
        tr.append(td2);
    } else {
        scoreSpain++;
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const span = document.createElement('span');
        span.style.fontWeight = 'bold';
        span.textContent = scoreSpain;
        td1.textContent = `${scoreBelgium}`;
        td2.textContent = ` (${element.time}m: ${element.scorer})`;
        tbody.append(tr);
        tr.append(td1);
        td2.prepend(span);
        tr.append(td2);
    }
});
