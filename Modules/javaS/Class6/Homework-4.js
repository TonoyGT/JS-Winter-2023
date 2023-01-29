
// Due date: Jan 30 (eod)

/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
let userName1 = 'rahat tonoy';
let userName1Split = userName1.split(' ');
let result = userName1Split.length > 1 && userName1Split.length <3;

console.log(`abbr -> ${userName1Split}`);
console.log(`abbr -> ${result}`); 


/**
 * Q2: Create abbreviation for a 4-word sentence
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 */
let sentence2 = 'have A great day'

let sentence2Lower = sentence2.toUpperCase();
let sentence2LowerSpl = sentence2Lower.split(' ');
let a = sentence2LowerSpl[0];
let b = sentence2LowerSpl[1];
let c = sentence2LowerSpl[2];
let d = sentence2LowerSpl[3];
 

//console.log(`abbr -> ${a.charAt(a.length = 0)+b.charAt(b.length = 0)+c.charAt(c.length = 0)+d.charAt(d.length = 0)}`); 



let abbr = a.charAt(a.length = 0)+b.charAt(b.length = 0)+c.charAt(c.length = 0)+d.charAt(d.length = 0);
// code
console.log(`abbr -> ${abbr}`);     // YNWA



/**
 * Q3: Count the number of words in the sentence
 */
let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
let sentence3Upper = sentence3.toUpperCase();

let sentence3Split = sentence3Upper.split(' ');



console.log(`The Sentence -> ${sentence3Upper}`); 
console.log(`Total Words -> ${sentence3Split}`);
console.log(`Total Words in Number -> ${sentence3Split.length}`);