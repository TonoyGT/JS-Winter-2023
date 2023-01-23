/**
 * 
 * Due: Jan-22 (eod)
 * 
 */
/**
 * Question-1:
 * 
 * if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
 *      assign 25 into result1
 * otherwise
 *      assign 35 into result1
 * 
 * sentence1 = 'go to home'
 * result1 = 25
 * 
 * sentence1 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
 * result1 = 25
 * 
 * sentence1 = '' 
 * result1 = 35
 * 
 * sentence1 = 'View the latest news'
 * result1 = 35
 * 
 * 
 * Hint: Ternary operator
 * 
 */
//let sentence1 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.';
//let sentence1 = '';
//let sentence1 = 'go to home';
let sentence1 = 'View the latest news'


//let sentence2 = 'Go to here';


let result1 = 0;
let result2 =0;

let setence1L = sentence1.length;
let sentence1S = sentence1.startsWith('Go to');

//let setence2L = sentence2.length;
//let sentence2S = sentence2.startsWith('Go to');

if (setence1L > 100 || sentence1S.true)
    result1 = 25
else
    result1 = 35    

/*if (setence2L > 100 || sentence2S.true)
    result2 = 25
else
    result2 = 35
   */     




// code
console.log(`result1 -> ${result1}`);
//console.log(`result2 -> ${result2}`);