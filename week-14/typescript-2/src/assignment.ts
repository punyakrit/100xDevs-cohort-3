interface Admin {
    name:string
    permission: string
}

interface User3{
    name : string
    age: number
}

type UserorAdmin = Admin | User3

function greet(user : UserorAdmin ){
    console.log(user.name)
}