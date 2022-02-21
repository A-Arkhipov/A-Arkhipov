//lesson 7
// one();

let but = document.querySelector('.btn');

// but.onclick = one;

// function one() {
//     console.log('Print')
// }

// function name(a) {
//     return a;
// }

// (a) => 2 * a;

// // console.log(1 + one()); // undefined function result

// function two() {
//     return 7;
// }

let a2 = 8;

function t2() {
    return '<b>Bold</b>';
}

document.querySelector('.btn').onclick = (event) => {
    event.preventDefault();
    document.querySelector('.out-1').textContent = t2();
}