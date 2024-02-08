//Task 1 Write a function to print numbers from 20 to 30 with the interval 0,5

function printNumbersWithInterval() {
    const numbersArray = [];
    for (let i = 20; i <= 30; i += 0, 5) {
        document.write(`${numbersArray[i]}`);
    }
}

printNumbersWithInterval();


//Task 2 Write a function to count exchange rate usd-uah

const exchangeRate = 27;

function countDollars() {
    for (let i = 10; i <= 100; i++) {
        const uah = i * exchangeRate;
        const exchangeAmount = (uah / 100).toFixed(2);
        document.write(`${i} uah = ${exchangeAmount}`);
    }
}

countDollars();