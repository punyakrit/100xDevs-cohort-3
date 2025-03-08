
// function greet(user){
//     let userGreet = "Mr"
//     if(user.gender === "Male"){
//         userGreet = "Mr"
//     }else{
//         userGreet = "Mrs"
//     }
//     console.log(userGreet + " " + user.name +" how are you")
// }

// let user = {
//     name: "Anoop",
//     aage: 23,
//     gender : "Male"
// }

// greet(user)


const user = [
    {
        name:"Anoop",
        age:22,
        gender : "Male"
    },
    {
        name:"Anoop",
        age:22,
        gender : "Male"
    },
    {
        name:"Anoop",
        age:22,
        gender : "Male"
    }
]

for(let i = 0; i<user.length; i++){
    if(user[i].age >18 && user[i].gender === "Male"){
        console.log(user[i].name)
    }
}