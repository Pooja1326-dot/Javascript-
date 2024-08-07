//filter
const myNum = [1, 2, 3, 4, 5, 6]
const newNum = myNum.filter((num) => num > 4)
console.log(newNum)

const myNum2 = [1, 2, 3, 4, 5, 6]
const newNum2 = myNum2.filter((num) => {
    return num > 4
})
console.log(newNum)

const num = []
myNum.forEach((num) => {
    if (num > 4) {
        newNum.push(num)
    }
})
console.log(newNum)

const mynum = [1, 2, 3, 4, 5, 6, 7]
const newnum3 = myNum.map((num) => num + 10)
console.log(newnum3) //in scope return keyword require


//chaining
const no = mynum.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(no)            //[ 41, 51, 61, 71 ]

//Reduce
const Mynum = [1, 2, 3]
const sumInitial = Mynum.reduce(function (acc, curval) {
    console.log(`acc : ${acc} and currval:${curval}`)
    return acc + curval
}, 0)
console.log(sumInitial)    //6



const Mynum2 = [1, 2, 3,4]
const total=Mynum2.reduce((acc,curr)=>acc+curr,0)
console.log(total)   //10


const shopingCart=[
{
    itemname:"js course",
    price:9000
},
{
    itemname:"web course",
    price:10000
},
{
    itemname:"data science course",
    price:12000
}
]

const shop=shopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(shop)    //31000

