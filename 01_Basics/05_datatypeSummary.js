//Primitive

// 7 types : String,number,boolean,null,undefined,Symbol,BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)//false
const bigNumber = 4794665n;
console.log(typeof bigNumber) //bigint

//Reference (non primitive)

//Arrays, objects, functions

const name = ["pooja", "manisha", "poo", "neha"]
console.log(typeof name) //object

let myobj={
    Uname:"pooja",
    age:20
}
console.log(myobj)

const myfun=function(){
 console.log("Hello World!");
}
myfun()

//null => typeof is object
//========================Memory=======================
//Stack (primitive) , Heap (non-primitive)

let myYoutubeName="poojaAhire.com"
let anotherName=myYoutubeName
anotherName="chai aur code"

console.log(myYoutubeName)
console.log(anotherName)

let user1={
    email:"poojaahire.com",
    upi:"user!1"
}
let user2=user1

user2.email="neha@12gmail.com"

console.log(user1.email)
console.log(user2.email)