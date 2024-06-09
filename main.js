var cityinput = document.querySelector("#city")
var  btn= document.querySelector("#add")
var cityoutput = document.querySelector("#ocity")
var wind = document.querySelector("#wind")
var temp = document.querySelector("#temp")
var disription= document.querySelector("#dis")

btn.addEventListener("click",()=>{
    let p =fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityinput.value+'&appid=c134113f4f7f42238837f07533225bbd')
p.then((value)=>{
    return value.json()
}).then((value)=>{
    cityoutput.innerHTML=value.name
    wind.innerHTML=value.wind.speed
    temp.innerHTML=value.main.temp
    disription.innerHTML=value.weather[0].description
})
})
