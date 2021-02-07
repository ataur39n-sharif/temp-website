//api url - api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apikey = '160c2da697144e70067412add7176ada';
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',function(){
    getWeatherInfo();
})


function getWeatherInfo() {
    let inputValue = document.getElementById('inputValue').value;
    // const apikey = '160c2da697144e70067412add7176ada';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apikey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('cityName').innerText = data.name;
            document.getElementById("temperature").innerText = data.main.temp;
            document.getElementById("weather").innerText = data.weather[0].main;

            const icon = data.weather[0].icon;
            document.getElementById("icon").src =  `https://openweathermap.org/img/wn/${icon}@2x.png`;
        })
}