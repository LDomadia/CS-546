function checkIsProperNumber(val, variableName) {
    // 0 in JS is defined as "undefined" (I think, or null)
    // if (!val) throw `${variableName || 'provided variable'} is not supplied`;
    if (typeof val != 'number') throw `${variableName || 'provided variable'} is not a number`;
    if (isNaN(val)) throw `${variableName || 'provided variable'} is NaN`;
}

let x = "Hello World";
module.exports = {
    description: "This is a calculator for CS-546",
    addTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, 'The first number');
        checkIsProperNumber(num2, 'The second number');
        return num1 + num2;
    },
    subtractTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, 'The first number');
        checkIsProperNumber(num2, 'The second number');
        return num1 - num2;
    },
    multiplyTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, 'The first number');
        checkIsProperNumber(num2, 'The second number');
        return num1 * num2;
    },
    divideTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, 'The first number');
        checkIsProperNumber(num2, 'The second number');
        if (num2 === 0) throw "Error: Division by Zero";
        return num1 / num2;
    },
    x
}