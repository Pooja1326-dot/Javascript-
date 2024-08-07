const names=["poo","ayuu","neha"]
const name2=["anjali","natasha","rohit"]

names.push(name2)
console.log(names) //[ 'poo', 'ayuu', 'neha', [ 'anjali', 'natasha', 'rohit' ] ]

const all=names.concat(names)
console.log(all) //[ 'poo', 'ayuu', 'neha', [ 'anjali', 'natasha', 'rohit' ] ]


//Spread operation
const allname=[...names,...name2]
console.log(allname) //[ 'poo', 'ayuu', 'neha', 'anjali', 'natasha', 'rohit' ]

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another=another.flat(Infinity)
console.log(real_another)  //[
                           //     1, 2, 3, 4, 5,
                           //     6, 7, 6, 7, 4,
                            //     5
                            //   ]

console.log(Array.isArray("pooja")) //false
console.log(Array.from("pooja")) //[ 'p', 'o', 'o', 'j', 'a' ]
console.log(Array.from({name:"pooja"})) // [] *interesting interview not create array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))  // [ 100, 200, 300 ]





