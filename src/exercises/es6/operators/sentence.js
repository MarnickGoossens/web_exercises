// Make a valid sentence
const a = 'accidentally';
const b = 'server';
const c = 'he';
const d = 'company\'s';
const e = 'had';
const f = 'hacked';
const g = 'into';
const h = 'his';
const p = document.querySelector('p');

const text = c + e + a + f + g + h + d + b;
const literals = `${c} ${e} ${a} ${f} ${g} ${h} ${d} ${b}.`;
p.textContent = literals;
