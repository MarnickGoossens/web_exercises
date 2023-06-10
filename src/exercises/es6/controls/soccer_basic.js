// A soccer game (basic)
const score = ['Belgium', 'Spain', 'Spain', 'Belgium', 'Spain', 'Belgium', 'Belgium', 'Belgium'];
const tbody = document.querySelector('tbody');

let belgium = 0;
let spain = 0;

score.forEach((element) => {
    if (element === 'Belgium') {
        belgium++;
    } else {
        spain++;
    }
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = belgium;
    td2.textContent = spain;
    tbody.append(tr);
    tr.append(td1);
    tr.append(td2);
});
