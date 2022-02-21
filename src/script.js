//lesson 8
// let num1 = document.querySelector('.in-1');
// let num2 = document.querySelector('.in-2');

let but = document.querySelector('.btn');
let divElem = document.querySelectorAll('div');

console.log(divElem);

but.onclick = () => {
    // console.log(num1.value);
    // console.log(num2.value);
    // let i = +num1.value;
    // let k = +num2.value;
    // console.log(i, k);
    // while (i <= k) {
    //     console.log(i);
    //     document.querySelector('.out-1').innerHTML += i + ' ';
    //     i++;
    // }
    let i = 1;
    // console.log(divElem[i]);
    while (i < divElem.length) {
        divElem[i].style.background = 'orange';
        i++;
    }

}

