

let apples = 5;

let now: Date = new Date();

console.log(now.getFullYear())


// WHen to use annotations

// 1 Function that returns any type
const json = '{"x": 10, "y": 20}';
let coordinates: {x: number, y: number};
 coordinates = JSON.parse(json);

console.log(coordinates);

console.log(typeof(apples.toString()));


//2 When we declare a variable on one line
// and instanciate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;  // gives any type if not declared

for(let i=0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}


//3 corner case example
// When we have a variable whos type cant be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i=0; i<numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}
console.log(`Number above zero: ${numberAboveZero} `)