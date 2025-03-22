// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     const area = this.width * this.height;
//     return area;
//   }

//   paint() {
//     console.log(`Painting with color ${this.color}`);
//   }
// }

// const rect = new Rectangle(2, 4);
// const area = rect.area();
// console.log(area);
// rect.paint()

// const date = new Date()

// console.log(date)

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)

function random(resolve){
resolve()
}
function abc(){
  console.log("hello")
}
let p = new Promise(random)
p.then(abc)