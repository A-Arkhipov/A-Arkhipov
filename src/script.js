//lesson 10

let c = ['Ivan', 37, 'Oven'];
let d = [];

let out = document.querySelector('.out-1');
let but = document.querySelector('.press');

// but.onclick = () => {
//     for (let i = 0; i < c.length; i++) {
//         out.innerHTML += c[i] + ' ';
//     }

// }

c.push('123');
console.log(c);

console.log(c.pop());
console.log(c);

delete c[1];
console.log(c);
console.log(c[1]);