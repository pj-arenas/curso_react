import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number:'040-1234567' }
  ]) 
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
    if (!persons.find(dd=> dd.name===newName)){
      const newPersonObj = {
        name: newName,
        id: persons.length+1,
        number: newNumber
      }
      
      setPersons(persons.concat(newPersonObj))
      setNewName('')
      setNewNumber('')
    }else{
      alert(`${newName} is already added to phonebook`)    
      
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map((person) => <p key={person.id}>{person.name} {person.number}</p>)}
    </>
  )
}

export default App