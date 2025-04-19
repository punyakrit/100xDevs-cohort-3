interface point2D{
    x:number
    y:number
}

let obj = {
    x:123,
    y:12,
    name:"djsidj"
}

let sp1: point2D = obj




interface name {
    name: string
}

let nameObj = {
    x:123,
    y:12,
    name:"djsidj"
}

let nameInter: name = nameObj




type pointandName = point2D & name

let intersec = {
    x:123,
    y:12,
    name:"djsidj",
    age:1234
}

let finalInter: pointandName = intersec


type pointORName = point2D | name

let intersec2 = {
    x:123,
    y:12,
    // name:"djsidj",
    age:1234
}

let finalORInter: pointORName = intersec2