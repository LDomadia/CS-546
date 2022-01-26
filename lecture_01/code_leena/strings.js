const constString = "I am a constant, I cannot be changes, I'm free as a bird";
console.log(constString);

// constString = "I'm not allowed";
// console.log(constString);

let letString = "I am a string that can be changed";
console.log(letString);

letString = "Let string";
console.log(letString);

let blankSpaceString = "   Leena Domadia   ";
console.log(blankSpaceString.length);

// trim() removes whitespace at the beginning and end, not the middle
console.log(blankSpaceString.trim().length);

var varString = "I am a  var string";
console.log(varString);

varString = "Now var";
console.log(varString);

let myConcatString = letString + " " + varString;
console.log(myConcatString);

console.log(letString.concat(" " + varString));

let myConcatString2 = `I am letString: ${letString}, 



I am varString: ${varString}`;
console.log(myConcatString2);

let myString1 = "Hello there, how are you? My name is Leena Domadia";
console.log(myString1.split("?"));