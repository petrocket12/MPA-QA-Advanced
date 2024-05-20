const person = {
    firstName: "Peter",
    lastName: "Petrichor",
    age: 30
  };
  
  // Додавання властивості email
  person.email = "petichor@gmail.com";
  
  // Видалення властивості age
  delete person.age;
  
  // Виведення оновленого об'єкта person на консоль
  console.log(person);