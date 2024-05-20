// Вихідний масив
const numbersList = [ 1, 10, 14, 2, 4, 5, 43, 34 ];

// Створення копії вихідного масиву
const sortedNumbersList = [...numbersList];

// Сортування копії масиву
sortedNumbersList.sort((a, b) => a - b);

// Виведення масивів на консоль
console.log("Вихідний масив:", numbersList);
console.log("Відсортований масив:", sortedNumbersList);