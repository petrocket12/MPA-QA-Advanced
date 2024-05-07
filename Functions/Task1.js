//Declaration 
function calculateArea(width, height) {
    return width * height;
  }
  
  const areaDeclaration = calculateArea(3, 10);
  console.log("Площа прямокутника (function declaration):", areaDeclaration);


//Expression
const calculateAreaExpression = function(width, height) {
    return width * height;
  };
  
  const areaExpression = calculateAreaExpression(4, 10);
  console.log("Площа прямокутника (function expression):", areaExpression);


//Arrow Function
const calculateAreaArrow = (width, height) => width * height;

const areaArrow = calculateAreaArrow(8, 10);
console.log("Площа прямокутника (arrow function):", areaArrow);