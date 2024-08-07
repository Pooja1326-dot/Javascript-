const tinderUser = new Object()  //singltone object
const tinderUser2 = {}
console.log(tinderUser2) //{} 

tinderUser.id = "123abs"
tinderUser.name = "poo"
tinderUser.age = 20
console.log(tinderUser) //{ id: '123abs', name: 'poo', age: 20 }

const regularUser = {
    email: "pooja@gmail.com",
    fullname: {
        userFullName: {
            firstName: "pooja",
            lastName: "ahire"
        }
    }
}
console.log(regularUser.fullname.userFullName)
//{ id: '123abs', name: 'poo', age: 20 }
//{ firstName: 'pooja', lastName: 'ahire' }

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// and also use spread operation
const obj4 = { ...obj1, ...obj2 }
console.log(obj4)        //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "pooja123@gmail.com"
    },
    {
        id: 2,
        email: "naha4@gmail.com"
    }
]
const j=users[0].email
console.log(j)                         //pooja123@gmail.com
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//[ 'id', 'name', 'age' ]
// [ '123abs', 'poo', 20 ]
// [ [ 'id', '123abs' ], [ 'name', 'poo' ], [ 'age', 20 ] ]

console.log(tinderUser.hasOwnProperty('isloggedin'))  //false

//destructure
const course ={
    courseName:"js",
    price:9000,
    courseInstructor:"poo"
}
const {courseInstructor:instructor}=course
console.log(instructor);              // destructure is like new name of that using : symbol

[{
    "name":"pooja",
    "courseNameis":"hindi",

}];