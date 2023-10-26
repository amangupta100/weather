const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=Metric&q="

const api_key = '66fbcc4ab3421a64922f71ba228d2741'
let btn = document.querySelector(".search")
let field = document.querySelector("#tagForInput")
 let weather_icon = document.querySelector(".weather")

async function checkWeather(city){
    let response = await fetch(url+city+`&appid=${api_key}`)
    let data = await response.json();
    console.log(data)
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C"
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humid-percent").innerHTML = data.main.humidity + '%'
    document.querySelector(".wind-percent").innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main =="Clouds"){
weather_icon.src = "../images/cloud.png"
    }
    else if(data.weather[0].main =="Clear"){
        weather_icon.src = "../images/clear.png"
    }
    else if(data.weather[0].main =="Snow"){
        weather_icon.src = "../images/snow.png"
    }
    else if(data.weather[0].main =="Rain"){
        weather_icon.src = "../images/rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weather_icon.src = "../images/drizzle.png"
    }
}
btn.addEventListener("click",()=>{
    checkWeather(field.value)
    console.log(field.value)
})