var searchInput = document.querySelector('.search')
var city= document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var valueTemp = document.querySelector('.temperature span')
var shortDesc = document.querySelector('.short_desc')
var moreDesc  = document.querySelector('.more_desc span')
var wind = document.querySelector('.wind span')
var cloud = document.querySelector('.cloud span')
var container = document.querySelector('.container')
var body = document.querySelector('body')


const changeWeather = async () =>{
    let searchValue = searchInput.value.trim()
    let urlApi = `http://api.weatherapi.com/v1/current.json?key=983cb6f02cc4437b8ff145039220603&q=${searchValue}&aqi=yes`
    let data = await fetch(urlApi).then(res => res.json())
    city.innerText = data.location.name
    country.innerText = data.location.country
    time.innerText = data.location.localtime
    const temp = data.current.temp_c
    valueTemp.innerText = data.current.temp_c  
    valueTemp.innerHTML += `<sup>o</sup>C`
    shortDesc.innerText = data.current.condition.text
    moreDesc.innerText = data.current.vis_miles + ' (m)'
    wind.innerText = data.current.wind_mph + ' (m/s)'
    cloud.innerText = data.current.cloud + ' (%)'
    console.log(temp.value);
    if(temp >= 26){
        body.setAttribute('class','hot')
        ,container.setAttribute('id','hot')
    }

    if(temp >= 18 && temp <26 ){
        body.setAttribute('class','autumn')
        ,container.setAttribute('id','autumn')
    }

    if(temp >= 10 && temp <18 ){
        body.setAttribute('class','cold')
        ,container.setAttribute('id','cold')
    }
    if(temp <10 ){
        body.setAttribute('class','winter')
        ,container.setAttribute('id','winter')
    }

    console.log(document.querySelector('body'))
    console.log(container)
}


searchInput.addEventListener('keypress', function(e){
    if(e.code == 'Enter'){
        changeWeather()
    }
})
