var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var divide = function (a, b) {
    if (b === 0) {
        throwError('Cannot div by zero');
    }
    return a / b;
};
var multiply = function (a, b) {
    return a * b;
};
var stuff = add(444, 4444);
console.log(stuff);
var bignum = multiply(444, 94949494938);
console.log(bignum);
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    throw new Error(message);
};
var biggiesize = divide(100, 2.3);
