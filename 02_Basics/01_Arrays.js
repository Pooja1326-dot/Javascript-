
const Myarray = [1, 2, 3, 4, 5]
const names = ["pooja", "aruhi", "ayuu", "neha"]
console.log(Myarray[0])

const Myarray2 = new Array(1, 2, 3, 4, 5)
console.log(Myarray2[1])

//---------------Methods----------------
Myarray.push(6)
Myarray.push(7)  //[ 1, 2, 3, 4, 5, 6,7 ]
Myarray.pop()
console.log(Myarray) //[ 1, 2, 3, 4, 5, 6 ]

Myarray.unshift(9)
console.log(Myarray) // [
//     9, 1, 2, 3,
//     4, 5, 6
//   ]

Myarray.shift()
console.log(Myarray) // [ 2, 3, 4, 5, 6 ]


console.log(Myarray.includes(9)) //false
console.log(Myarray.indexOf(3))  //2
console.log(Myarray.indexOf(9)) //-1


const newArray = Myarray.join()
console.log(newArray)  //1,2,3,4,5,6
console.log(typeof newArray)  //string

//Slice and splice
const Myarray3 = new Array(1, 2, 3, 4, 5)
console.log("A", Myarray3)
const myn1 = Myarray3.slice(1, 3)
console.log(myn1)                  //  [ 2, 3 ]
console.log("B", Myarray3) // original array cants modify   B [ 1, 2, 3, 4, 5 ]

const myn2 = Myarray3.splice(1, 3)
console.log(myn2)            //[ 2, 3, 4 ]

console.log(Myarray3) // original array modify 

