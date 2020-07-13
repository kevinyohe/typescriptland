var apples = 5;
var now = new Date();
console.log(now.getFullYear());
// WHen to use annotations
// 1 Function that returns any type
var json = '{"x": 10, "y": 20}';
var coordinates;
coordinates = JSON.parse(json);
console.log(coordinates);
console.log(typeof (apples.toString()));
//2 When we declare a variable on one line
// and instanciate it later
var words = ['red', 'green', 'blue'];
var foundWord; // gives any type if not declared
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
//3 corner case example
// When we have a variable whos type cant be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
console.log("Number above zero:" + numberAboveZero + " ");
