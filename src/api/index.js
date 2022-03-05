import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'


//USER START

export function saveToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function login(email, password) {
  return await axios.post('/auth', {
    email,
    password
  })
}

export async function registerAccount(payload) {
  console.log("end", payload)
  axios.post('/register', payload)
}

export async function updateAccount(payload) {
  console.log("update payload:", payload)
  axios.patch('/me', payload)
}

export async function getUser() {
  return await axios.get('/me')
}
//USER END

//Page functionality 
export async function getPage(page) {
  return await axios.get('/items?page=' + page)
}



export async function getCategory(category) {
  return await axios.get('/items?category=' + category)
}

export async function getFavItem() {
  return await axios.get('/items/10')
}


// ORDER.......................................................

export async function getOrder() {
  return await axios.get("/orders");
}

export async function postOrder(items) {
  return await axios.post("/orders", {
    items
  });

}

export async function patchOrder(id, status) {
  return await axios.patch("/orders/" + id, {
    status
  });

}

//ADMIN............................................................


export async function addProduct(title, shortDesc, longDesc, imgFile, category, price) {

  return await axios.post('/items/', {
    title,
    shortDesc,
    longDesc,
    imgFile,
    category,
    price
  })


}

export async function patchProduct(id, title, shortDesc, longDesc, imgFile, category, price) {
  return await axios.patch('/items/' + id, {
    title, shortDesc, longDesc, imgFile, category, price
  })
}

export async function deleteProduct(id) {
  return await axios.delete('/items/' + id)
}


export async function getImages() {
  return await axios.get("/images");

}