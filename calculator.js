function createCalculator() {
    return {
      add: function(a, b) {
        return a + b;
      },
      subtract: function(a, b) {
        return a - b;
      },
      multiply: function(a, b) {
        return a * b;
      },
      divide: function(a, b) {
        return b !== 0 ? a / b : "Error: Division by zero";
      }
    };
  }
  
  const calc = createCalculator();
  
  console.log(calc.add(10, 5));
  console.log(calc.subtract(10, 5));
  console.log(calc.multiply(10, 5));
  console.log(calc.divide(10, 5));
  console.log(calc.divide(10, 0));
  