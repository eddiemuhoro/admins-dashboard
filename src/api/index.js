import axios from 'axios';

export const fetchUsers= () => axios.get('http://localhost:6000/users')

export const createUser =(newUser) =>axios.post('http://localhost:6000/users/new', newUser)
