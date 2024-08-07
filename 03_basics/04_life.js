//immediately invoked function expression (IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
})();    //also use arrow function    //named IIFE and ; use of two IIFE 

//global scope problem so we use IIFE

((name)=>{
    console.log(`DB CONNECTED ${name}`) 
})("poo")


