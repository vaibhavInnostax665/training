// Arrays

// 1. ForEach

const numbers = [45, 4, 9, 16,25];
function forEachFunction(value){
    console.log(value);
}
numbers.forEach(forEachFunction);

// 2. Map
function mapFunction(value,index,array){
    return value*2;
}
const numbers1 = numbers.map(mapFunction);
numbers1.forEach(forEachFunction);

// 3. flatMap (does only one level of flattening)
const exampleArray = [1,[2,3,[4]]]
const newArr = exampleArray.flatMap((x)=>x);
newArr.forEach(forEachFunction);

// 4. filter()

const over18 = numbers.filter(filterFunction);
function filterFunction(value){
    return value>18;
}
over18.forEach(forEachFunction);

//5. reduce
// returns new array not manipulate original value

const numbersAre = [3,2,4,87,60];
let sum = numbersAre.reduce(reduceFunction);
function reduceFunction(total=0,value){
    return total + value;
}
console.log(sum);

// 6. every

let allOver18 = numbers.every(everyFunction);
function everyFunction(value){
    return value > 18;
}
console.log(allOver18); // false


// 7. some

const Examples = [15,3,2,2,3];
let someOver30 = Examples.some(someFunction);

function someFunction(value){
    return value >30;
}
console.log(someOver30);