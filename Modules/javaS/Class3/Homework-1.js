

// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp = 47;
let cTemp = 20;
let kTemp = 300;

let fTempIntoCTemp = (fTemp - 32) / 1.8
console.log(`\n${fTemp}°F is equals to ${fTempIntoCTemp}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTempIntoKTemp = (fTemp + 459.67) * 5/9;
console.log(`\n${fTemp}°F is equals to ${fTempIntoKTemp}°K`);

/**
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * For formulas:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * Due date: Fri (20-Jan)
 */
//C -> F
let fTempIntoFTemp = (cTemp*9 / 5) +32
console.log(`\n${cTemp}°C is equals to ${fTempIntoFTemp}°F`);

//C -> K

let fTempIntoKCTemp = (cTemp + 273.15)
console.log(`\n${cTemp}°C is equals to ${fTempIntoKCTemp} K`);
 
//K -> F

let fTempIntoKFTemp = (kTemp * 9 /5) - 459.67
console.log(`\n${kTemp} K is equals to ${fTempIntoKFTemp}°F`);
//K -> C

let fTempIntoCKTemp = (kTemp - 273.15)
console.log(`\n${kTemp} K is equals to ${fTempIntoCKTemp}°C`);