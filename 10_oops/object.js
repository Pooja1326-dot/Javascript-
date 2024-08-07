function multiplyBy5(num) {
    return num * 5
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);      //function behaves like object 
console.log(multiplyBy5.prototype);

//function
//array             --> there threes are object ->null
//string 


function createuser(username, score) {
    this.username = username;
    this.score = score;
}
createuser.prototype.incerement = function () {
    this.score++
}
createuser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}
const chai = new createuser("chai", 25);
const tea = new createuser("tea", 10);

chai.printMe();
tea.printMe();

/* 
here's what happens behind the scenes when the new keyword is used:

a new object is created : the new keyword initialites the creation of a javascript object.

a prototype is linked : the newly created object gets linked to the prototype property of the constructor function. 
this means that it has access to properties and methods defined on the constructor's prototype.

the constructor is called: the constructor function is called with the specified argument and this is bound to the
newly created object. if no explicit return value is specified from the constructor. javascript assumes this,the 
newly created object, to be the intened return value.

the new object is returned: after the constructor function has been called, if it doesn't return a non-primitive value
(object,array,function,etc.)the newly created object is returned.

*/


