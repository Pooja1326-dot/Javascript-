class user {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`username :${this.username}`);
    }
    createId() {            //if static then not return other
        return `123`
    }
}
const pooja = new user("pooja");
// console.log(pooja.createId());

class teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}
const iphone = new teacher("iphone", "i@phone.com");
console.log(iphone.logme());
console.log(iphone.createId());