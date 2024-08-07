let d=90 // global scope
if (true) {
    let a = 10 //block of scope dont access other area ..
    const b = 20 //same as let and its value is constant           //block scope
    var c = 30  //acees anywhere
    let d=40
    //console.log("inner:",d)
}

// console.log(a) 
// console.log(b)
// console.log(c)
console.log(d)

function one(){
    const userName="pooja"
   
    function two(){
        const website="youtube"
        console.log(userName);
    }
    //console.log(website)
    two()                              // child function acess parent variable .......
}                                      // parent function cant acess child function variable...
one()

if(true){
    const user="neha"
    if(user==="neha"){
        const website="instagram"
        //console.log(user +"  "+ website)
    }
    // console.log(website)
  
}
//console.log(user)


//-----------------interesting-----------------
console.log(addone(5))       //not error
function addone(number){
 return number+1

}


//and

console.log(addtwo(5))            //error because function store in variable 
const addtwo=function(number){
    return number+2
}                                             
