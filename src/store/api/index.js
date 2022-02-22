import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'


export function saveToken(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function login(email, password){
  return await axios.post('/auth', {email,password})
}

export async function fetchPosts(){
  return await axios.get('/posts')
}