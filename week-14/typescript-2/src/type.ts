// interface User {
//     name:string,
//     age:number
// }

type User = {
    name : string,
    age : number
}

// Type is used to done union and intersections
type Employee = {
    name: string
    startDate : string
}

type Manager1 = {
    name:string
    deaprtment : string
}

type teamLead = Employee & Manager1

let lead :teamLead = {
    name:"ABC",
    deaprtment:"ajnsj",
    startDate:"01-02-2002"

}



type numberORstring = string | number

type Studnet = {

}

function isLeage(user :User){
    return user.age
}