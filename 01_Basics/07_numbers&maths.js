const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) //100.00

const otherNumber = 23.8955
console.log(otherNumber.toPrecision(3)) //23.9

const hun = 1000000
console.log(hun.toLocaleString('en-IN'));

//----------------------------Maths----------------------
console.log(Math)
console.log(Math.abs(-4)) //4
console.log(Math.round(4.3)) //4
console.log(Math.ceil(4.2)) //4
console.log(Math.floor(5.6)) //5
console.log(Math.min(3, 4, 5, 6)) //3
console.log(Math.max(3, 4, 5, 6)) //6

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)