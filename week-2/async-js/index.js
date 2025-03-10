// // print sum function 

// function sum1(a,b){
//     return a,b
// }

// let ans = sum1(2+3)

// function looping(n){
//     let sol = 0
//     for(let i =0; i<=n; i++){
//         sol += i
//     }
//     return sol
// }

// let anss = looping(10)
// // console.log(anss)

// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(1000000);
// console.log(ans1);
// const ans2 = sum(100000000);
// console.log(ans2);
// const ans3 = sum(10000000000);
// console.log(ans3);

// const fs = require("fs")

// console.log(Date.now());
// const a = await fs.readFile("a.txt","utf8")
// console.log(a)
// console.log(Date.now());


const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("c.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

