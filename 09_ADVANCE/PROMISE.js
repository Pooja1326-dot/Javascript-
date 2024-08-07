const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //db calls,cryptography,network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('promise consume');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolve")
})


const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "pooja", age: 23 })
    }, 1000)
});

PromiseThree.then(function (user) {
    console.log(user)
})



const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: 'pooja', password: "123haja" });

        }
        else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})


promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(()=>console.log('the promise is either resolve or reject'))




const promise5 = new Promise(function(res,rej){
    setTimeout(function () {
        let error = false
        if (!error) {
            res({ username: 'java', password: "123haja" });

        }
        else {
            rej('ERROR : js went wrong')
        }
    }, 1000)
});

async function consumePromise5(){
   try{
    const response=await promise5
   console.log(response);
   }
   catch (error){
    console.log(error);
   }
}
consumePromise5()



async function getAllusers(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
   }
    catch(error){
        console.log(error)
    }
}

getAllusers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error)
})


