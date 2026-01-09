const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {

  let x = 0;
  
  array.forEach( num => {
    x += num;

})
  return x;
};

const multiply = function(arrayx) {
    let x = 1;
  
  arrayx.forEach( num => {
    x *= num;

})
  return x;
};

const power = function(a, b) {
  return a ** b;
	
};
const factorial = function(num) {
  let result = 1;

  if (num === 0 || num === 1) {
  return 1;}

  for (let i = num ; i >= 1; i--){
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
