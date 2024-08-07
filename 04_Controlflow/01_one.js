//IF STATEMENT
// < , > , <= , >=, == , != ,===,!==
const isUserLoggedIn = true // = is assign and == is compare === is check also datatype
const temprature = 41
if (temprature < 50) {
    console.log("less than 50")
} else {
    console.log("temprature is greater than 50")
}


if (2 == "2") {
    console.log("executed")  // executed
}

if (2 === "2") {
    console.log("executed")  // nothing return
}


// if(score>100){
//     const power ="fly";
//     console.log(`user power:${power}`)
// }
// console.log(`user power:${power}`)             //error 


const balance=500
if(balance>500){
    console.log("less than")
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else {
    console.log("less than 1200")
}


const userLoggedIn=true;
const debitCard=true
const loggedInfromGoogle=false
const loggedInfromEmail=true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy")
}
if(loggedInfromGoogle || loggedInfromEmail ){
    console.log("user logged in")
}

