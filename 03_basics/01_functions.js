function myname(){
    console.log("hello")
}
myname()//hello
myname()//hello

function addTwonum(num1,num2)/*parameters*/{
   console.log(num1+num2);
}
addTwonum(3,4) //7  //arguments
addTwonum(9,"4") //94
addTwonum(8,"a") //8a
addTwonum(9,null) //9

const result=addTwonum(6,7)//13
console.log("result:",result) //result: undefined

//another way 

function addTwonum(number1,number2)/*parameters*/{
     return number1+number2
 }
 const result2=addTwonum(6,7)//13
console.log("result:",result2) //result: undefined

function loginUser(username){
    if(username===undefined)/*!username*/{
        console.log("please enter a username")
        return //another code is not run
    }
    return `${username} just logged in`
}
// console.log(loginUser("pooja "))//pooja justlogged in
console.log(loginUser()) //undefined
//if condition is true then undefined just logged in is return


function CalculateCartPrice(...num1){
return num1
}
console.log(CalculateCartPrice(200,400,500)) //[ 200, 400, 500 ] //usind rest or spread operator


function CalculateCartPrice(val1,val2,...num1){
    return num1
   
    }
    console.log(CalculateCartPrice(200,400,50,46)) //[ 50, 46 ]

    
//object with function
    const user={
        username:"pooja",
        price:4000
    }

function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)//username is pooja and price is 4000


//array with function
const myarray=[23,45,5,6,7]
function returnSecond(getarray){
    return getarray[1]
}
console.log(returnSecond(myarray)) //45

