import axios from 'axios' 
const apiUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const apiKey = 'ffedf0af5d1668f5e937adf6f684da87'

const getAll=()=>{
    return axios.get(`${apiUrl}/all`)
    
}

const getName=(name)=>{
    return axios.get(`${apiUrl}/name/${name}`)
    
}

const getWeather=(latlng)=>{
    console.log(latlng)
    //hayq hacer la solitiud a la api
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${apiKey}`)
}

export default { 
    getAll: getAll, 
    getName: getName,
    getWeather: getWeather
  }