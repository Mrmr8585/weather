let searchbtn = document.querySelector('.search-icon')
let searchBar = document.querySelector('#search-box')
let cities = 
{
    tehran:{city:'Tehran',temp:12,weather:'sunny' , humidity:23,windspeed:32},
    shiraz:{city:'Shiraz',temp:9,weather:'windy' , humidity:12,windspeed:14},
    tabriz:{city:'Tabriz',temp:1,weather:'rainy' , humidity:43,windspeed:12},
    mahshad:{city:'Mashhad',temp:16,weather:'snowy' , humidity:7,windspeed:24},
    esfehan:{city:'Esfehan',temp:23,weather:'sunny' , humidity:15,windspeed:18},
}
searchbtn.addEventListener('click',function(){
    let searchBarValue = searchBar.value
    let mainCityDatas =cities[searchBarValue]
    if (mainCityDatas) {
        document.querySelector('.top-text').textContent = mainCityDatas.city
        document.querySelector('.temperature').textContent = mainCityDatas.temp
        document.querySelector('.status').textContent = mainCityDatas.weather
        document.querySelector('.humidity').textContent = 'Humidity : ' + mainCityDatas.humidity + '%'
        document.querySelector('.wind').textContent =  'wind speed :' + mainCityDatas.windspeed + 'km/h'
    } else 
    {

    }
})