/* Challenge 1- Weather in Kelvin :

 Convert Kelvin to Celsius, Fahrenheit And Newton : */

// 1- Convert Kelvin to Celsius :

const kelvin = 10;
let celsius = kelvin - 273;

// 2- Convert Celsius to Fahrenheit :
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// 3- Convert Fahrenheit to Newton :
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
