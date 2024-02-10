//Task 1 Write a function to print numbers from 20 to 30 with the interval 0,5
const taskOne = document.getElementById('task-one');
const taskTwo = document.getElementById('task-two');
const taskThree = document.getElementById('task-three').value;
const taskFour = document.getElementById('task-four');
const taskFive = document.getElementById('task-five');

taskOne.textContent = `Task 1. Print numbers with interval 0.5:`;

function printOutNumbers() {
    for (let i = 20; i <= 30; i += 0.5) {
        document.write(`${i.toFixed(1)} <br>`);
    }
}

printOutNumbers();


//Task 2 Write a function to count exchange rate usd-uah
document.write(`Task 2. Display exchange amounts for summs from 10 to 100, tens only, if 1 usd = 27 uah`);

function countExchangeAmount() {
    const exchangeRate = 27;

    for (let i = 10; i <= 100; i += 10) {
        const uah = i * exchangeRate;
        document.write(`${i} usd = ${uah} uah <br>`);
    }
}

countExchangeAmount();

//Task 3 There is number N given. Display all numbers square root of wich is not bigger than a saure root of N number

const n = 10;
function displayNumbersBasedOnSquareRoots(n) {
    for (let i = 1; i <= 100; i++) {
        if (Math.sqrt(i) < n) {
            console.log(i);
        }
    }
}

displayNumbersBasedOnSquareRoots(n);


//Task 4: Integer x is given. Write a function to check if x is a primer number. 

const x = 12;
function isPrimeNumber(x) {
    if (x <= 1) {
        return false;
    }
    for (let i = 0; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

const result = isPrimeNumber(x);
console.log(result);

taskFour.textContent = `Task 4. Is number given a primer number (true) or not (false): ${result}`;

//Task 5: Write a function to check if a given number can be obtained by raising number 3 in any power

const number = 81;
function isPowerOfThree(x) {
    if (x <= 0) {
        return false;
    }

    while (x % 3 === 0) {
        x /= 3;
    }
    return x === 1;
}

const functionResult = isPowerOfThree(number);

console.log(functionResult);

taskFive.textContent = `Task 5. Is number given can be obtaine raising 3 in any power? (true) or not (false): ${result}`;
