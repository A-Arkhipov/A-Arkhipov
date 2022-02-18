//lesson 5

// for

// let div = document.querySelectorAll('.out');
// console.log(div);
// div.style.backgroundColor = 'red';

// for (let i = 0; i < div.length; i += 1) {
//     // console.log(i);
//     div[i].style.background = 'red';
//     div[i].onclick = click;
// }

// function click() {
//     console.log("Click!")
// }

// let b = document.getElementsByClassName('out');
// console.log(b);
// b[1].style.border = '1px solid green';

// let c = document.getElementsByTagName('div');
// console.log(c);

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}

// while