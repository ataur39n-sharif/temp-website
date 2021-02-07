//api key -  160c2da697144e70067412add7176ada
//api url - api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = '160c2da697144e70067412add7176ada'
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName').value;
const Temperature = document.getElementById('Temperature');



searchBtn.addEventListener('click',function(){
    // let inputValue = document.getElementById('input').value;
    // console.log(inputValue);
    getWeather();
})

function getWeather() {
    let inputValue = document.getElementById('input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}