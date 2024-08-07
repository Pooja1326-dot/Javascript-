class user {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
            this._password=value;
    }
}
const pooja = new user("pooja@123", "abc")
console.log(pooja.password);
console.log(pooja.email);