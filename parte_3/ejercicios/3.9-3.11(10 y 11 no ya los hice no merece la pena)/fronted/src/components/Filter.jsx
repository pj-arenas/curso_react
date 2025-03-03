

const Filter = ({persons, setSearchPersons}) => {
    
    const searchPerson = (event)=>{
        const personsFilter = persons.filter((person)=> person.name.toLowerCase().includes(event.target.value.toLowerCase()) )
     
        setSearchPersons(personsFilter)
        
      }
    return(
        <>
            filter shown with <input  onChange={searchPerson}/>
        </>
        
    )
}

export default Filter