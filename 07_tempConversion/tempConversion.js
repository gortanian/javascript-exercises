const ftoc = function(tempInFarenheit) {
  // takes in a temperature in farenheit and returns a temperature in celsius

  // convert temperature to celsius using the formula (32*f -32) * 5/9 
  let tempInCelsius = (tempInFarenheit - 32) * 5 / 9;

  // round tempInCelsius to single decimal place
  tempInCelsius = Math.round(tempInCelsius * 10) / 10;

  return tempInCelsius;
};

const ctof = function(tempInCelsius) {
  // takes in a temperature in celsius and returns a temperature in farenheit

  // convert temperature to celsius using the appropriate formula
  let tempInFarenheit = (tempInCelsius * 9 / 5) + 32;

  // round tempInCelsius to single decimal place
  tempInFarenheit = Math.round(tempInFarenheit * 10) / 10;

  return tempInFarenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
