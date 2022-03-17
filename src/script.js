//lesson 17

let b = document.querySelector('.tap');
let c = document.querySelector('.add');

let a = [[1, 2, 3], [3, 4, 6], [4, 5, 7], [8, 9, 3]];

// for (let i = 0; i < 10; i++) {
//     a[i] = Math.trunc(Math.random() * 30);
// }

console.log(a);

let a_res = [];

b.onclick = () => {
    a_res = a.filter(el => el.includes(3));
    // console.log(element);
    console.log(a_res);
};



// function f2() {
//     alert('Halt!');
// }