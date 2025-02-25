import axios from 'axios' 
const apiUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll=()=>{
    return axios.get(`${apiUrl}/all`)
    
}

const getName=(name)=>{
    return axios.get(`${apiUrl}/name/${name}`)
    
}

const getWeather=(name)=>{
    //hayq hacer la solitiud a la api
    return axios.get(`${apiUrl}/name/${name}`)
}

export default { 
    getAll: getAll, 
    getName: getName, 
  }