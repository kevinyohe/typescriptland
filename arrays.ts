const carMakers: string[] = ['ford', 'lexus', 'bmw'];
// string[] is not needed when inferred

// any type of value, avoid any if possible
const randomdata = [];

//will infer an array of Date
const dates = [new Date(), new Date()];

//two dimential array
const carsByMake = [
    ['f150', 'es350','c300']
]


// flexible types
const importantDates: (Date | string)[] = [new Date(), 'yesterday']
importantDates.push(new Date());
console.log(importantDates[2])