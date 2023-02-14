
const arr3 = ['BASEBall', 'FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
const arr3Result = arr3.map(word => word.toLocaleLowerCase());

function indexOfOccurrence(haystack, needle, occurrence) {
    var counter = 0;
    var index = -1;
    do {
        index = haystack.indexOf(needle, index + 1);
    }
    while (index !== -1 && (++counter < occurrence));
    return index;
}

// Usage
var index = indexOfOccurrence(arr3Result, 'baseball', 2);

console.log(index);