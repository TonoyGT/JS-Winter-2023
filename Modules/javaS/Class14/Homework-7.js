
// Due: Feb-18 (EOD)
/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */


console.log("\n \x1B[31mQ1:Create function to get the smallest value in the given string-array \n");
let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 
let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']

function findSmallestWord (arrS){
    
        return arrS.reduce((a,b) => a.length <= b.length ? a:b)
    }

let words1 = findSmallestWord(words);
let planets1 = findSmallestWord(planets);


console.log(words);
console.log(words1);
console.log(planets);
console.log(planets1);    


/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */


console.log("\n \x1B[31mQ2:Create function to get the first value in the numbers-array greater than 10 \n");
let num1 = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17]; 
let num2 = [1, 3, 3, 65, 43, 87, 17];
let num3 = [1, 3, 3, 6, 10, 7, 23, 1, 20]; 

function findNum (arrNum){
    return arrNum = arrNum.find(a => a >10);
}

let num11 = findNum(num1);
let num22 = findNum(num2);
let num33 = findNum(num3);


console.log(num11)
console.log(num22)
console.log(num33)



/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */


console.log("\n \x1B[31mQ3:Create function to get the minimum value in the given numbers-array \n");
let num4 = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17]; 
let num5 = [1, -3, 33, 65, 3, 87, 17];
let num6 = [1, 23, 3, -6, 10, -7, 23, -1, 20]; 

function minNum (arrNum){
    return Math.min.apply(Math,arrNum);
    
}

let num44 = minNum(num4);
let num55 = minNum(num5);
let num66 = minNum(num6);


console.log(num44);
console.log(num55);
console.log(num66);


