
interface userObject {
    name: string,
    age: number
}

function greet(user : userObject){
    console.log(user.name)
}


let user : userObject = {
    name:"wdwd",
    age:12
}