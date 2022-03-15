//lesson 14

fetch('http://api.openweathermap.org/data/2.5/weather?id=727762&appid=fbbad7f7215c3817ef463c36a436de61')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.feature li').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });