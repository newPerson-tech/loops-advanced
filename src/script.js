//Task 1 Write a function to print numbers from 20 to 30 with the interval 0,5


const taskOne = document.getElementById('task-one');
const numbersArray = [];
for (let i = 20; i <= 30; i += 0, 5) {
    taskOne.innerHTML = `${numbersArray[i]}`;
}



//Task 2 Write a function to count exchange rate usd-uah

const exchangeRate = 27;

const taskTwo = document.getElementById('task-two');
for (let i = 10; i <= 100; i++) {
    const uah = i * exchangeRate;
    const exchangeAmount = (uah / 100).toFixed(2);
    taskTwo.innerHTML = `${i} uah = ${exchangeAmount}`;
}