// function greet(name:string){
//     console.log(`Hello ${name}`)
// }

// greet("anoop")

// function sum(a:number , b :number):number{
//     return 1
// }

// let ans: number = sum(123,33)


function delayedCall(fn: () => void) {
    setInterval(fn, 2000)
}

delayedCall(function () {
    console.log("hello")
})