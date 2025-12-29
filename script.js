
// console.log('hello');
// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// console.log("C");

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });


// console.log("4"); 


// // 1 4 3 2


// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     return Promise.resolve("B");
//   })
//   .then((res) => {
//     console.log(res);
//   });

// console.log("C");
// // c a b


// Promise.resolve()
//   .then(() => {
//     console.log("1");
//     return new Promise((resolve) => {
//       console.log("2");
//       resolve();
//     });
//   })
//   .then(() => {
//     console.log("3");
//   });

// console.log("4");
// // 4  1 2 3

let a = [];
let b = a;
b.push(1);
console.log(a);

