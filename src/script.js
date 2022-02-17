let btn = document.querySelector('.b-5');

// console.log(btn);

btn.onclick = (event) => {
    // event.preventDefault();
    // console.log('Task')
    // btn.innerHTML = Date();
    // let inText = document.querySelector('.i-5').value;
    // document.querySelector('.out-71').innerHTML = inText;

    // console.log(inText.length);
    // if (inText.length >= 6) {
    //     document.querySelector('.b-5').style.backgroundColor = 'red';
    // }
    // else {
    //     document.querySelector('.b-5').style.backgroundColor = 'green';
    // }

    // document.querySelector('.i-1').value = document.querySelector('.i-2').value;

    // document.querySelector('.out-5').innerHTML = 
    //     document.querySelector('#text-1').value;
}

document.querySelector('.sel-1').onchange = () => {

    document.querySelector('.out-5').innerHTML = document.querySelector('.sel-1').value;
    // document.querySelector('.out-5').innerHTML = '1';
}