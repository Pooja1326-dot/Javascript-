const user = {
    userName: "neha",
    price: 900,
    welcomeMessage: function () {
        console.log(`${this.userName},welcome to website`)
        // console.log(this) //neha,welcome to website
        // {
        //     userName: 'neha',
        //     price: 900,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
        //   pooja,welcome to website
        //   {
        //     userName: 'pooja',
        //     price: 900,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }

}
user.welcomeMessage()
user.userName = "pooja"
user.welcomeMessage()
console.log(this)     //{}

function chai() {
    console.log(this)
}
chai()

const i = () => {
    let fname = "poo"
    console.log(this.fname)  //undefined  and write only this its return {}
}
i()

const addTwo = (num1, num2) => {
    return num1 + num2                     //CURLYbases use then write return keyword
}
console.log(addTwo(3, 4))  //7

const addTw = (num1, num2) => num1 + num2       //dont use return keyword
console.log(addTwo(3, 4)) //7

const addTo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))

const value=(num1,num2)=>({username:"poo"})    //  { username: 'poo' }
console.log(value(3,4))                       


