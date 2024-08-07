let date = new Date()
console.log(date.toString()) //  Sat Jul 06 2024 21:26:43 GMT+0530 (India Standard Time)
console.log(date.toDateString())  // Sat Jul 06 2024
console.log(date.toLocaleDateString()) //  7/6/2024

console.log(typeof date) // object

let myCreateDate=new Date(2023,0,23,5,3)
console.log(myCreateDate.toLocaleTimeString())  // 5:03:00 AM
console.log(myCreateDate.toDateString()) // Mon Jan 23 2023
console.log(myCreateDate.toLocaleString()) // 1/23/2023, 5:03:00 AM

let myCreateDate2 = new Date("01-14-2023")
console.log(myCreateDate2.toLocaleString()) //1/14/2023, 12:00:00 AM

let TimeStamp= Date.now()
console.log(TimeStamp) //1720341498957
console.log(myCreateDate2.getTime()) //1673634600000
console.log(Math.floor(Date.now()/1000)) //1720341638

let NewDate=new Date()
console.log(NewDate.getMonth()+1); //7
console.log(NewDate.getDay()); //0

NewDate.toLocaleString('default',{
    weekday:"narrow"
   
})






















