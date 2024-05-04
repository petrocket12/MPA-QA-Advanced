// Сортування цілих чисел з масиву у порядку їх зростання
let numbers = [34, -5, 23, 10, 3, -16, 75, 15];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // Обмін елементами, якщо вони розташовані у невірному порядку
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log("Відсортований масив:", numbers);