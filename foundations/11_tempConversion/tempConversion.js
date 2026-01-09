const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * 5 / 9

  Math.round(result * 10) / 10
  
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(celsuis) {
  let result = celsuis * 9 / 5 + 32
   
  Math.round(result * 10) / 10
  
  return Math.round(result * 10) / 10;

};


console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}

