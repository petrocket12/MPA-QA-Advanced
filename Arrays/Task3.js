const numbers = [10, 20, 30, 40, 50];

// Обчислення суми за допомогою методу reduce
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Сума всіх елементів масиву:", sum);