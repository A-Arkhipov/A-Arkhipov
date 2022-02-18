//lesson 6
let out = document.querySelector('.out');
// for (let i = 0; i < 5; i++) {

//     for (let k = 0; k < 5; k++) {
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

for (k = 1; k <= 9; k++) {
    // out.innerHTML += k + "_";
    for (let i = 1; i <= 9; i++) {
        out.innerHTML += `${k} x ${i} = ${i * k} <br>`;
        // out.innerHTML += i + ' ';
    }
    out.innerHTML += '<br>';
}   