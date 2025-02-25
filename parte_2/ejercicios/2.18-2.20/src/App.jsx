import { useState,useEffect } from 'react'
import Seeker from './components/Seeker.jsx'
import restCountries from './services/RestCountries.jsx'

function App() {
 
  const [countries, setcountries] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(()=>{
    restCountries.getAll()
      .then(dbcountries=>{
        console.log(dbcountries.data)
        setcountries(dbcountries.data.map((country)=> country.name.common))
      })
  },[])

return(
  <>
  <Seeker countries={countries} setcountries={setcountries} setResult={setResult} />
  {result}
  </>
)
  
  

}

export default App
