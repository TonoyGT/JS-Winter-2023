let marks = [ 15, 20,36,85,99];
let names = [ "ax", "bx", "c","dx"];

let output = marks.splice(3,1,80);
let output1 = names.map(a => a.toLocaleUpperCase());
let output2 = names.filter(ele => ele.includes("x"));
let output3 = marks.find(ele => ele > 10);


console.log("\n Splice \n");
console.log(marks);
console.log(output);
console.log("\n Map \n");
console.log(names);
console.log(output1);
console.log("\n Filter \n");
console.log(names);
console.log(output2);
console.log("\n Find \n");
console.log(names);
console.log(output3);
