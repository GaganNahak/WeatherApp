let place=document.querySelector("#inputField").value
let city=document.querySelector("#cityName")
let temp=document.querySelector("#temperature")
let des=document.querySelector("#description")


const getWeather=async()=>{
    let url=`https://api.weatherapi.com/v1/current.json?key=fa59943ac56440c8869143257252305&q=${document.querySelector("#inputField").value}&aqi=no`
    const res=await fetch(url)
    const data=await res.json()
    console.log(data)
    console.log(data.location.name)

    let cel=data.current.dewpoint_c
    let faren=data.current.dewpoint_f
    let humidity=data.current.humidity
    let wind_kph=data.current.wind_kph
    let wind_mph=data.current.wind_mph       
    let wind_dir=data.current.wind_dir
    let wind_degree=data.current.wind_degree
    let pressure_mb=data.current.pressure_mb
    let pressure_in=data.current.pressure_in
    let cloud=data.current.cloud
    let feelslike_c=data.current.feelslike_c

    city.innerHTML="CITY NAME:     "+data.location.name+" <br>"+"STATE:     "+data.location.region+" <br>"+"COUNTRY:     "+data.location.country+" <br>"+"Time:     "+data.location.localtime+" <br>"
    temp.innerHTML="Temperature: "+cel+"°C and "+faren+"°F <br>"
    temp.innerHTML+="Humidity: "+humidity  +"% <br>"
    temp.innerHTML+="WIND: "+wind_kph+"KM/PH and "+wind_mph  +" M/PH <br>"
    temp.innerHTML+="WIND DIRECTION: "+wind_dir+" <br>"
    temp.innerHTML+="FEELS LIKE "+feelslike_c+"°C"
    des.innerHTML="Description: "+data.current.condition.text+" <br>"


}
// getWeather()