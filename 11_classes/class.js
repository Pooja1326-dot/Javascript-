class user {
    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;

    }
    encryptPassword() {
        return `${this.pass}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("neha", "neha@123gmail.com", "133");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//behind 
function User(username, email, pass) {

    this.username = username;
    this.email = email;
    this.pass = pass;

}
user.prototype.encryptPassword = function () {
    return `${this.pass}abc`;
}
const chai2 = new User("neha", "neha@123gmail.com", "133");
console.log(chai2.encryptPassword());