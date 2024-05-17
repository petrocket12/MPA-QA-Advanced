function handleNum(number, callbackEven, callbackOdd) {
    if (number % 2 === 0) {
      callbackEven();
    } else {
      callbackOdd();
    }
  }
  
  function handleEven() {
    console.log("number is even");
  }
  
  function handleOdd() {
    console.log("number is odd");
  }
  
  // Виклик функції handleNum з колбеками
  handleNum(4, handleEven, handleOdd); // Виведе "number is even"
  handleNum(3, handleEven, handleOdd); // Виведе "number is odd"