import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(`${baseUrl}`)
}

const create = (newPersonObj) => {
    return axios.post(baseUrl, newPersonObj)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteperson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
  
export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deleteperson: deleteperson
}