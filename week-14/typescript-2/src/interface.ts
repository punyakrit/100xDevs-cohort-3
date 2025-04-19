
// interface Address {
//     city: string;
//     pincode?: number
// };

// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     address: Address
// }

// const user: User = {
//     firstName:"Anoop",
//     lastName:"Singh",
//     age :23,
//     address:{
//         city:"ASR"
//     }
// }

interface Person{
    name : string
    age: number
    // greet : ()=> string
}

const person : Person = {
    name: "Anoop",
    age:22,
    // greet() {
    //     return "Hi"
    // },
}

class Manager implements Person{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
}

let user = new Manager("abc", 21)
console.log(user.age)