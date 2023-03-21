const calculator = {
    multiply: function(num1, num2) {
      return num1 * num2;
     }
  };
//   console.log(calculator.multiply(2, 3)); // Output: 6
  
  function subtract(num1, num2) {
    return num1 - num2;
  }

  module.exports = {
    subtract: subtract
  };
// module.exports = calculator