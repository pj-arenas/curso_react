import agendaService from "../services/server";
const Persons = ({searchPersons}) =>{
   
    const handleClick= (e)=>{
        if(window.confirm(`Esta usted seguro de que quiere eliminar a ${e.target.name}`)){
            agendaService.deleteperson(e.target.id).then((devuelto)=>{
                alert('hola')
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

