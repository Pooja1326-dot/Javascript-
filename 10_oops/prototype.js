// let myName="pooja    ";
// let myName2="disha   ";
// console.log(myName.trueLength);


let myname=["pooja","neha"];
let hobby={
    pooja:"dancing",
    neha:"singing",

    getNehaHobby:function(){
        console.log(`hobby is ${this.pooja}`);
    }
}
Object.prototype.jiya=function(){
    console.log(`jiya is present in all objects`)
}
Array.prototype.heypooja=function(){
    console.log(`pooja says hello`);
}
hobby.jiya();
myname.jiya(); 

// hobby.heypooja();             //given error because array prototype
myname.heypooja();               // given output




//inheritance
const user={
    name:"pooja",
    email:"pooja@gmail.com"
}
const teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
} 

const TAsupport={
    makesAssignmet:'js assignment',
    fullTime:true,
    __proto__:teachingSupport
}
teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)
let anotherUsername="neha    "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}
anotherUsername.truelength();
"nehajiyaa".truelength();