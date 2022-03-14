//lesson 11

const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 'Hi',
    y43: 1999,
    "villa de": 300,
};

a.yyy = 555;

// a.z2 = 111;

// console.log(a.z2);

// let k = 'b';
// console.log(a[k]);

delete a.a;

console.log(a);

let out = 0;

for (let key in a) {
    if (Number.isInteger(a[key])) {
        out += a[key];
    }
    // out += key + ' - ' + a[key] + '<br>';
    // if (key == 'y43') {
    //     delete a[key];
    // }
}

console.log(out);
// outA(a);

function outA(outA) {
    document.querySelector('.out-1').innerHTML = outA;
}