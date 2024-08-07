//For of
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num)
}

const name = "pooja"
for (const n of name) {
    console.log(`each character is ${n}`)
}

//Maps 
const map = new Map()
map.set('IN', "india")
map.set('UN', "United Nation")
map.set('FR', "France")
map.set('IN', "india")        //unique value display 
console.log(map)

for (const [i, value] of map) {              //IN :- india
    console.log(i, ':-', value)         // UN :- United Nation
}                                    // FR :- France

const myObject = {
    game: "nfs",
    game2: "spiderman"
}
// for(const [game,value]of myObject){          //it shows error for of loop with object
//     console.log(game,":-",value)
// }



//for in loop
const myObject2 = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject2) {
    console.log(`${key}  shortcut is for ${myObject2[key]}`)
}

const programming = ["js", "cpp", "java", "c++", "html"]
for (const arr in programming) {
    console.log(programming[arr])
}

const map2 = new Map()
map.set('IN', "india")
map.set('UN', "United Nation")
map.set('FR', "France")
map.set('IN', "india")

for (const i in map2) {               //iteration cant        
    console.log(i)
}


//ForEach loop
const codding = ["js", "ruby", "java", "c++"]
codding.forEach(function (item) {
    console.log(item)
})

function pritMe(item) {
    console.log(item)
}
codding.forEach(pritMe)

codding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


const myCodding=[
    {
        language:"js",
        languageFilename:"java"
    },
    {
        language:"py",
        languageFilename:"python"
    },
    {
        language:"html",
        languageFilename:"web"
    }
]
myCodding.forEach((item,key)=>{
    console.log(item,key)
    console.log(item.languageFilename)
})


const codding2 = ["js", "ruby", "java", "c++"]
const val=codding.forEach(function (item) {
    console.log(item)
})
console.log(val)       //undefine because variable declare