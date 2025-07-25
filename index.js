const convertToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9)
};

console.log(convertToCelsius(155));

const describeTemperature = (fahrenheit) => {
    const celsius = convertToCelsius(fahrenheit);

    if(fahrenheit < 0) {
        return "Very Cold";
    }
    else if (fahrenheit < 20) {
        return "Cold";
    }
    else if (fahrenheit < 30) {
        return "Warm";
    }
    else if (fahrenheit < 40) {
        return "Hot";
    }
    else if (fahrenheit >= 40) {
        return "Very Hot";
    }
};

const input = prompt("Enter a temperature in Fahrenheit:");

const fahrenheit = parseFloat(input);

const celsius = convertToCelsius(fahrenheit);

const description = describeTemperature(fahrenheit);

alert(`Temperature Is ${celsius}°C and feels ${description}.`);


