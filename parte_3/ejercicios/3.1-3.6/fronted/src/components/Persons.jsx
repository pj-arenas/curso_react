import agendaService from "../services/server";
const Persons = ({searchPersons,setErrorMessage}) =>{
   
    const handleClick= (e)=>{
        if(window.confirm(`Esta usted seguro de que quiere eliminar a ${e.target.name}`)){
            agendaService.deleteperson(e.target.id).then((devuelto)=>{
                
                setErrorMessage({message:`Se ha eliminado correctamente a ${e.target.name} `, error: false})
                setTimeout(() => {
                    setErrorMessage(null)
                  }, 5000)
            }).catch((error)=>{
                setErrorMessage({message:`Este numero de telefono ya no se encuentra en el servidor se ha eliminado de este  `, error: true})
                setTimeout(() => {
                  setErrorMessage(null)
                }, 5000)
              })
        }
        

    }
        
        
            return(
                <>
                    
                    {searchPersons.map((person) => <p key={person.id}>{person.name} {person.number} <button id={person.id} name={person.name} onClick={handleClick}>delete</button></p>)}
                </>
            )
       
    

}

export default Persons

