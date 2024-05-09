function divide(numerator, denominator) {
    // Перевіряємо, чи обидва аргументи є числами
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      throw new Error("Обидва аргументи повинні бути числами.");
    }
  
    // Валідація для запобігання ділення на нуль
    if (denominator === 0) {
      throw new Error("На нуль ділити не можна.");
    }
  
    // Повертаємо результат ділення
    return numerator / denominator;
  }
  
  // Виклик функції з try-catch-finally
  try {
    const result = divide(10, 2);
    console.log("Результат ділення:", result);
  } catch (error) {
    console.error("Помилка:", error.message);
  } finally {
    console.log("Робота завершена");
  }
  
  try {
    const result = divide(10, 0); // Спричинить помилку, оскільки ділення на нуль
  } catch (error) {
    console.error("Помилка:", error.message);
  } finally {
    console.log("Робота завершена");
  }
  
  try {
    const result = divide(10, "5"); // Спричинить помилку, оскільки '5' не є числом
  } catch (error) {
    console.error("Помилка:", error.message);
  } finally {
    console.log("Робота завершена");
  }