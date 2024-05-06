function isAdult(age) {
    return age >= 18;
  }
  
  const resultAdult = isAdult(25);
  const resultMinor = isAdult(15);
  
  console.log("Чи особа (25 років) доросла?:", resultAdult);  // True, оскільки 25 >= 18
  console.log("Чи особа (15 років) доросла?:", resultMinor);  // False, оскільки 15 < 18