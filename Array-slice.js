
// slice

// const number = [3,4,5,7,8,34,45,6,23,6,23,66,];
// const numberSlice = number.slice(4,8);
// console.log(numberSlice);

//splice
const number = [3,4,5,7,8,34,45,6,23,6,23,66,];
const numberSlice = number.splice(4,2);
// console.log(numberSlice)
// console.log(number)



const numberSplice = number.splice(4 , 3 , 99 , 100 , 111 , 222);
console.log(numberSplice)
console.log(number)