// document.getElementById("count").innerText = 5

// let count=5 + 7// Can Add Sub and MUL as well as DIvide
// console.log(count)

// let firstbatch=5
// let secondbatch=7
// let count=firstbatch+secondbatch
// console.log(count)

// let myAge=12
// let humandog=7
// let mydogage=myAge*humandog
// console.log(mydogage)


// let count=5
// count=count+1
// count++

// console.log(count)

//Intialiaze the count as zero
//Clicked listen
//increement
//change the count
//reflect the changes
//Made a function in html file
// function increement() {
//     console.log("Button clicked")
// }
// function countdown() {
//     console.log(5)
//     console.log(5)
//     console.log(5)
//     console.log(5)

// }
// let onelap = 1
// let twolap = 2
// let threelap = 3
// function totallap() {
//     console.log(onelap + twolap + threelap)
// }
// totallap()
let countEL = document.getElementById("count1")
console.log(countEL)
let count = 0
function increement() {
    console.log('Clicked')
    count++
    countEL.innerText = count
    console.log(countEL)
}
function reset() {
    countEL.innerText = 0
    count = 0
}
