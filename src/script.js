//lesson 9

const one = document.querySelector(".one");
let btn = document.querySelector(".btn");

btn.onclick = function () {
    one.style.width = '105px';
    one.style.paddingBottom = '40px';
    console.log(btn, one);

    one.classList.add('two', 'three');

    one.classList.remove('two');

    this.classList.toggle('three');
}

//attributes

// console.log(one.getAttribute('data'));
// console.log(document.querySelector('link').getAttribute('href'));

// one.setAttribute('data-num', 6);

let gas = document.querySelectorAll('.gas');
// console.log(gas.length);
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('one');
a.onclick = function () {
    alert('Hello!');
}

document.querySelector('.test').appendChild(a);
console.log(a);