const calculator = require('./calculator');  

console.log(calculator.x);

try {
    console.log(calculator.divideTwoNumbers(10, 0));
} catch (e) {
    console.log(e);
}

try {
    let result = console.log(calculator.addTwoNumbers(5, 5));
    // console.log(calculator.addTwoNumbers(result, 5));
} catch (e) {
    console.log(e);
}

try {
    console.log(calculator.subtractTwoNumbers(10, 5));
} catch (e) {
    console.log(e);
}

try {
    console.log(calculator.multiplyTwoNumbers(5, 5));
} catch (e) {
    console.log(e);
}

try {
    console.log(calculator.divideTwoNumbers(10, 2));
} catch (e) {
    console.log(e);
}