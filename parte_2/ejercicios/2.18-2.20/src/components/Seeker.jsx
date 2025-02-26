import restCountries from '../services/RestCountries'

const Seeker = ({countries,setResult})=>{

    const findCountry =(name)=>{
        restCountries.getName(name)
        .then((country)=>{
          restCountries.getWeather(country.data.latlng)
          .then((weather)=>{
            console.log(weather)
            setResult(
                <div key={country.data.name.common}>
                  <h1>{country.data.name.common}</h1>
                  <p>Capital {country.data.capital[0]} </p>
                  <p>Area {country.data.area}</p>
                  <h2>Languages</h2>
                  <ul>
                  {Object.values(country.data.languages).map((language)=> <li key={language}>{language}</li>)}
                  </ul>
                  <img src={country.data.flags.png}/>
                  <h2>Weather in {country.data.capital[0]}</h2>
                  <p>Temperature {(weather.data.main.temp-273.15).toFixed(2)} Celsius</p>
                  <img src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}/>
                  <p>Wind {weather.data.wind.speed} m/s</p>
                </div>
            )
          })
        
        })
    }

    const handleChange = (e)=>{
        const countriesFind = countries.filter((country)=> (country.toUpperCase()).includes(e.target.value.toUpperCase()))

        if(countriesFind.length>10){
            setResult(<p>Too many matches, especify another filter</p>)
                
            
          }else if(countriesFind.length>1 && countriesFind.length<=10){
            
            setResult(countriesFind.map((country)=> <p key={country}>{country} <button id={country} onClick={(e)=>{findCountry(e.target.id)}}>view</button></p>))
            
          }else if(countriesFind.length===1){
            findCountry(countriesFind[0])
            
          }else if(countriesFind.length===0){
            setResult(<p>No coincide ningun pais</p>)
          }else{
            setResult(<p>yo q se bro a petao</p>)
          }
    }

    return(
        <>
        <label>find countries <input onChange={handleChange}/></label>
        </>
    )

}

export default Seeker