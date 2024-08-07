const userEmail = "pooja@gmail.com"
if (userEmail) {
    console.log("got user email")
} else {
    console.log("dont have user email")
}


//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}
const userEmail2 = []
if (userEmail2.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

//Nulish coalescing operator(??):null undefined
let val1;
// val1 = 5 ?? 10  //5
// val1=null ?? 10    //10
// val1 = undefined ?? 15
// val1=null??10??20    //10
console.log(val1)


//Ternary Operator
//Condition?true:false
const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("less than 80") : console.log("more than 80")

