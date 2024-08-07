//--Singleton-- > constructor do 

// object literals
// Object.create // constructor through as singleton
const MySym = Symbol("key1")

const jsuser = {
    name: "pooja",
    age: 20,
    [MySym]: "key1",
    location: "surat",
    email: "pooja@google.com",
    isLoggedIn: false,
    lastLogInDays: ["monday", "tuesday", "wednesday"]

}
console.log(jsuser.email)
console.log(jsuser["email"]) //pooja@google.com

// console.log(jsuser."name") //error
console.log(MySym)
console.log(typeof [MySym])//object

console.log(jsuser.email = "neha@23gmail.com")
console.log(jsuser)
//==>  ans
// name: 'pooja',
// age: 20,
// location: 'surat',
// email: 'neha@23gmail.com',
// isLoggedIn: false,
// lastLogInDays: [ 'monday', 'tuesday', 'wednesday' ],
// [Symbol(key1)]: 'key1'

Object.freeze(jsuser)

jsuser.email = "pooja@123gmail.com"
console.log(jsuser) //freeze is use to not change value by the user it is freeze and save that value


//unfreeze and that allow the
jsuser.greeting = function () {
    console.log("hello jsuser")
}
console.log(jsuser.greeting)//undefined
 console.log(jsuser.greeting())// [Function (anonymous)] hello jsuser

jsuser.greeting2 = function () {
    console.log(`hello js user , ${this.name}`)
}
console.log(jsuser.greeting());//hello jsuser
console.log(jsuser.greeting2())//hello js user , pooja