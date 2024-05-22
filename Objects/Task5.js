const users = [
    { name: "Peter", email: "petrichor@gmail.com", age: 25 },
    { name: "Anna", email: "salamek@gmail.com", age: 30 },
    { name: "Robert", email: "potato@gmail.com", age: 35 }
  ];
  
  // Перебір всіх елементів масиву і виведення значення їхніх властивостей
  for (const user of users) {
    // Деструктуризація об'єкта user
    const { name, email, age } = user;
    
    // Виведення значень на консоль
    console.log(`Ім'я: ${name}, Електронна пошта: ${email}, Вік: ${age}`);
  }