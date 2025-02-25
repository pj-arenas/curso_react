import axios from 'axios'
import { useState, useEffect } from 'react'
import agendaService from "../services/server";


const PersonForm = ({persons, setPersons}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const changeName = (event)=>{
        setNewName(event.target.value)
      }
      const changeNumber = (event)=>{
        setNewNumber(event.target.value)
      }
      const addNewPerson = (event) =>{
        event.preventDefault()
        const personFind = persons.find(dd=> dd.name===newName)
        const newPersonObj = {
          name: newName,
          number: newNumber
        }
        if (!personFind){      
          
          agendaService.create(newPersonObj)
          .then(response=>{
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
          })
          
          
          
        }else{
          
          if(window.confirm(`${personFind.name} ya esta añadido, ¿Quieres remplazar su antuguo numero por este nuevo?`)){
            agendaService.update(personFind.id, newPersonObj).then((response)=>{
              setPersons(persons.concat(response.data))
              setNewName('')
              setNewNumber('')
            })
          }    
          
        }
      }
    return(
        <form onSubmit={addNewPerson}>
            <div>
            name: <input value={newName} onChange={changeName}/>
            </div>
            <div>
            number: <input value={newNumber} onChange={changeNumber}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm