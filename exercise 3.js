//1
//index
// Fungsi untuk mengkonversi suhu Fahrenheit ke Celcius
export function convertToCelcius(Fahrenheit) {
    return (fahrenheit - 32)*5/9;
}

// Fungsi untuk menampilkan hasil konversi suhu
export function displayTemperature(fahrenheit) {
    const celcius = convertToCelcius(fahrenheit)
        console.log('${fahrenheit} Fahrenheit = ${celcius}Celcius');
    }  

//export
// Import modul
import {displayTemperature}
from './exercise 3.js';

// Konversi suhu dan tampilkan hasil 
displayTemperature(99.20);

//2
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="bmi.js"></script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>

//BMI
import calculateBMI from './index.js';

const weight = 70;
const height = 1.7;

const result = calculateBMI(weight, height);
console.log(`BMI: ${result.bmi}`);
console.log(`Category: ${result.category}`);

//index.js
export default function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let category;

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal Weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
  } else if (bmi >= 30) {
    category = 'Obese';
  }

  return { bmi, category };
}

