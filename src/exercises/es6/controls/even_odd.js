// Even or odd?
const even = document.getElementById('first');
const odd = document.getElementById('second');
const prime = document.getElementById('third');

function isPrime(num) {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        const li = document.createElement('li');
        li.textContent = i;
        prime.append(li);
    }
    if (i % 2 === 0) {
        const li = document.createElement('li');
        li.textContent = i;
        even.append(li);
    } else if (i % 2 !== 0) {
        const li = document.createElement('li');
        li.textContent = i;
        odd.append(li);
    }
}
