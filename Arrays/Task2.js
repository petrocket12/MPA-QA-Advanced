const initialArray = [1, 2, 3, 4, 5];

// Створення нового масиву з мутованими значеннями
const mutatedArray = initialArray.map((element, index) => element * index);

console.log("New array:", mutatedArray);
