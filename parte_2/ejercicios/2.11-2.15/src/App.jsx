import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import agendaService from './services/server'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [searchPersons, setSearchPersons] = useState(persons)
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
          <Filter persons={persons} setSearchPersons={setSearchPersons}/>
        <h2>Numbers</h2>
          <PersonForm persons={persons} setPersons={setPersons}/>
        <h2>Numbers</h2>
          <Persons searchPersons={searchPersons}/>
      </>
    )
  }else{
    <>No hay nadie en la agenda aun</>
  }
}

export default App