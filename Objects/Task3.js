// Створення об'єкта car1 з властивостями
const car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
  };
  
  // Створення об'єкта car2 з властивостями
  const car2 = {
    brand: "Toyota",
    model: "Corolla",
    owner: "John Cruze"
  };
  
  // Створення об'єкта car3 з використанням оператора spread для додавання всіх властивостей з car1 та car2
  const car3 = {
    ...car1,
    ...car2
  };
  
  // Виведення об'єкта car3 на консоль
  console.log(car3);