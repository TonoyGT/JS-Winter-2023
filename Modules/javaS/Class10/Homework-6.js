
// Due date: Feb-9 (Eod)

/**
 * Q1:
 * Convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
const str1 = 'YOu lIVe ONlY ONcE';
let titleCaseStr1 = titleCase(str1);             // final answer must be in the variable

// code
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
console.log("\n Q1: Convert any given sentence into Titlecase \n")
console.log(str1);                  // 'YOu ONlY lIVe ONcE'
console.log(titleCaseStr1);         // 'You Only Live Once'


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> 'doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
const str2 = 'hello dear how are you doing';
let reverseStr2 = reverseString(str2);           // final answer must be in the variable
// code

function reverseString(str) {
    return str.split(' ').reverse().join(' ');
}

console.log("\n Q2:Reverse a String (word by word) \n")
console.log(str2);              // 'hello dear how are you doing'
console.log(reverseStr2);       // 'doing you are how dear hello'


/**
 * Q3:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
const arr3 = [1, 1, 1, 2, 3, 1, 2];
let avg;                // final answer must be in the variable

// code
let total =0;
for (let i =0; i<arr3.length; i++){

    total += arr3[i];
}
avg = total/arr3.length; 

console.log("\n Q3:Find the average of the given array: \n")
console.log(arr3);
console.log(total);      // [1, 1, 1, 2, 3, 1, 2]
console.log(avg);       // 1.57


/**
 * Q4:
 * Create abbreviation for a given sentence.
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'gooD mORNIng' -> 'GM'
 * 'aPPlE bANAna chErRY' -> 'ABC'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
 * 'qUEen' -> 'Q'
 */
const str4 = 'aPPlE bANAna chErRY dog';
let abbr = abbreviation(str4);              // final answer must be in the variable
// code


function abbreviation(str) {
    str = str.toUpperCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0);
    }
    return str.join(' ');
  }
console.log("\n Q4:Create abbreviation for a given sentence. \n")
console.log(str4);          // 'apple banana cherry'
console.log(abbr);          // ABC


/**
 * Q5:
 * Convert all string values in the given array into Uppercase
 * 
 * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
 * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
 * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
 * 
 * 
 * Note: final answer must be in the SAME variable (arr5)
 */
let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];
console.log("\n Q5:Convert all string values in the given array into Uppercase \n")
console.log(arr5);      // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
// code
function arrayUppercase(arr) {
    //newarr = [];
    for (let i = 0; i < arr.length; i++) {
        arr = arr[i].toUpperCase();   
    }
    return arr;
  }


console.log(arrayUppercase(arr5));      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
