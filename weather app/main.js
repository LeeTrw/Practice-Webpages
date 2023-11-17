const api = {
    key: "e43792fe5bb1472c2afdffc2b31e20bc",
    base: "https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

window.addEventListener("load", function() {
    fetch(`${api.base}weather?q=london&units=metric&APPID=${api.key}`)
    .then(response => {
        return response.json();
}).then(weather => {
    displayResults(weather);
    changeBackground(weather);
});
});

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value); 
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then((weather) => {
        displayResults(weather);
        changeBackground(weather);
});
}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = `${weather.weather[0].main}`;

    let hilow = document.querySelector('.current .hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    let humid = document.querySelector('.current .humid');
    humid.innerHTML = `<span>Humidity: </span>${weather.main.humidity}<span>%<span>`;
}

function dateBuilder (d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June',
     'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
     'Friday', 'Saturday'];

     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();

     return `${day} ${date} ${month} ${year}`;
}


function changeBackground (weather) {
    console.log(weather.weather[0].main);

    if (weather.weather[0].main == 'Rain') {
        document.body.style.backgroundImage = "url('images/rain.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid rgb(69, 184, 250)";
    } else if (weather.weather[0].main == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('images/storm.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid black";
    } else if (weather.weather[0].main == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid rgb(42, 188, 233)";
    } else if (weather.weather[0].main == 'Clouds') {
        document.body.style.backgroundImage = "url('images/cloudy.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid rgb(201, 201, 201)";
    } else if (weather.weather[0].main == 'Snow') {
        document.body.style.backgroundImage = "url('images/snow.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid white";
    } else if (weather.weather[0].main == 'Fog') {
        document.body.style.backgroundImage = "url('images/fog.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid rgb(153, 144, 144)";
    } else if (weather.weather[0].main == 'Mist') {
        document.body.style.backgroundImage = "url('images/mist.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid rgb(201, 201, 201)";
    } else if (weather.weather[0].main == 'Sunny') {
        document.body.style.backgroundImage = "url('images/sunny.webp')";
        document.querySelector("header input.search-box").style.borderBottom = "3px solid rgb(255, 217, 0)";
    } else {
        document.body.style.backgroundImage = "url('images/bg.webp')";

    }
};