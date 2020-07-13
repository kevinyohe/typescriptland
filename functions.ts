const add = (a: number, b: number) =>{
    return a + b;
};

const subtract = (a: number, b: number): number =>{
    return a-b;
};

const divide = (a: number, b: number): number =>{
    if (b===0){
        throwError('Cannot div by zero')
    }
    return a/b;
}

const multiply = (a: number, b: number): number => {
    return a*b;
}

let stuff = add(444,4444);
console.log(stuff)
let bignum = multiply(444,94949494938);
console.log(bignum)

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
}


let biggiesize = divide(100,2.3);
