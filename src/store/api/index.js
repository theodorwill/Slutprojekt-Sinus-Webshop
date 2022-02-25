import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'


export function saveToken(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function login(email, password){
  return await axios.post('/auth', {email,password})
}

export async function registerAccount(payload){
  console.log("end", payload)
  axios.post('/register', payload)
}

export async function getUser(){
  return await axios.get('/me')
}

export async function getItems(){
  return await axios.get('/items')
}