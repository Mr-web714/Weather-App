const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const key =  prompt("enter your api key");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humi = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let img = document.querySelector(".weather-icon");
let inp = document.querySelector(".search input");
let btn = document.querySelector("button");
let dis = document.querySelector(".weather")


 async function check(city_name) {
    const res = await fetch(url + city_name + `&appid=${key}` + `&units=metric`);
    let data = await res.json();
    dis.style.display = "block";
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humi.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
    city.innerHTML = data.name;
    if(data.weather[0].main == "Clouds"){
        img.src =  "images/clouds.png";
    }
    else if(data.weather[0].main == "Clouds"){
        img.src =  "images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        img.src =  "images/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        img.src =  "images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        img.src =  "images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        img.src =  "images/drizzle.png";
    }
    inp.value = "";
}
// check("germany");



btn.addEventListener("click" , () => {
    if(inp.value == ""){
        alert("Invalid Input!");
    }
    else {
        check(inp.value);
        
    }
})