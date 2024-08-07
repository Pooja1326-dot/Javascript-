 //-----------javascript eexecution content-------------------
 //==> global execution context //js is single threading 
 //==> function execution context
 //==> eval execution context 

//javascript code => memory phase / creation phase
                //=> execution phase

                let val1=20
                let val2=9
                function addnum(num1,num2){
                    let total=num1+num2
                    return total
                }
                let result1=addnum(val1,val2)
                let result2=addnum(4,5)
// global execution
//memory phase => val1->undefinded and 2 also addnum->defination  result->undefined result2->undefined
//execution phase => val1 < 20 , val2 < 5 , addnum 6->new  variable environment + execution thread 
//=> delete execution context 

function one() { 
    console.log("one")
    two()
 }
 function two(){
    console.log("two")
    three()
 }
 function three(){
    console.log("three")
 }
 one()
 two()
 three()

 //callstack is use like lifo order above example