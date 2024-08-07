let score = "34"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

//remember
//"33" => 33
//"33abc"=>NaN
//true => 1 ; false =>0

let isloggin = 1
let booleanIsLoggedIn = Boolean(isloggin)
console.log(booleanIsLoggedIn)

//1 => true;  0 => false
//"" => false
//"poo" => true

let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) //string

//----------------------Operations------------------------
let value = 3
let NegValue = -value;
console.log(NegValue)

console.log(2 + 3)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 ** 3)
console.log(2 / 3)
console.log(2 % 3)

let str1 = "pooja"
let str2 = " ahire"
let str3 = str1 + str2;
console.log(str3)

console.log("1" + 2) //12
console.log(1 + "2")//12
console.log("1" + 2 + 2)//122
console.log(1 + 1 + "2")//22

console.log(+true) //1
console.log(+"")//0


let gameCounter = 100
gameCounter++;
console.log(gameCounter)
