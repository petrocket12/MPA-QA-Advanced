function checkOrder(available, ordered) {
    if (ordered === 0) {
      return "Your order is empty";
    } else if (ordered > available) {
      return "Your order is too large, we don’t have enough goods.";
    } else {
      return "Your order is accepted";
    }
  }
  
  console.log(checkOrder(10, 0)); // Ваше замовлення порожнє
  console.log(checkOrder(10, 20)); // Ваше замовлення занадто велике, товарів недостатньо.
  console.log(checkOrder(10, 5)); // Ваше замовлення прийнято