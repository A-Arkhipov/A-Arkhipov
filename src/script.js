//lesson 15

// let a = new Set();
// a.add(1);
// a.add('text');
// a.add(7);
// a.add(1);
// console.log(a);
// console.log(a.keys());

let m = [];
for (let i = 0; i < 10; i++) {
    m[i] = Math.round(Math.random() * 5);
}

console.log(m);

let a = new Set(m);

m = Array.from(a);

console.log(m);

// for (let i of a) {
//     console.log(i);
// }


// const set1 = new Set();
// set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// console.log(set1);

// // Delete any point with `x > 10`.
// set1.forEach((point) => {
//     if (point.x > 20) {
//         set1.delete(point);
//     }
// });

// console.log(set1.has());
// expected output: 1