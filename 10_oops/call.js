function setUsername(username){
    this.username=username
    
}
function createUser(username,name,password){
    setUsername.call(this,username)
    this.name=name;
    this.password=password;
}

const chai=new createUser("chai","jiya",21245)
    
console.log(chai)