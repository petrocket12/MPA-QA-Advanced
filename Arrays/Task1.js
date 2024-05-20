const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  // Перевірка кожного числа масиву
  if (numbers[i] > 0) {
    positiveCount += 1;  // Збільшення лічильника позитивних чисел
  } else if (numbers[i] < 0) {
    negativeCount += 1;  // Збільшення лічильника негативних чисел
  } else {
    zeroCount += 1;  // Збільшення лічильника нульових чисел
  }
}

console.log("Кількість позитивних чисел:", positiveCount);
console.log("Кількість негативних чисел:", negativeCount);
console.log("Кількість нульових чисел:", zeroCount);