const express = require('express')
const app = express()
app.use(express.json())
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/info', (request, response) => {
  
  const currentTime = new Date().toString();
  const servir = `</div><p>Phone book has info for ${persons.length}</p><p>${currentTime}</p></div>`
  
  response.send(servir)
  
})

app.get('/api/person/:id', (request,response)=>{
  const id = Number(request.params.id)
  const personFind = persons.find((person)=> person.id===id)

  if(personFind){
    response.json(personFind)
  }else{
    response.status(404).end()
  }
})

app.delete('/api/person/:id', (request,response)=>{
  const id = Number(request.params.id)
  persons = persons.filter((person)=> person.id!==id)

  response.status(204).end()
})

app.post('/api/persons', (request,response)=>{
  const recibedBody = request.body
  console.log(recibedBody)
  if(recibedBody.name && recibedBody.number){
    if(!persons.find((person)=> person.name===recibedBody.name)){
      const newPerson ={
        id: Math.floor(Math.random() * 10000),
        name:recibedBody.name,
        number:recibedBody.number
      }
      persons= persons.concat(newPerson)
      response.json(newPerson)
    }else{
      return response.status(422).json({ error: 'name must be unique' })
    }
    
  }else{
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
