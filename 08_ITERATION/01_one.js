//for loop
for (let i = 0; i <= 10; i++) {
    const elememt = i;
    if (elememt == 5) {
        // console.log("5 is best  number")     

    }
    //console.log(elememt)
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 0; j <= 10; j++) {
        //  console.log(`inner loop ${j}`)
        console.log(i + '*' + j + '=' + i * j);
    }
}

let myArray = ["neha", "pooja", "minal"]
for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i])    //neha
    // pooja
    // minal
}

//Keywords => break continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5")  //only 5 elements are printed
        break
    }
    console.log(`value of i is ${i}`);

}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5") //five console print and again continue another statemtnt
        continue
    }
    console.log(`value of i is ${i}`);

}

