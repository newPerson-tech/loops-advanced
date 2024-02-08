//Task 1 Write a function to print numbers from 20 to 30 with the interval 0,5
const taskOne = document.getElementById('task-one');
const taskTwo = document.getElementById('task-two');
const taskThree = document.getElementById('task-three');
const taskFour = document.getElementById('task-four');
const taskFive = document.getElementById('task-five');

taskOne.textContent = `Print numbers with interval 0.5:`;

function printOutNumbers() {
    for (let i = 20; i <= 30; i += 0.5) {
        document.write(`${i.toFixed(1)} <br>`);
    }
}

printOutNumbers();


//Task 2 Write a function to count exchange rate usd-uah
document.write(`Display exchange amounts for summs from 10 to 100, tens only, if 1 usd = 27 uah`);

function countExchangeAmount() {
    const exchangeRate = 27;

    for (let i = 10; i <= 100; i += 10) {
        const uah = i * exchangeRate;
        document.write(`${i} usd = ${uah} uah <br>`);
    }
}

countExchangeAmount();

//Task 3 There is number N given. Display all numbers square root of wich is not bigger than a saure root of N number






