const user={
    username:"pooja",
    login:8,
    signin:true,
    getUserDetails:function(){
        // console.log(`username:${this.username}`);
        console.log(this)
    }
}
console.log(user.username);
console.log(user.getUserDetails());




// function User(username,login,isloggedin){
//     this.username=username;
//     this.login=login;
//     this.isloggedin=isloggedin

//     return this
// }
// const userONE= User("pooja",12,true)
// const user2=User("neha",12,false);
// console.log(userONE);                                     //overwtite so its not good for programming


function User(username,login,isloggedin){
        this.username=username;
        this.login=login;
        this.isloggedin=isloggedin;
        this.greeting=function(){
            console.log(`welcome ${this.username}`);
        }
        return this
    }
    const userONE= new User("pooja",12,true)
    const user2= new User("neha",12,false);       //new keyword is generate or create a new object its called like instance.
    console.log(userONE.constructor);
    console.log(user2);      

    