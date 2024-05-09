function recursiveCountdown(num) {
    console.log(num);
    if (num > 0) {
      recursiveCountdown(num - 1);
    }
  }
  
  recursiveCountdown(5);