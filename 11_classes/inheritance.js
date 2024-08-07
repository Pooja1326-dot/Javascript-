class user {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`username is ${this.username}`);
    }
}
class teacher extends user {
    constructor(username, email, password) {
        super(username);
        this.email = email
        this.password = password
    }
    addcourse() {
        console.log(`new course added by  ${this.username}`);
    }
}
const chai = new teacher("neha", "neha@gmail.com", 214564);
chai.addcourse()
const masalachai=new user("jiya")
masalachai.logme()
console.log(chai instanceof teacher);
