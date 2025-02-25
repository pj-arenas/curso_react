import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import agendaService from './services/server'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [searchPersons, setSearchPersons] = useState(persons)
  const [errorMessage, setErrorMessage] = useState(null)
  useEffect(()=>{
    agendaService.getAll()
      .then(dbPersons=>{
        
        setPersons(dbPersons.data)
        
        setSearchPersons(dbPersons.data)
      })
  },[])
  

  if(persons.length>0){

    return (
      <>
      
        <h2>Phonebook</h2>
        <Notification errorMessage={errorMessage}  />
          <Filter persons={persons} setSearchPersons={setSearchPersons}/>
        <h2>Numbers</h2>
          <PersonForm persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage}/>
        <h2>Numbers</h2>
          <Persons searchPersons={searchPersons} setErrorMessage={setErrorMessage}/>
      </>
    )
  }else{
    <>No hay nadie en la agenda aun</>
  }
}

export default App