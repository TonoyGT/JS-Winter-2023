/**
 * Due date: Jan-26 (Eod)
 */

const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */
let sentence1Lower = sentence1.toLocaleLowerCase();
let result = sentence1Lower.replace("a", "Queen and King" );
console.log(`result1 -> ${result}`)


/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */
const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
let sentence2Lower = sentence2.toLowerCase();
let length = sentence2Lower.length;
let startsWith = sentence2Lower.startsWith('com');
let endsWith = sentence2Lower.endsWith('google news');
let presentOnly1 = sentence2Lower.indexOf('from') === sentence2Lower.lastIndexOf('from') && sentence2Lower.indexOf('from') >0;




let secL = sentence2Lower.length-2;
let charAt_last2 = sentence2Lower.charAt(secL);

console.log(`length -> ${length}`)
console.log(`startsWith -> ${startsWith}`)
console.log(`endsWith -> ${endsWith}`)
console.log(`presentOnly1 -> ${presentOnly1}`)
console.log(`charAt_last2 -> ${charAt_last2}`)



/**
 * localeCompare
 * substring/slice
 * split
 */

/**
 * Replace
 * 
 */

