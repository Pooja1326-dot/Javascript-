const name="pooja"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //string interpulation

// ('') ("")

const gameName=new String ('pooja-Ahire')
console.log(gameName)
console.log(typeof gameName)  //object

console.log(gameName[0]) //p
console.log(gameName.length) //10

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) //o
console.log(gameName.indexOf('p')) //0


console.log(gameName.toLowerCase())

const newString=gameName.substring(0,4)
console.log(newString)


const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newString2="   poo         "
console.log(newString2)
console.log(newString2.trim())

const u1="my name is -- pooja"
console.log(u1.replace('--','='))


console.log(u1.includes('hey')) //false
console.log(u1.includes('pooja')) //true

console.log(gameName.split('-'));
